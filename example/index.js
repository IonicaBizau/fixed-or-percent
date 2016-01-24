const fixedOrPercent = require("../lib");

console.log(fixedOrPercent(42));
// 42

console.log(fixedOrPercent(10, 420));
// 10

console.log(fixedOrPercent("10%", 420));
// 42
