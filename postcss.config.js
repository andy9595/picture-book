require('tailwindcss')({ config: "./tailwind.config.js" }),
// 使用postcss-class-name 包将小程序不支持的类名写法转换为支持的类名，如："hover:xxx"
require('postcss-class-rename')({
  "\\\\:": "--",
  "\\\\/": "--",
  "\\\\.": "--",
  ".:": "--",
  "\\\*": "--"
}),
