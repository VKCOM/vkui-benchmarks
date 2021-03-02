#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const vkuiReport = require(path.resolve(
  __dirname,
  "../results/vkui/vkui.json"
));

function reportTable(app, run) {
  const { type, url, reportUrl, summary } = run;
  const { performance, accessibility, seo, pwa, bestPractices } = summary;
  return `| ${app} | [${type}](${url}) | [report](${reportUrl}) | ${performance} | ${accessibility} | ${bestPractices} | ${seo} | ${pwa} |`;
}

const SEPARATOR = `
---
`;

fs.readdirSync(path.resolve(__dirname, "../results"))
  .filter((file) => !file.startsWith("vkui"))
  .forEach((file, i) => {
    const report = require(path.resolve(
      __dirname,
      "../results",
      `${file}/${file}.json`
    ));

    if (i !== 0) {
      console.log(SEPARATOR);
    }

    console.log(`## \`vkui\` vs \`${report.app}\`:`);
    console.log(`| app | type (app link) | report | performance | accessibility | best-practices | seo | pwa |
|-|-|-|-|-|-|-|-|`);

    ["default", "modals", "list"].forEach((type) => {
      console.log(reportTable("vkui", vkuiReport.runs[type]));
      console.log(reportTable(report.app, report.runs[type]));
    });
  });
