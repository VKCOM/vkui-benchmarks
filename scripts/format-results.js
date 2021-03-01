#!/usr/bin/env node

const manifests = JSON.parse(process.argv[2]);
const links = JSON.parse(process.argv[3]);

manifests.forEach((manifest) => {
  console.log(`
## ${manifest.url}
full report: ${links[manifest.url]}
summary:

| performance | accessibility | best-practices | seo | pwa |
|-|-|-|-|-|
| ${manifest.summary['performance']} | ${manifest.summary['accessibility']} | ${manifest.summary['best-practices']} | ${manifest.summary['seo']} | ${manifest.summary['pwa']} |
`);
})