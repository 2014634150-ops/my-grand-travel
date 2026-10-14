const ROUTE_SUMMARY = "中国新疆 → 哈萨克斯坦 → 乌兹别克斯坦 → 阿塞拜疆 → 格鲁吉亚 → 亚美尼亚 → 土耳其 → 塞尔维亚 → 波黑 → 埃及 → 再次进入土耳其 → 阿曼 → 阿联酋 → 缅甸 → 泰国清迈 → 老挝 → 越南 → 菲律宾 → 上海";

function json(data, status = 200, headers = {}) {
  return Response.json(data, { status, headers: { "Cache-Control": "no-store", ...headers } });
}

function number(value, fallback = 0) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? Math.max(0, Math.round(parsed)) : fallback;
}

export default {
  async fetch(request) {
    if (request.method !== "POST") return json({ error: "仅支持 POST 请求。" }, 405, { Allow: "POST" });

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) return json({ error: "AI 助手尚未配置。请在 Vercel 项目 Settings → Environment Variables 添加 OPENAI_API_KEY，然后重新部署。" }, 503);

    const body = await request.json().catch(() => ({}));
    const question = typeof body.question === "string" ? body.question.trim().slice(0, 1200) : "";
    if (!question) return json({ error: "请先输入问题。" }, 400);

    const rawContext = body.context && typeof body.context === "object" ? body.context : {};
    const days = Math.min(99, Math.max(90, number(rawContext.days, 96)));
    const sourceBudget = rawContext.budget && typeof rawContext.budget === "object" ? rawContext.budget : {};
    const budget = {
      stay: number(sourceBudget.stay), food: number(sourceBudget.food), transit: number(sourceBudget.transit),
      tickets: number(sourceBudget.tickets), cover: number(sourceBudget.cover), reserve: number(sourceBudget.reserve)
    };
    let budgetTotalCny = Object.values(budget).reduce((sum, value) => sum + value, 0);
    if (budgetTotalCny > 29999) {
      const ratio = 29999 / budgetTotalCny;
      for (const key of Object.keys(budget)) budget[key] = Math.floor(budget[key] * ratio);
      budgetTotalCny = Object.values(budget).reduce((sum, value) => sum + value, 0);
      budget.reserve += 29999 - budgetTotalCny;
      budgetTotalCny = 29999;
    }

    const route = Array.isArray(rawContext.route) ? rawContext.route.slice(0, 24).map((stop) => ({
      city: typeof stop?.city === "string" ? stop.city.slice(0, 60) : "",
      country: typeof stop?.country === "string" ? stop.country.slice(0, 60) : "",
      days: Math.min(99, number(stop?.days))
    })) : [];
    const guideNotes = Array.isArray(rawContext.guideNotes) ? rawContext.guideNotes.slice(0, 3).map((guide) => ({
      country: typeof guide?.country === "string" ? guide.country.slice(0, 80) : "",
      title: typeof guide?.title === "string" ? guide.title.slice(0, 120) : "",
      arrival: typeof guide?.arrival === "string" ? guide.arrival.slice(0, 700) : "",
      onward: typeof guide?.onward === "string" ? guide.onward.slice(0, 700) : "",
      cheap: typeof guide?.cheap === "string" ? guide.cheap.slice(0, 700) : "",
      caution: typeof guide?.caution === "string" ? guide.caution.slice(0, 900) : "",
      days: Array.isArray(guide?.days) ? guide.days.slice(0, 12).map((day) => String(day).slice(0, 300)) : [],
      links: Array.isArray(guide?.links) ? guide.links.slice(0, 3).map((link) => ({ label: String(link?.label || "").slice(0, 120), url: String(link?.url || "").slice(0, 300) })) : []
    })) : [];
    const context = {
      routeSummary: ROUTE_SUMMARY,
      days,
      budget,
      budgetTotalCny,
      philippinesFocus: "宿务、薄荷岛及周边海岛；以海岛潜水（scuba diving）为主，规划约4个潜水日，同时安排休息日、船程和天气缓冲。潜水者需确认保险承保水肺潜水及计划深度。",
      route,
      guideNotes
    };

    const history = Array.isArray(body.history) ? body.history.slice(-6).map((item) => ({
      role: item?.role === "assistant" ? "assistant" : "user",
      content: typeof item?.content === "string" ? item.content.slice(0, 1200) : ""
    })).filter((item) => item.content) : [];
    const input = [
      { role: "developer", content: "你是用户的中文长途背包旅行助手。只能围绕给出的路线提供建议。硬约束：总行程90至99天，总预算低于人民币30000元；菲律宾主要安排海岛潜水。帮助拆分预算，考虑跨境陆路/海路交通、签证和保险、交通缓冲与应急金。逐国攻略是已整理参考资料，标注日期与来源；优先依据这些资料，不能把历史票价说成当前报价。缅甸安全风险很高，建议用户出发前先查中国领事提醒、航班和保险，未通过核验则跳过。不要编造实时班次、入境政策、价格或可订状态；有时效性的事项提醒用户向官方渠道核实。简明、实用、明确标出估算假设。" },
      ...history,
      { role: "user", content: `旅行上下文（仅供参考）：${JSON.stringify(context)}\n\n问题：${question}` }
    ];

    try {
      const upstream = await fetch("https://api.openai.com/v1/responses", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({ model: process.env.OPENAI_MODEL || "gpt-6-luna", input, max_output_tokens: 900, store: false })
      });
      const payload = await upstream.json().catch(() => ({}));
      if (!upstream.ok) return json({ error: "AI 服务暂时不可用，请稍后重试。" }, 502);
      const answer = payload.output_text || payload.output?.flatMap((item) => item.content || []).find((item) => item.type === "output_text")?.text;
      if (!answer) return json({ error: "AI 暂时没有返回可用回答，请重试。" }, 502);
      return json({ answer });
    } catch (_) {
      return json({ error: "无法连接 AI 服务，请检查服务配置后重试。" }, 502);
    }
  }
};

