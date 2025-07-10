const name = "Bob";
console.log("Type of name:", typeof name);

const age = 30;
console.log("Type of age:", typeof age);

const cool = true;
console.log("Type of cool:", typeof cool);

const dateOfBirth = new Date(1989, 10, 5);
console.log("Type of dateOfBirth:", typeof dateOfBirth);

console.log("");

const count = BigInt(452947234234);
console.log("count", typeof count);
const address = null;
console.log("address", typeof address);
const phone = undefined;
console.log("phone", typeof phone);
const stars = Symbol("***");
console.log("stars", typeof stars);

console.log("");

let amount = 10;
console.log("amount", typeof amount);

amount = "Eight";
console.log("amount", typeof amount);

/*https://codesandbox.io/s/type-annotations-1xgsj*/

/*let score: number;
score = "ten"; */

function add(a: number, b: number): number {
  return a + b;
}
console.log(add);

const minus = function (a: number, b: number): number {
  return a - b;
};
console.log(minus);

const multiply = (a: number, b: number): number => a * b;
console.log(multiply);

function divideTS(a: number, b: number): number {
  return a / b;
}
console.log(divideTS);

function divideJS(a, b) {
  return a / b;
}
console.log(divideJS);

/* Making B paprameter optional */
function add(a: number, b?: number): number {
  return a + b;
}

/** Resolvong the above issue for TS */
function add(a: number, b?: number): number {
  return a + (b || 0);
}
