const person = "Mike";
const age = 28;

function myTag(strings, personExp, ageExp) {
  const str0 = strings[0]; // "That "
  const str1 = strings[1]; // " is a "
  const str2 = strings[2]; // "."

  const ageStr = ageExp > 99 ? "centenarian" : "youngster";

  // 我们甚至可以返回使用模板字面量构建的字符串
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

const output = myTag`That ${person} is a ${age}.`;

console.log(output);
// That Mike is a youngster.


function f(...args) {
  return args;
}

f(1, 2, 3); // -> [ 1, 2, 3 ]

const test = f`Hello string ${'someconst'}, Hello boolean ${false}, Hello array ${[1, 2, 3]}`;
/*
[
  ["Hello string ",  ", Hello boolean ", ", Hello array ", ""],
  "前端自习课",
  false,
  [1, 2, 3]
]
*/
console.log(test);