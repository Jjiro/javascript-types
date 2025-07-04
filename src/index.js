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
