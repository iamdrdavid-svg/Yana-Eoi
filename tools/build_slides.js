// Builds outputs/concept_slides.md and outputs/concept_slides.pptx from tools/slides_data.js.
// Usage: NODE_PATH=<dir containing pptxgenjs> node tools/build_slides.js
const fs = require("fs");
const path = require("path");
const pptxgen = require("pptxgenjs");
const { META, BRIEFS, SLIDES } = require("./slides_data");

const OUT = path.join(__dirname, "..", "outputs");
const TAG = {
  FACT: { label: "FACT", md: "FACT" },
  DESIGN: { label: "DESIGN PROPOSITION", md: "DESIGN PROPOSITION" },
  FUTURE: { label: "MATTER FOR FUTURE\nASSESSMENT", md: "MATTER FOR FUTURE ASSESSMENT" },
};

// ---------- Markdown ----------
function buildMarkdown() {
  const L = [];
  L.push(`# ${META.title} — concept scheme slide copy`, "");
  L.push(`**${META.status}**`, "");
  L.push("Every statement is tagged **FACT (source)**, **DESIGN PROPOSITION** or **MATTER FOR FUTURE ASSESSMENT**. Source IDs refer to `state/metrics_register.md` (pack pages) and `state/research_log.md` (R-…). R-h to R-k references were read from source on 7 Oct 2026; earlier R-references are search-located. The planner checks all of them before lodgement. Drawings are placeholders; each cites a brief in the appendix. Generated from `tools/slides_data.js` — edit there, then rebuild.", "");
  let n = 0;
  for (const s of SLIDES) {
    n++;
    if (s.kind === "cover") {
      L.push(`## Slide ${n} — Cover`, "", `${META.title}`, "", META.subtitle, "", `_${META.status}_`, "");
      continue;
    }
    L.push(`## Slide ${n} — ${s.section}`, "", `**${s.title}**`, "");
    if (s.stats) L.push(s.stats.map((x) => `**${x.n}** ${x.l}`).join(" · "), "");
    if (s.table) {
      L.push("| " + s.table[0].join(" | ") + " |", "|" + s.table[0].map(() => "---").join("|") + "|");
      s.table.slice(1).forEach((r) => L.push("| " + r.join(" | ") + " |"));
      L.push("");
    }
    if (s.steps) L.push(s.steps.map((x) => `${x.d}: ${x.l}`).join(" → "), "");
    for (const it of s.items) {
      L.push(`- **${TAG[it.t].md}**${it.src ? ` (${it.src})` : ""}: ${it.s}`);
    }
    if (s.drawing) L.push(`- **Drawing placeholder:** brief ${s.drawing} — ${BRIEFS[s.drawing].title}`);
    if (s.note) L.push("", `_Drafting note: ${s.note}_`);
    L.push("");
  }
  L.push("## Appendix — drawing briefs", "");
  for (const [id, b] of Object.entries(BRIEFS)) {
    L.push(`### ${id} — ${b.title}`, "", `**To:** ${b.to}`, "", b.brief, "");
  }
  fs.writeFileSync(path.join(OUT, "concept_slides.md"), L.join("\n"));
}

// ---------- PPTX ----------
const THEME = {
  name: "YANA Eucalypt",
  headFontFace: "Cambria",
  bodyFontFace: "Calibri",
  colors: {
    dk1: "1E2420", lt1: "FFFFFF", dk2: "1F3B2D", lt2: "EEF2EC",
    accent1: "B8863B", accent2: "2F6B8A", accent3: "4E7D3A", accent4: "A85A1E",
    accent5: "6B7A70", accent6: "D9E2D5", hlink: "2F6B8A", folHlink: "6B7A70",
  },
};
const HEX = THEME.colors;

async function buildPptx() {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_WIDE"; // 13.333 x 7.5
  pres.title = META.title;
  pres.author = "Project YANA (draft)";
  pres.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
  const C = pres.SchemeColor;

  pres.defineSlideMaster({
    title: "CONTENT",
    background: { color: C.background1 },
    objects: [
      { text: { text: META.footer, options: { x: 0.5, y: 7.0, w: 10.8, h: 0.3, fontSize: 10, color: C.accent5, isTextBox: true, margin: 0 } } },
      { placeholder: { options: { name: "title", type: "title", x: 0.5, y: 0.35, w: 12.33, h: 1.15, fontFace: THEME.headFontFace, fontSize: 26, bold: true, color: C.text2, valign: "top", align: "left", margin: 0 }, text: "" } },
    ],
    slideNumber: { x: 12.3, y: 7.0, w: 0.5, h: 0.3, fontSize: 10, color: C.accent5, align: "right" },
  });
  pres.defineSlideMaster({
    title: "DARK",
    background: { color: C.text2 },
    objects: [
      { text: { text: META.footer, options: { x: 0.5, y: 7.0, w: 10.8, h: 0.3, fontSize: 10, color: C.accent6, isTextBox: true, margin: 0 } } },
    ],
  });

  const tagFill = { FACT: C.accent2, DESIGN: C.accent3, FUTURE: C.accent4 };

  function items(slide, list, x, y, w, rowH) {
    list.forEach((it, i) => {
      const yy = y + i * rowH;
      slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x, y: yy + 0.04, w: 2.05, h: 0.52, rectRadius: 0.08, fill: { color: tagFill[it.t] }, line: { color: tagFill[it.t] },
        objectName: `tag-${i}`,
      });
      slide.addText(TAG[it.t].label, {
        x, y: yy + 0.04, w: 2.05, h: 0.52, fontSize: 10, bold: true, color: C.background1, align: "center", valign: "middle", margin: 0, isTextBox: true,
      });
      const runs = [{ text: it.s, options: { fontSize: 14, color: C.text1, breakLine: !!it.src } }];
      if (it.src) runs.push({ text: `Source: ${it.src}`, options: { fontSize: 11, color: C.accent5, italic: true } });
      slide.addText(runs, { x: x + 2.25, y: yy, w: w - 2.25, h: rowH - 0.1, valign: "top", margin: 0, isTextBox: true, paraSpaceAfter: 2, objectName: `item-${i}` });
    });
  }

  function drawingBox(slide, id, x, y, w, h) {
    const b = BRIEFS[id];
    slide.addShape(pres.shapes.RECTANGLE, { x, y, w, h, fill: { color: C.background2 }, line: { color: C.accent5, width: 1.25, dashType: "dash" }, objectName: "drawing-placeholder" });
    slide.addText(
      [
        { text: "DRAWING PLACEHOLDER", options: { fontSize: 11, bold: true, color: C.accent4, breakLine: true } },
        { text: `Brief ${id}: ${b.title}`, options: { fontSize: 16, bold: true, color: C.text2, breakLine: true } },
        { text: `To: ${b.to}`, options: { fontSize: 12, color: C.text1, breakLine: true } },
        { text: "Full brief in concept_slides.md appendix and in this slide's notes.", options: { fontSize: 11, italic: true, color: C.accent5 } },
      ],
      { x: x + 0.25, y: y + 0.25, w: w - 0.5, h: h - 0.5, valign: "middle", align: "center", margin: 0, isTextBox: true, paraSpaceAfter: 6 }
    );
  }

  function notes(slide, s) {
    const parts = [];
    if (s.drawing) parts.push(`Brief ${s.drawing} (${BRIEFS[s.drawing].to}): ${BRIEFS[s.drawing].brief}`);
    if (s.note) parts.push(`Drafting note: ${s.note}`);
    parts.push("Indicative only — not for determination.");
    slide.addNotes(parts.join("\n\n"));
  }

  let sectionOpen = null;
  for (const s of SLIDES) {
    const sec = s.kind === "cover" ? "Cover" : s.section;
    if (sec !== sectionOpen) { pres.addSection({ title: sec }); sectionOpen = sec; }

    if (s.kind === "cover") {
      const sl = pres.addSlide({ masterName: "DARK", sectionTitle: sec });
      sl.addText("YANA", { x: 0.8, y: 1.3, w: 11, h: 1.3, fontFace: THEME.headFontFace, fontSize: 66, bold: true, color: C.accent1, margin: 0, isTextBox: true });
      sl.addText("77-79 Cecil Avenue & 25 Hume Avenue, Castle Hill · Dharug Country", { x: 0.8, y: 2.7, w: 11.5, h: 0.6, fontSize: 24, color: C.background1, margin: 0, isTextBox: true });
      sl.addText(META.subtitle, { x: 0.8, y: 3.4, w: 11.5, h: 0.5, fontSize: 18, color: C.accent6, margin: 0, isTextBox: true });
      sl.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: 4.6, w: 8.6, h: 1.1, rectRadius: 0.1, fill: { color: C.background1, transparency: 88 }, line: { color: C.accent1, width: 1 }, objectName: "status-box" });
      sl.addText(META.status, { x: 1.0, y: 4.6, w: 8.2, h: 1.1, fontSize: 16, color: C.background1, valign: "middle", margin: 0, isTextBox: true });
      sl.addNotes("Cover. Indicative only — not for determination.");
      continue;
    }

    if (s.kind === "ask") {
      const sl = pres.addSlide({ masterName: "DARK", sectionTitle: sec });
      sl.addText("THE ASK", { x: 0.8, y: 0.8, w: 6, h: 0.5, fontSize: 14, bold: true, color: C.accent1, charSpacing: 4, margin: 0, isTextBox: true });
      sl.addText(s.title, { x: 0.8, y: 1.4, w: 11.7, h: 2.0, fontFace: THEME.headFontFace, fontSize: 34, bold: true, color: C.background1, valign: "top", margin: 0, isTextBox: true });
      s.items.forEach((it, i) => {
        const yy = 3.9 + i * 1.3;
        sl.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.8, y: yy, w: 2.05, h: 0.52, rectRadius: 0.08, fill: { color: tagFill[it.t] }, line: { color: C.background1, width: 0.75 }, objectName: `tag-${i}` });
        sl.addText(TAG[it.t].label, { x: 0.8, y: yy, w: 2.05, h: 0.52, fontSize: 10, bold: true, color: C.background1, align: "center", valign: "middle", margin: 0, isTextBox: true });
        sl.addText(it.s, { x: 3.1, y: yy - 0.05, w: 9.4, h: 1.1, fontSize: 16, color: C.background1, valign: "top", margin: 0, isTextBox: true });
      });
      notes(sl, s);
      continue;
    }

    const sl = pres.addSlide({ masterName: "CONTENT", sectionTitle: sec });
    sl.addText(s.title, { placeholder: "title" });
    sl.addText(s.section.toUpperCase(), { x: 0.5, y: 0.1, w: 8, h: 0.25, fontSize: 10, bold: true, color: C.accent1, charSpacing: 3, margin: 0, isTextBox: true });

    if (s.kind === "standard") {
      const w = s.drawing || s.chart ? 7.5 : 12.33;
      items(sl, s.items, 0.5, 1.75, w, 1.25);
      if (s.drawing) drawingBox(sl, s.drawing, 8.35, 1.75, 4.48, 4.95);
      if (s.chart) {
        sl.addChart(pres.charts.BAR, [{ name: s.chart.name, labels: s.chart.labels, values: s.chart.values }], {
          x: 8.35, y: 1.75, w: 4.48, h: 4.95, barDir: "col", chartColors: [HEX.accent5, HEX.accent5, HEX.accent1],
          showTitle: true, title: s.chart.title, titleFontSize: 14, titleColor: HEX.dk2, titleFontFace: "+mn-lt",
          showValue: true, dataLabelPosition: "outEnd", dataLabelFontSize: 12, dataLabelFontFace: "+mn-lt", dataLabelColor: HEX.dk1, dataLabelFormatCode: '0.0" m"',
          catAxisLabelColor: HEX.dk1, catAxisLabelFontSize: 11, catAxisLabelFontFace: "+mn-lt", valAxisHidden: true,
          valGridLine: { style: "none" }, catGridLine: { style: "none" }, showLegend: false, objectName: "height-chart",
        });
      }
    } else if (s.kind === "stats") {
      const cw = s.drawing ? 1.75 : 2.9;
      const total = s.drawing ? 7.5 : 12.33;
      const gap = (total - cw * 4) / 3;
      s.stats.forEach((st, i) => {
        const x = 0.5 + i * (cw + gap);
        sl.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y: 1.7, w: cw, h: 1.35, rectRadius: 0.1, fill: { color: C.background2 }, line: { color: C.background2 }, objectName: `stat-${i}` });
        sl.addText(st.n, { x, y: 1.75, w: cw, h: 0.75, fontFace: THEME.headFontFace, fontSize: s.drawing ? 30 : 40, bold: true, color: C.text2, align: "center", margin: 0, isTextBox: true });
        sl.addText(st.l, { x: x + 0.1, y: 2.5, w: cw - 0.2, h: 0.5, fontSize: 12, color: C.text1, align: "center", margin: 0, isTextBox: true });
      });
      items(sl, s.items, 0.5, 3.35, total, 1.2);
      if (s.drawing) drawingBox(sl, s.drawing, 8.35, 1.7, 4.48, 5.0);
    } else if (s.kind === "table") {
      const head = s.table[0].map((h) => ({ text: h, options: { bold: true, color: C.background1, fill: { color: C.text2 }, fontSize: 12 } }));
      const rows = s.table.slice(1).map((r, ri) => r.map((c) => ({ text: c, options: { fontSize: 12, color: C.text1, bold: ri === s.table.length - 2, fill: { color: ri === s.table.length - 2 ? C.accent6 : C.background1 } } })));
      sl.addTable([head, ...rows], { x: 0.5, y: 1.7, w: 8.3, colW: [2.0, 0.85, 0.8, 1.6, 2.05, 1.0], border: { type: "solid", pt: 0.5, color: "C9D3C5" }, margin: 0.06, valign: "middle", objectName: "comparator-table" });
      items(sl, s.items, 0.5, 5.75, 8.3, 1.1);
      drawingBox(sl, s.drawing, 9.1, 1.7, 3.73, 5.0);
    } else if (s.kind === "timeline") {
      const n = s.steps.length, x0 = 0.9, span = 11.5, step = span / (n - 1);
      sl.addShape(pres.shapes.LINE, { x: x0, y: 2.25, w: span, h: 0, line: { color: C.accent5, width: 2 }, objectName: "timeline-line" });
      s.steps.forEach((st, i) => {
        const cx = x0 + i * step;
        sl.addShape(pres.shapes.OVAL, { x: cx - 0.2, y: 2.05, w: 0.4, h: 0.4, fill: { color: i === n - 1 ? C.accent1 : C.text2 }, line: { color: C.background1, width: 2 }, objectName: `step-${i}` });
        sl.addText([{ text: st.d, options: { bold: true, fontSize: 14, color: C.text2, breakLine: true } }, { text: st.l, options: { fontSize: 12, color: C.text1 } }], { x: cx - 1.1, y: 2.6, w: 2.2, h: 0.8, align: "center", valign: "top", margin: 0, isTextBox: true });
      });
      items(sl, s.items, 0.5, 3.85, 12.33, 1.0);
    }
    notes(sl, s);
  }

  const file = path.join(OUT, "concept_slides.pptx");
  await pres.writeFile({ fileName: file });
  const { applyTheme } = require(process.env.APPLY_THEME);
  await applyTheme(file, THEME);
}

buildMarkdown();
buildPptx().then(() => console.log("built")).catch((e) => { console.error(e); process.exit(1); });
