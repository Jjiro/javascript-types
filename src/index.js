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

/** Making b parameter optional */
function add(a: number, b?: number): number {
  return a + b;
}

/** Resolving the above issue for TS */
function add(a: number, b?: number): number {
  return a + (b || 0);
}

/** Understanding type inference */
/**TypeScript has something called type inference, which means, in many cases,
 * it can work out a variable's type without it having a type annotation.  */
let score = 10;
console.log(score);

let dateOfBirth = new Date(1990, 4, 7);
console.log(dateOfBirth);

/** the type here is 'Bob' - string literal type */
const firstName = "Bob";

/** The types below are number literal type and date */
const age = 31;
const created = new Date(2019, 11, 6);

/** The let keyword allows variables to be reassigned, 
 * it makes sense to give it the wider string type rather than 'Smith'  */
const last = "Smith";
const surname = last;

const last = "Smith";
let surname = last;

/** The type of fullName is string. Perhaps we expected this to be the string literal type, 'Bob Smith'? 
 * TypeScript sees an expression resulting in a string, so that is what it uses. */
const first = "Bob";
const last = "Smith";
const fullName = `${first} ${last}`;




/** Type inference with functions */
function add(a: number, b: number) {
  return a + b;
}
const ten = add(5, 15);
console.log(ten);

/** Both a and the return type of addTen is any. 
 * This results in the type of fourteen being any as well. */
function addTen(a) {
  return a + 10;
}
const fourteen = addTen(4);
console.log(addTen);

/** Both a and the return type of addTen is number. 
 * This results in the type of fourteen being number as well. */
function addTen(a = 1) {
  return a + 10;
}
const fourteen = addTen(4);



