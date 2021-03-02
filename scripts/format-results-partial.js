#!/usr/bin/env node

const app = process.argv[2];
const manifests = JSON.parse(process.argv[3]);
const links = JSON.parse(process.argv[4]);

const report = {
  app,
  runs: manifests
    .map((manifest) => {
      const type = manifest.url.includes("mode=modals")
        ? "modals"
        : manifest.url.includes("mode=burn")
        ? "list"
        : "default";
      return {
        type,
        url: manifest.url,
        reportUrl: links[manifest.url],
        summary: {
          ...manifest.summary,
          bestPractices: manifest.summary["best-practices"]
        },
      };
    })
    .reduce((dict, run) => {
      dict[run.type] = run;
      return dict;
    }, {}),
};

console.log(JSON.stringify(report, null, 2));
