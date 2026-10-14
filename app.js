(() => {
  const stops = [
    { id: "urumqi", city: "乌鲁木齐", country: "中国新疆", countryShort: "中国", lat: 43.8256, lon: 87.6168, days: 5, english: "URUMQI", plan: "抵达与调整时差，逛国际大巴扎；留半天走进天山。" },
    { id: "almaty", city: "阿拉木图", country: "哈萨克斯坦", countryShort: "哈萨克斯坦", lat: 43.2383, lon: 76.9455, days: 5, english: "ALMATY", plan: "在山麓城市安排市集、绿巴扎与一次近郊徒步。" },
    { id: "tashkent", city: "塔什干", country: "乌兹别克斯坦", countryShort: "乌兹别克斯坦", lat: 41.2995, lon: 69.2401, days: 7, english: "TASHKENT", plan: "逛地铁和老城，选择撒马尔罕或布哈拉安排一段短途。" },
    { id: "baku", city: "巴库", country: "阿塞拜疆", countryShort: "阿塞拜疆", lat: 40.4093, lon: 49.8671, days: 4, english: "BAKU", plan: "从老城到里海岸边，预留时间核实下一程过境方式。" },
    { id: "tbilisi", city: "第比利斯", country: "格鲁吉亚", countryShort: "格鲁吉亚", lat: 41.7151, lon: 44.8271, days: 6, english: "TBILISI", plan: "老城散步、硫磺浴与近郊山路，控制付费体验数量。" },
    { id: "yerevan", city: "埃里温", country: "亚美尼亚", countryShort: "亚美尼亚", lat: 40.1792, lon: 44.4991, days: 4, english: "YEREVAN", plan: "以市中心为基地，挑选一处修道院作当天往返。" },
    { id: "istanbul-1", city: "伊斯坦布尔", country: "土耳其 · 第一段", countryShort: "土耳其 ①", lat: 41.0082, lon: 28.9784, days: 7, english: "ISTANBUL I", plan: "横跨欧亚两岸逛街区，优先步行和公共交通。" },
    { id: "belgrade", city: "贝尔格莱德", country: "塞尔维亚", countryShort: "塞尔维亚", lat: 44.7866, lon: 20.4489, days: 4, english: "BELGRADE", plan: "河岸、市场与旧城，预留一整天处理长途转场。" },
    { id: "sarajevo", city: "萨拉热窝", country: "波黑", countryShort: "波黑", lat: 43.8563, lon: 18.4131, days: 4, english: "SARAJEVO", plan: "老城步行和山地景色，预订可改签的跨境巴士。" },
    { id: "cairo", city: "开罗", country: "埃及", countryShort: "埃及", lat: 30.0444, lon: 31.2357, days: 6, english: "CAIRO", plan: "参观金字塔和博物馆，热季避开正午户外活动。" },
    { id: "istanbul-2", city: "伊斯坦布尔", country: "土耳其 · 再次入境", countryShort: "土耳其 ②", lat: 41.0082, lon: 28.9784, days: 4, english: "ISTANBUL II", plan: "短暂停留补给，出发前复核再次入境与转机条件。" },
    { id: "muscat", city: "马斯喀特", country: "阿曼", countryShort: "阿曼", lat: 23.5880, lon: 58.3829, days: 3, english: "MUSCAT", plan: "清晨逛海边和老城，避开正午高温。" },
    { id: "dubai", city: "迪拜", country: "阿联酋", countryShort: "阿联酋", lat: 25.2048, lon: 55.2708, days: 3, english: "DUBAI", plan: "缩短高消费城市停留，比较前往东南亚的转机与行李成本。" },
    { id: "yangon", city: "仰光", country: "缅甸", countryShort: "缅甸", lat: 16.8409, lon: 96.1735, days: 4, english: "YANGON", plan: "以城市步行和市场为主；出行前核对官方旅行提示与航线情况。" },
    { id: "chiang-mai", city: "清迈", country: "泰国 · 清迈", countryShort: "泰国", lat: 18.7883, lon: 98.9853, days: 5, english: "CHIANG MAI", plan: "安排古城与一日近郊步道，留意当季烟霾。" },
    { id: "vientiane", city: "万象", country: "老挝", countryShort: "老挝", lat: 17.9757, lon: 102.6331, days: 4, english: "VIENTIANE", plan: "核对铁路票务与边境手续，把万象作为行程缓冲点。" },
    { id: "hanoi", city: "河内", country: "越南", countryShort: "越南", lat: 21.0278, lon: 105.8342, days: 6, english: "HANOI", plan: "老城分区慢逛，留意跨境列车售票与签证停留天数。" },
    { id: "philippines", city: "宿务 · 薄荷岛", country: "菲律宾 · 海岛潜水", countryShort: "菲律宾潜水", lat: 10.3157, lon: 123.8854, days: 12, english: "CEBU · BOHOL", plan: "以宿务、墨宝和薄荷岛的海岛潜水为主；安排 3–4 个潜水日、岛间船班与天气机动日。先确认潜水保险包含水肺活动。" },
    { id: "shanghai", city: "上海", country: "中国 · 终点", countryShort: "上海", lat: 31.2304, lon: 121.4737, days: 3, english: "SHANGHAI", plan: "回到上海，落地休整、整理照片与收尾。" }
  ];
  const MAX_BUDGET = 29999;
  const budgetLabels = { stay: "住宿", food: "餐饮", transit: "交通", tickets: "门票与菲律宾潜水", cover: "签证与保险", reserve: "应急金" };
  const totalDays = () => stops.reduce((sum, stop) => sum + stop.days, 0);
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  let selectedStop = 0;
  let timer = null;
  let expanded = false;
  let toastTimer = null;
  let conversation = [];
  let offlineAssistant = false;
  const guides = Array.isArray(window.TRAVEL_GUIDES) ? window.TRAVEL_GUIDES : [];
  const guideByStop = new Map(guides.map((guide) => [guide.stopId, guide]));
  const dateFormatter = new Intl.DateTimeFormat("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit", timeZone: "UTC" });
  const money = (value) => `¥${Math.round(value || 0).toLocaleString("zh-CN")}`;
  const startDate = () => {
    const date = new Date(`${$("#startDate").value || "2027-04-10"}T00:00:00Z`);
    return Number.isNaN(date.valueOf()) ? new Date("2027-04-10T00:00:00Z") : date;
  };
  const plusDays = (date, days) => new Date(date.valueOf() + days * 86400000);
  const dateLabel = (date) => dateFormatter.format(date).replaceAll("/", ".");
  const buildDays = () => {
    let cursor = 0;
    const dayList = [];
    stops.forEach((stop, index) => {
      for (let n = 0; n < stop.days; n++) {
        const date = plusDays(startDate(), cursor);
        let activity = stop.plan;
        let kind = "漫游";
        if (n === 0 && index > 0) { activity = `抵达${stop.city}，安顿住处，熟悉周边与交通。`; kind = "转场日"; }
        else if (n === stop.days - 1 && index < stops.length - 1) { activity = `整理行李，核对下一程 ${stops[index + 1].city} 的交通与过境安排。`; kind = "移动日"; }
        else if (stop.id === "philippines") {
          const islandDays = [
            "宿务转墨宝，熟悉潜店、租装备和海况；确认潜水保险承保水肺活动。",
            "潜水日 1/4：墨宝近岸下水，先按经验等级选潜点。",
            "水面休息日：海边慢走、补给，不安排连续下水。",
            "潜水日 2/4：预订小团船潜，出海前核对安全装备。",
            "岛间移动日：前往薄荷岛，船班和行李费提前计入交通预算。",
            "天气机动日：海况不佳时改成岸上活动，不压缩安全间隔。",
            "潜水日 3/4：根据海况安排薄荷岛周边潜点。",
            "休息与浮潜日：水肺潜水后留足水面间隔，整理装备。",
            "潜水日 4/4：最后一次潜水，按返程飞行预留安全间隔。",
            "机动日：补给、海岛步行或免费海滩；预留航班延误时间。"
          ];
          activity = islandDays[Math.min(n - 1, islandDays.length - 1)];
          kind = activity.includes("潜水日") ? "海岛潜水" : (activity.includes("移动日") ? "移动日" : "海岛慢游");
        }
        else if (n > 0) { activity = ["上午从一处街区开始，下午留给咖啡馆、书店或当地市场。", "安排一段轻松的近郊步行，傍晚回城休息。", `按照天气和体力，继续慢慢探索${stop.city}。`][(n + index) % 3]; }
        const guideDay = guideByStop.get(stop.id)?.days[n];
        if (guideDay) {
          activity = guideDay;
          kind = guideDay.includes("潜水日") ? "海岛潜水" : (guideDay.includes("转场") || guideDay.includes("巴士") || guideDay.includes("飞抵") || guideDay.includes("前往越南") ? "移动日" : (guideDay.includes("休息") || guideDay.includes("机动") ? "机动日" : kind));
        }
        dayList.push({ day: cursor + 1, date, stop, stopIndex: index, activity, kind });
        cursor++;
      }
    });
    return dayList;
  };
  const days = () => buildDays();
  const coords = (stop) => ({ x: 52 + (stop.lon + 10) / 140 * 896, y: 27 + (58 - stop.lat) / 67 * 380 });
  const fmtCoord = (value, axis) => `${Math.abs(value).toFixed(2)}° ${value >= 0 ? (axis === "lat" ? "N" : "E") : (axis === "lat" ? "S" : "W")}`;
  const labelOffsets = [[9, 18], [9, -10], [9, 19], [10, -9], [10, -10], [10, 18], [10, -10], [10, 17], [10, -11], [10, 18], [-78, -12], [10, 18], [10, -11], [10, 18], [10, -11], [10, 19], [10, -11], [-54, 20], [-10, -14]];

  function drawMap() {
    const svg = $("#routeMap");
    const proj = (lat, lon) => coords({ lat, lon });
    const polygons = [
      [[36,-10],[43,-9],[44,-2],[48,-5],[51,2],[50,7],[54,8],[55,13],[53,17],[56,20],[54,25],[49,24],[46,29],[44,34],[41,29],[39,27],[37,21],[39,15],[37,10],[35,18],[33,24],[35,28],[38,30],[37,34],[33,35],[31,33],[29,35],[27,34],[26,31],[29,29],[31,25],[33,19],[37,14],[36,9],[38,3],[36,-1],[35,-6]],
      [[56,20],[60,22],[63,29],[61,34],[57,38],[56,43],[53,48],[52,53],[49,55],[46,58],[43,60],[40,57],[37,55],[33,53],[29,56],[25,59],[22,57],[18,58],[14,60],[10,63],[7,67],[10,71],[16,73],[20,77],[24,81],[27,86],[31,89],[34,91],[39,87],[42,83],[45,78],[49,75],[53,72],[55,67],[57,62],[58,57],[56,52],[58,47],[61,43],[60,38],[58,34],[60,29],[59,25]],
      [[30,34],[27,35],[23,39],[19,39],[15,42],[12,45],[10,48],[12,51],[16,52],[20,54],[23,56],[27,54],[29,50],[31,47],[33,44],[34,40],[32,37]],
      [[7,68],[10,74],[8,78],[11,81],[8,85],[7,89],[10,92],[8,97],[12,99],[10,103],[14,106],[17,105],[21,108],[23,112],[25,117],[24,121],[29,123],[34,121],[39,124],[43,128],[47,130],[51,127],[53,123],[54,118],[51,114],[48,111],[45,108],[43,104],[40,102],[37,99],[34,96],[31,92],[28,88],[25,84],[22,80],[20,77],[18,73],[14,71],[11,69]]
    ];
    const land = polygons.map((polygon) => `<path class="land-shape" d="${polygon.map(([lat, lon], i) => { const p = proj(lat, lon); return `${i ? "L" : "M"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`; }).join(" ")} Z"/>`).join("");
    const guideLabels = [[46,3,"EUROPE"],[26,5,"NORTH AFRICA"],[45,70,"CENTRAL ASIA"],[37,108,"EAST ASIA"],[11,77,"INDIAN OCEAN"]].map(([lat, lon, name])=>{const p=proj(lat,lon);return `<text class="map-grid-label" x="${p.x}" y="${p.y}">${name}</text>`}).join("");
    const pts = stops.map(coords);
    const path = pts.map((p,i)=>`${i?"L":"M"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ");
    const pins = stops.map((stop,i)=>{const p=pts[i],off=labelOffsets[i];return `<g class="map-stop" data-stop="${i}" tabindex="0" role="button" aria-label="${stop.city}，${stop.country}，停留 ${stop.days} 天"><circle cx="${p.x}" cy="${p.y}" r="${i===0?5:3.4}"/><text x="${p.x+off[0]}" y="${p.y+off[1]}">${String(i+1).padStart(2,"0")} ${stop.city}</text><text class="stop-en" x="${p.x+off[0]}" y="${p.y+off[1]+10}">${stop.english}</text></g>`}).join("");
    svg.innerHTML = `${land}${guideLabels}<path class="route-shadow" d="${path}"/><path class="route-line" d="${path}"/><path id="routeProgressPath" class="route-progress" d=""/>${pins}<circle id="movingMarker" class="moving-marker" cx="${pts[0].x}" cy="${pts[0].y}" r="5"/>`;
    svg.querySelectorAll(".map-stop").forEach((group) => {
      const activate = () => { pauseRoute(); $("#routeProgress").value = group.dataset.stop; updateProgress(); };
      group.addEventListener("click", activate);
      group.addEventListener("keydown", (event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); activate(); } });
    });
    updateProgress();
  }
  function pointAt(progress) {
    const p = Math.max(0, Math.min(stops.length - 1, Number(progress) || 0));
    const i = Math.min(stops.length - 2, Math.floor(p));
    const t = p >= stops.length - 1 ? 1 : p - i;
    const a = coords(stops[i]); const b = coords(stops[i + 1]);
    return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, index: i, next: i + 1, t };
  }
  function updateProgress() {
    const progress = Number($("#routeProgress").value || 0);
    const point = pointAt(progress);
    const activeIndex = Math.min(stops.length - 1, Math.floor(progress + 0.5));
    const previousStop = selectedStop;
    const stop = stops[activeIndex];
    selectedStop = activeIndex;
    $("#mapCurrent").textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${stop.city}，${stop.country}`;
    $("#mapCoordinate").textContent = `${fmtCoord(stop.lat, "lat")}  ${fmtCoord(stop.lon, "lon")}`;
    $("#progressPercent").textContent = `${Math.round(progress / (stops.length - 1) * 100)}%`;
    $("#progressStop").textContent = `第 ${activeIndex + 1} / ${stops.length} 站`;
    $("#movingMarker").setAttribute("cx", point.x.toFixed(1));
    $("#movingMarker").setAttribute("cy", point.y.toFixed(1));
    const activePoints = stops.slice(0, point.index + 1).map(coords);
    activePoints.push({x:point.x,y:point.y});
    $("#routeProgressPath").setAttribute("d", activePoints.map((p,i)=>`${i?"L":"M"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" "));
    $$(".map-stop").forEach((pin,i)=>{pin.classList.toggle("active",i===activeIndex);pin.classList.toggle("passed",i<progress);});
    $$(".stop-chip").forEach((chip,i)=>chip.classList.toggle("active",i===activeIndex));
    if (activeIndex !== previousStop) $(`.stop-chip[data-stop="${activeIndex}"]`)?.scrollIntoView({block:"nearest",inline:"nearest"});
  }
  function pauseRoute() { if (timer) clearInterval(timer); timer = null; $("#playButton").textContent = "▶"; $("#playButton").setAttribute("aria-label", "播放路线动画"); $("#playLabel").textContent = "播放旅程"; }
  function toggleRoute() {
    if (timer) { pauseRoute(); return; }
    if (Number($("#routeProgress").value) >= stops.length - 1) $("#routeProgress").value = 0;
    $("#playButton").textContent = "Ⅱ"; $("#playButton").setAttribute("aria-label", "暂停路线动画"); $("#playLabel").textContent = "正在沿路前行";
    timer = setInterval(() => {
      const next = Math.min(stops.length - 1, Number($("#routeProgress").value) + 0.055);
      $("#routeProgress").value = next; updateProgress();
      if (next >= stops.length - 1) pauseRoute();
    }, 100);
  }
  function renderStops() {
    $("#stopList").innerHTML = stops.map((stop,i)=>`<button class="stop-chip" data-stop="${i}" aria-label="${stop.city}，${stop.days} 天">${stop.city}<small> · ${stop.days}天</small></button>`).join("");
    $$(".stop-chip").forEach((chip)=>chip.addEventListener("click",()=>{$("#routeProgress").value=chip.dataset.stop;pauseRoute();updateProgress();}));
  }
  function guideMatches(guide, query) {
    const searchable = [guide.country, guide.title, guide.arrival, guide.onward, guide.cheap, guide.caution, ...guide.days].join(" ").toLocaleLowerCase("zh-CN");
    return searchable.includes(query.toLocaleLowerCase("zh-CN"));
  }
  function renderGuides(query = "") {
    if (!$("#guideCards")) return;
    const filtered = guides.filter((guide) => !query || guideMatches(guide, query));
    $("#guideCount").textContent = `${filtered.length} / ${guides.length} 个路线段`;
    $("#guideCards").innerHTML = filtered.map((guide) => `<article class="guide-card" id="guide-${guide.stopId}">
      <header class="guide-card-head"><div><span>${guide.country}</span><h3>${guide.title}</h3></div><b>${guide.days.length} 天</b></header>
      <h4>逐日游玩</h4><ol class="guide-day-list">${guide.days.map((item,index)=>`<li><b>D${String(index+1).padStart(2,"0")}</b><span>${item}</span></li>`).join("")}</ol>
      <div class="guide-practical"><div><h4>抵达与衔接</h4><p>${guide.arrival}</p><p>${guide.onward}</p></div><div><h4>背包客省钱法</h4><p>${guide.cheap}</p></div><div class="guide-caution"><h4>注意事项</h4><p>${guide.caution}</p></div></div>
      <div class="guide-links">${guide.links.map((link)=>`<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label} ↗</a>`).join("")}</div>
    </article>`).join("") || `<p class="guide-empty">没有找到相关攻略，试试国家名、城市名或“交通”。</p>`;
  }
  function matchedGuides(question) {
    const q = question.toLocaleLowerCase("zh-CN");
    return guides.filter((guide) => {
      const names = `${guide.country} ${guide.title}`.toLocaleLowerCase("zh-CN").split(/[·：—（）\s,，、]+/).filter((part) => part.length >= 2);
      return names.some((name) => q.includes(name) || name.includes(q));
    });
  }
  function localAssistantAnswer(question) {
    const q = question.toLocaleLowerCase("zh-CN");
    if (/预算|多少钱|够不够|省钱|费用|总价/.test(q)) {
      const value = budgetValues();
      const total = Object.values(value).reduce((sum,n)=>sum+n,0);
      return `当前行程 ${totalDays()} 天，预算合计 ${money(total)}（${money(total/totalDays())}/天），硬上限 ¥29,999。菲律宾潜水和门票目前为 ${money(value.tickets)}，签证保险 ${money(value.cover)}、应急金 ${money(value.reserve)}。这是非常紧的目标：航空段、埃及入场费、潜水保险和意外延误可能使实际支出超过上限；请把起终点机票、托运行李、签证和水肺保险逐项填入预算后再判断。省钱优先选夜车/公共巴士、多人拼远郊车、免费步行线路；潜店费用要求逐项报价。`;
    }
    if (/缅甸|仰光|安全|风险/.test(q)) {
      const guide = guideByStop.get("yangon");
      return `${guide.caution} 规划建议：这段先标为条件行程；如中国领事提醒、航班或保险任何一项不支持，就跳过缅甸，改从迪拜经安全可行的航班直达清迈，保留原后续老挝、越南和菲律宾路线。详细说明与来源见“逐国攻略”的缅甸卡。`;
    }
    if (/菲律宾|宿务|薄荷岛|墨宝|潜水|潜店|scuba/.test(q)) {
      const guide = guideByStop.get("philippines");
      return `${guide.days.map((item,index)=>`第${index+1}天：${item}`).join("\n")}\n\n交通：${guide.arrival}\n省钱：${guide.cheap}\n安全：${guide.caution}\n来源和可点开的潜水/交通资料在“逐国攻略”菲律宾卡。`;
    }
    if (/交通|怎么走|衔接|跨境|转场|路线/.test(q) && matchedGuides(question).length === 0) {
      return guides.slice(0,-1).map((guide,index)=>`${index+1}. ${guide.country}：${guide.onward}`).join("\n");
    }
    const relevant = matchedGuides(question).slice(0,2);
    if (relevant.length) return relevant.map((guide)=>`${guide.title}\n逐日：${guide.days.map((item,index)=>`D${index+1} ${item}`).join("；")}\n抵达/衔接：${guide.arrival} ${guide.onward}\n省钱：${guide.cheap}\n注意：${guide.caution}\n资料来源：${guide.links.map((link)=>link.label).join("、")}`).join("\n\n");
    return "我现在以本机攻略问答模式运行，可以按下方逐国资料回答路线、预算、交通、菲律宾潜水和注意事项。请在问题里写国家/城市，或点开“逐国攻略”搜索。开放式生成回答需在 Vercel 项目 Settings → Environment Variables 设置 OPENAI_API_KEY 并重新部署；密钥不要发到聊天或写进前端。";
  }
  function renderItinerary() {
    const list = days();
    const last = plusDays(startDate(), list.length - 1);
    $("#heroDays").textContent = list.length;
    $("#heroStops").textContent = stops.length;
    $("#summaryDayCount").textContent = list.length;
    $("#itineraryDate").textContent = `${dateLabel(startDate())} — ${dateLabel(last)}`;
    const visibleDays = expanded ? list : list.slice(0, 3);
    $("#itineraryPreview").innerHTML = visibleDays.map((day)=>`<article class="day-card"><span class="day-date">DAY ${String(day.day).padStart(3,"0")}<br>${dateLabel(day.date).slice(5)}</span><div class="day-content"><strong>${day.stop.city} <small>· ${day.stop.country}</small></strong><p>${day.activity}</p></div><span class="day-tag ${day.kind.includes("日")?"travel":""}">${day.kind}</span></article>`).join("");
    const label = expanded ? "收起每日安排" : `展开完整 ${list.length} 天行程`;
    $("#showAllDays").innerHTML = `${expanded?"收起每日安排":"查看每日安排"} <span>↗</span>`;
    $("#showAllDaysBottom").innerHTML = `${label} <span>${expanded?"－":"＋"}</span>`;
    $("#showAllDaysBottom").hidden = expanded;
  }
  function budgetValues() {
    return Object.fromEntries($$("[data-budget]").map((input)=>[input.dataset.budget, Math.max(0, Number(input.value) || 0)]));
  }
  function updateBudget(changedInput = null) {
    const inputs = $$('[data-budget]');
    if (changedInput) {
      const otherTotal = inputs.filter((input) => input !== changedInput).reduce((sum, input) => sum + Math.max(0, Number(input.value) || 0), 0);
      const allowed = Math.max(0, MAX_BUDGET - otherTotal);
      changedInput.max = String(allowed);
      if ((Number(changedInput.value) || 0) > allowed) {
        changedInput.value = String(allowed);
        toast("已按 3 万元总预算上限收紧此项；如需调整，请先下调其他项目。");
      }
    }
    const values = budgetValues();
    const total = Object.values(values).reduce((sum, value) => sum + value, 0);
    const totalDayCount = totalDays();
    $("#budgetTotal").textContent = money(total);
    $("#budgetDaily").innerHTML = `${money(total / totalDayCount)} <small>/ 天</small>`;
    $("#budgetCapStatus").textContent = `还可安排 ${money(Math.max(0, MAX_BUDGET - total))}`;
    $("#budgetCapFill").style.width = `${Math.min(100, total / 30000 * 100)}%`;
    try { localStorage.setItem("manyou90-budget-v2", JSON.stringify(values)); } catch (_) {}
  }
  function loadBudget() {
    try {
      const saved = JSON.parse(localStorage.getItem("manyou90-budget-v2") || "null");
      if (saved && typeof saved === "object") $$("[data-budget]").forEach((input)=>{if(Number.isFinite(Number(saved[input.dataset.budget]))) input.value=Math.max(0,Number(saved[input.dataset.budget]));});
    } catch (_) {}
    const inputs = $$('[data-budget]');
    const values = budgetValues();
    const savedTotal = Object.values(values).reduce((sum, value) => sum + value, 0);
    if (savedTotal > MAX_BUDGET) {
      const factor = MAX_BUDGET / savedTotal;
      inputs.forEach((input) => { input.value = String(Math.floor(values[input.dataset.budget] * factor)); });
      const roundedTotal = inputs.reduce((sum, input) => sum + Number(input.value), 0);
      inputs[inputs.length - 1].value = String(Number(inputs[inputs.length - 1].value) + MAX_BUDGET - roundedTotal);
    }
    updateBudget();
  }
  function itineraryHtml() {
    const start = startDate();
    let cursor = 0;
    return stops.map((stop,i)=>{
      const checkIn = plusDays(start,cursor); const checkOut = plusDays(checkIn,stop.days);
      const row=`<p><strong>${String(i+1).padStart(2,"0")} · ${stop.city}，${stop.country}</strong>　停留 ${stop.days} 天（${dateLabel(checkIn)} 至 ${dateLabel(plusDays(checkOut,-1))}）</p>`;
      cursor+=stop.days; return row;
    }).join("");
  }
  function createPrintReport() {
    const value = budgetValues();
    const total = Object.values(value).reduce((sum,n)=>sum+n,0);
    const dayList = days();
    const stopList = stops.map((s,i)=>`${i+1}. ${s.city}（${s.country}，${s.days} 天）`).join(" → ");
    const budgetTable = Object.keys(budgetLabels).map((key)=>`<tr><td>${budgetLabels[key]}</td><td>${money(value[key])}</td></tr>`).join("");
    const dayRows = dayList.map((day)=>`<div class="print-day"><strong>DAY ${String(day.day).padStart(3,"0")}</strong><span>${dateLabel(day.date)} · ${day.kind}</span><p><strong>${day.stop.city} · ${day.stop.country}</strong><br>${day.activity}</p></div>`).join("");
    const report = $("#printReport");
    const guideRows = guides.map((guide)=>`<section class="print-guide"><h3>${guide.country} · ${guide.title}（${guide.days.length} 天）</h3><p><strong>逐日安排：</strong>${guide.days.map((item,index)=>`D${index+1} ${item}`).join("；")}</p><p><strong>抵达与衔接：</strong>${guide.arrival} ${guide.onward}</p><p><strong>省钱：</strong>${guide.cheap}</p><p><strong>注意：</strong>${guide.caution}</p><p><strong>资料：</strong>${guide.links.map((link)=>link.label).join("；")}</p></section>`).join("");
    report.innerHTML = `<h1>漫行 90+ · 丝路与海风</h1><p>一趟从中国新疆出发，穿过中亚、高加索与东南亚，最后回到上海的背包客长途旅行。</p><div class="print-meta"><span>出发日期：${dateLabel(startDate())}</span><span>总天数：${dayList.length} 天（90+，少于 100 天）</span><span>停靠点：${stops.length} 站</span><span>预算上限：¥30,000</span></div><h2>完整路线</h2><p class="print-route">${stopList}</p><h2>预算明细（人民币）</h2><table class="print-budget"><thead><tr><th>项目</th><th>预计金额</th></tr></thead><tbody>${budgetTable}<tr><th>预算合计</th><th>${money(total)}</th></tr><tr><td>日均预算（${dayList.length} 天）</td><td>${money(total/dayList.length)}</td></tr><tr><td>菲律宾海岛潜水与体验</td><td>含在门票与潜水预算中，计划至少预留 ¥4,300 潜水</td></tr></tbody></table><h2>逐站游玩攻略与交通</h2>${guideRows}<h2>每日安排</h2>${dayRows}<p class="print-note">攻略资料核对日期 2026-10-14；背包客紧凑预算为规划目标，机票、交通、签证、潜水与保险须按实际报价核实。缅甸为高风险条件行程；潜水后预留至少 24 小时再搭长途航班。边境开放和班次变化，请出发前核对官方信息。</p>`;
  }
  function toast(message) { const node=$("#toast"); node.textContent=message; node.classList.add("show"); clearTimeout(toastTimer); toastTimer=setTimeout(()=>node.classList.remove("show"),2600); }
  function exportPdf() {
    createPrintReport();
    toast("请在打印窗口选择“另存为 PDF”保存完整行程。 ");
    setTimeout(()=>window.print(),180);
  }
  function addMessage(role,text,isError=false) {
    const wrap=document.createElement("div"); wrap.className=`message ${role==="user"?"user-message":"assistant-message"}${isError?" error":""}`;
    const mark=document.createElement("span"); mark.className="message-mark"; mark.textContent=role==="user"?"我":"漫";
    const body=document.createElement("p"); body.textContent=text;
    wrap.append(mark,body); $("#chatMessages").append(wrap); $("#chatMessages").scrollTop=$("#chatMessages").scrollHeight;
  }
  async function sendQuestion(question) {
    const clean=question.trim(); if(!clean) return;
    addMessage("user",clean); conversation.push({role:"user",content:clean});
    if (offlineAssistant) { const answer=localAssistantAnswer(clean); addMessage("assistant",answer); conversation.push({role:"assistant",content:answer}); return; }
    const button=$("#chatForm button"); const input=$("#chatInput"); button.disabled=true; input.disabled=true;
    const pending=document.createElement("div"); pending.className="message assistant-message"; pending.innerHTML='<span class="message-mark">漫</span><p>正在整理沿途信息…</p>'; $("#chatMessages").append(pending); $("#chatMessages").scrollTop=$("#chatMessages").scrollHeight;
    try {
      const notes = matchedGuides(clean).slice(0,3).map((guide)=>({country:guide.country,title:guide.title,arrival:guide.arrival,onward:guide.onward,cheap:guide.cheap,caution:guide.caution,days:guide.days,links:guide.links}));
      const response=await fetch("/api/assistant",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:clean,context:{days:totalDays(),budgetCapCny:30000,traveler:"背包客",philippinesFocus:"宿务、墨宝、薄荷岛海岛潜水，计划 3–4 个潜水日",startDate:$("#startDate").value,budget:budgetValues(),route:stops.map(({city,country,days})=>({city,country,days})),guideNotes:notes},history:conversation.slice(-7,-1)})});
      const data=await response.json();
      if (!response.ok && response.status === 503 && /OPENAI_API_KEY/.test(data.error||"")) {
        offlineAssistant=true;
        $("#assistantModeStatus").innerHTML="<i></i> 内置攻略问答已启用 · AI 密钥未配置";
        pending.remove(); const answer=localAssistantAnswer(clean); addMessage("assistant",answer); conversation.push({role:"assistant",content:answer}); conversation=conversation.slice(-8); return;
      }
      if(!response.ok) throw new Error(data.error||"暂时无法连接旅行助手，请稍后再试。");
      $("#assistantModeStatus").innerHTML="<i></i> AI 助手已连接 · 使用服务端安全调用";
      pending.remove(); const answer=String(data.answer||"我暂时没有整理出答案，请换一种问法再试试。"); addMessage("assistant",answer); conversation.push({role:"assistant",content:answer}); conversation=conversation.slice(-8);
    } catch(error) { pending.remove(); addMessage("assistant",error.message||"连接失败，请检查网络后重试。",true); }
    finally { button.disabled=false; input.disabled=false; input.focus(); }
  }
  function bindEvents() {
    $("#routeProgress").addEventListener("input",()=>{pauseRoute();updateProgress();});
    $("#playButton").addEventListener("click",toggleRoute);
    $("#resetButton").addEventListener("click",()=>{pauseRoute();$("#routeProgress").value=0;updateProgress();});
    $$("#exportTop").forEach((button)=>button.addEventListener("click",exportPdf));
    ["#showAllDays","#showAllDaysBottom"].forEach((selector)=>$(selector).addEventListener("click",()=>{expanded=!expanded;renderItinerary();if(expanded)$("#itinerary").scrollIntoView({behavior:"smooth",block:"start"});}));
    $("#startDate").addEventListener("change",()=>{try{localStorage.setItem("manyou90-startDate",$("#startDate").value);}catch(_){}renderItinerary();});
    $("#guideSearch").addEventListener("input",(event)=>renderGuides(event.target.value.trim()));
    $$("[data-budget]").forEach((input)=>input.addEventListener("input",()=>updateBudget(input)));
    $("#chatForm").addEventListener("submit",(event)=>{event.preventDefault();const input=$("#chatInput");const q=input.value;input.value="";sendQuestion(q);});
    $$(".suggestions button").forEach((button)=>button.addEventListener("click",()=>sendQuestion(button.textContent)));
    $("#clearChat").addEventListener("click",()=>{$("#chatMessages").innerHTML="";conversation=[];addMessage("assistant","对话已清空。继续问我路线、预算或跨境交通吧！");});
  }
  try { const savedDate=localStorage.getItem("manyou90-startDate"); if(savedDate && /^\d{4}-\d{2}-\d{2}$/.test(savedDate)) $("#startDate").value=savedDate; } catch (_) {}
  renderStops(); drawMap(); loadBudget(); renderItinerary(); renderGuides(); bindEvents();
})();

