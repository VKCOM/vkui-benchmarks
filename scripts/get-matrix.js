#!/usr/bin/env node

const output = process.argv[2]
  ? { app: ["vkui", "vkui-versioned", "mui", "yandex", "f7", "spectrum", "lightning"] }
  : { app: ["vkui", "mui", "yandex", "f7", "spectrum", "lightning"] };

console.log(JSON.stringify(output));
