// While
console.log("While");
const list = ["a", "b", "c"];
let i = 0;
while (i < list.length) {
  console.log(list[i]);
  console.log(i);
  i+=1;
}


// While continue
let text = '';
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text = text + i;
}
console.log("While continue");
console.log(text);

// While break
let num = 0;
while (num < 6) {
  if (num === 3) {
    break;
  }
  num+= 1;
}
console.log("While break");
console.log(num);

// For
console.log("For");
const listFor = ["a", "b", "c"];
for (let number = 0; number < listFor.length; number++) {
  console.log(listFor[number]);
  console.log(number);
}

// For ... of
console.log("for...of");
const listForOf = ["abc", "def", "acp"];
for (const c of listForOf) {
  console.log(c);
}
