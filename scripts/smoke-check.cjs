const assert = require("node:assert/strict");

async function callAssistant(handler, method, body) {
  const request = new Request("http://localhost/api/assistant", {
    method,
    headers: method === "POST" ? { "Content-Type": "application/json" } : undefined,
    body: method === "POST" ? JSON.stringify(body) : undefined
  });
  const response = await handler.fetch(request);
  return { status: response.status, headers: response.headers, body: await response.json() };
}

async function main() {
  const { default: assistant } = await import("../api/assistant.mjs");
  const originalKey = process.env.OPENAI_API_KEY;
  const originalModel = process.env.OPENAI_MODEL;
  const originalFetch = global.fetch;
  try {
    delete process.env.OPENAI_API_KEY;
    const missingKey = await callAssistant(assistant, "POST", { question: "预算怎么分配？" });
    assert.equal(missingKey.status, 503);
    assert.match(missingKey.body.error, /Settings → Environment Variables/);

    const unsupportedMethod = await callAssistant(assistant, "GET");
    assert.equal(unsupportedMethod.status, 405);
    assert.equal(unsupportedMethod.headers.get("allow"), "POST");

    process.env.OPENAI_API_KEY = "test-only-mock-key";
    delete process.env.OPENAI_MODEL;
    let upstreamRequest;
    global.fetch = async (url, options) => {
      upstreamRequest = { url, options, body: JSON.parse(options.body) };
      return { ok: true, status: 200, json: async () => ({ output_text: "先留出跨境交通和机动日预算。" }) };
    };
    const response = await callAssistant(assistant, "POST", { question: "预算怎么分配？", history: [{ role: "user", content: "路线预算有什么限制？" }], context: { days: 999, budget: { stay: 7200, food: 6200, transit: 7600, tickets: 5500, cover: 2000, reserve: 1300 }, route: [{ city: "宿务 · 薄荷岛", country: "菲律宾 · 海岛潜水", days: 12 }], guideNotes: [{ country: "菲律宾", title: "宿务潜水", arrival: "公共巴士去墨宝。", days: ["潜水后休息"] }] } });
    assert.equal(response.status, 200);
    assert.equal(response.body.answer, "先留出跨境交通和机动日预算。");
    assert.equal(response.headers.get("cache-control"), "no-store");
    assert.equal(upstreamRequest.url, "https://api.openai.com/v1/responses");
    assert.equal(upstreamRequest.options.headers.Authorization, "Bearer test-only-mock-key");
    assert.equal(upstreamRequest.body.store, false);
    assert.equal(upstreamRequest.body.model, "gpt-6-luna");
    assert.equal(upstreamRequest.body.input[0].role, "developer");
    const sentContext = JSON.parse(upstreamRequest.body.input.at(-1).content.split("旅行上下文（仅供参考）：")[1].split("\n\n问题：")[0]);
    assert.equal(sentContext.days, 99);
    assert.ok(sentContext.budgetTotalCny <= 29999);
    assert.match(JSON.stringify(sentContext.route), /宿务/);
    assert.match(sentContext.philippinesFocus, /scuba/);
    assert.match(JSON.stringify(sentContext.guideNotes), /公共巴士去墨宝/);
    assert.match(upstreamRequest.body.input[1].content, /路线预算有什么限制/);
    assert.doesNotMatch(JSON.stringify(response.body), /test-only-mock-key/);

    const blankQuestion = await callAssistant(assistant, "POST", { question: "  " });
    assert.equal(blankQuestion.status, 400);
    console.log("Smoke checks passed: missing key guidance, method validation, server-only mocked API call, 90-99 day cap, ¥30,000 budget cap, Philippines diving context, and empty-input handling.");
  } finally {
    global.fetch = originalFetch;
    if (originalKey === undefined) delete process.env.OPENAI_API_KEY; else process.env.OPENAI_API_KEY = originalKey;
    if (originalModel === undefined) delete process.env.OPENAI_MODEL; else process.env.OPENAI_MODEL = originalModel;
  }
}

main().catch((error) => { console.error(error.message); process.exitCode = 1; });

