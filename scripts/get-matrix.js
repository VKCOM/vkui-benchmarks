#!/usr/bin/env node

const output = process.argv[2]
  ? { app: ["vkui", "vkui-versioned", "mui", "yandex", "f7", "spectrum", "lightning", "ant", "fluent"] }
  : { app: ["vkui", "mui", "yandex", "f7", "spectrum", "lightning", "ant", "fluent"] };

console.log(JSON.stringify(output));
