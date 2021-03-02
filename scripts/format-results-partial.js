#!/usr/bin/env node

const app = process.argv[2];
const manifests = JSON.parse(process.argv[3]);
const links = JSON.parse(process.argv[4]);

manifests.forEach((manifest) => {
  const urlTitle = manifest.url.includes("mode=modals") ? "modals" : manifest.url.includes("mode=burn") ? "list" : "default";
  console.log(`| ${app} | [${urlTitle}](${manifest.url}) | [full report](${links[manifest.url]}) | ${manifest.summary['performance']} | ${manifest.summary['accessibility']} | ${manifest.summary['best-practices']} | ${manifest.summary['seo']} | ${manifest.summary['pwa']} |`);
});
