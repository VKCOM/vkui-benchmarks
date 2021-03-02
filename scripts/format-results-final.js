#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const vkuiReport = require(path.resolve(
  __dirname,
  "../results/results-vkui/vkui.json"
));

function compare(v1, v2) {
  return v1 > v2 ? "🟢" : v1 < v2 ? "🔴" : "";
}

function reportCompare(app1, app1Run, app2, app2Run) {
  const {
    type: type1,
    url: url1,
    reportUrl: reportUrl1,
    summary: summary1,
  } = app1Run;
  const {
    performance: performance1,
    accessibility: accessibility1,
    seo: seo1,
    pwa: pwa1,
    bestPractices: bestPractices1,
  } = summary1;

  const {
    type: type2,
    url: url2,
    reportUrl: reportUrl2,
    summary: summary2,
  } = app2Run;
  const {
    performance: performance2,
    accessibility: accessibility2,
    seo: seo2,
    pwa: pwa2,
    bestPractices: bestPractices2,
  } = summary2;

  return `| ${app1} | [${type1}](${url1}) | [report](${reportUrl1}) | ${performance1} ${compare(performance1, performance2)} | ${accessibility1} ${compare(accessibility1, accessibility2)} | ${bestPractices1} ${compare(bestPractices1, bestPractices2)} | ${seo1} ${compare(seo1, seo2)} | ${pwa1} ${compare(pwa1, pwa2)} |
| ${app2} | [${type2}](${url2}) | [report](${reportUrl2}) | ${performance2} | ${accessibility2} | ${bestPractices2} | ${seo2} | ${pwa2} |`;
}

const SEPARATOR = `
---
`;

fs.readdirSync(path.resolve(__dirname, "../results"))
  .filter((file) => !file.startsWith("results-vkui"))
  .forEach((file, i) => {
    const report = require(path.resolve(
      __dirname,
      "../results",
      `${file}/${file.substr(8)}.json`
    ));

    if (i !== 0) {
      console.log(SEPARATOR);
    }

    console.log(`## \`vkui\` vs \`${report.app}\`:`);
    console.log(`| app | type (app link) | report | performance | accessibility | best-practices | seo | pwa |
|-|-|-|-|-|-|-|-|`);

    ["default", "modals", "list"].forEach((type) => {
      console.log(reportCompare("vkui", vkuiReport.runs[type], report.app, report.runs[type]));
    });
  });
