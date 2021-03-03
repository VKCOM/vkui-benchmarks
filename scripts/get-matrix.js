#!/usr/bin/env node

const output = process.argv[2]
  ? { app: ["vkui", "vkui-versioned", "mui", "yandex", "f7"] }
  : { app: ["vkui", "mui", "yandex", "f7"] };

console.log(output);
