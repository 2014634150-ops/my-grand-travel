const fs = require("node:fs");
const vm = require("node:vm");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const required = ["index.html", "styles.css", "app.js", "guides.js", "api/assistant.mjs", "vercel.json"];
for (const file of required) {
  if (!fs.existsSync(path.join(root, file))) throw new Error(`Missing required file: ${file}`);
}
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");
const assistant = fs.readFileSync(path.join(root, "api/assistant.mjs"), "utf8");
const guidesSource = fs.readFileSync(path.join(root, "guides.js"), "utf8");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
new vm.Script(app, { filename: "app.js" });
new vm.Script(guidesSource, { filename: "guides.js" });
JSON.parse(fs.readFileSync(path.join(root, "vercel.json"), "utf8"));
JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
if (!html.includes('data-budget="stay"') || !html.includes('data-budget="reserve"')) throw new Error("Budget categories are incomplete.");
if (!html.includes('id="guides"') || !html.includes('src="/guides.js"') || !app.includes("function localAssistantAnswer(question)")) throw new Error("Country guides or local assistant fallback is incomplete.");
const guideContext = { window: {} };
vm.runInNewContext(guidesSource, guideContext, { filename: "guides.js" });
const guides = guideContext.window.TRAVEL_GUIDES;
if (guides.length !== 19 || guides.reduce((sum, guide) => sum + guide.days.length, 0) !== 96 || guides.some((guide) => !guide.arrival || !guide.onward || !guide.cheap || !guide.caution || !guide.links.length)) throw new Error("Every itinerary stop must have daily plans, transport, budget, cautions, and sources.");
const budgetEntries = [...html.matchAll(/data-budget="([a-z]+)"[^>]*value="(\d+)"/g)];
const defaultBudget = budgetEntries.reduce((sum, match) => sum + Number(match[2]), 0);
if (budgetEntries.length !== 6 || defaultBudget >= 30000) throw new Error(`Budget must have six categories and remain below ¥30,000 (found ¥${defaultBudget}).`);
const stopDays = [...app.matchAll(/days: (\d+), english:/g)].map((match) => Number(match[1]));
const tripDays = stopDays.reduce((sum, days) => sum + days, 0);
if (stopDays.length !== 19 || tripDays < 90 || tripDays >= 100) throw new Error(`The itinerary must include 19 stops and 90-99 days (found ${stopDays.length} stops, ${tripDays} days).`);
if (!app.includes('id: "philippines"') || !app.includes("潜水日 4/4") || !html.includes("菲律宾潜水")) throw new Error("The Philippines island-diving itinerary is incomplete.");
if (!html.includes('id="routeProgress"') || !app.includes("function updateProgress()") || !app.includes("function toggleRoute()")) throw new Error("Route playback controls are incomplete.");
if (!app.includes("function createPrintReport()") || !fs.readFileSync(path.join(root, "styles.css"), "utf8").includes("@media print")) throw new Error("Printable itinerary is incomplete.");
if (!assistant.includes("api.openai.com/v1/responses") || !assistant.includes("process.env.OPENAI_API_KEY") || !assistant.includes("guideNotes")) throw new Error("Server-side AI endpoint is incomplete.");
if (assistant.includes("sk-proj-") || assistant.includes("sk-live-")) throw new Error("A real API key must never be committed.");
import(require("node:url").pathToFileURL(path.join(root, "api/assistant.mjs")).href).then((module) => {
  if (typeof module.default?.fetch !== "function") throw new Error("Vercel Web Handler export is missing.");
  console.log(`Build checks passed: ${tripDays}-day itinerary, 19 researched route guides/96 daily plans, ¥${defaultBudget} budget, Philippines diving, local and server-side assistant modes, route animation, printable itinerary, and Vercel config.`);
}).catch((error) => { console.error(error.message); process.exitCode = 1; });

