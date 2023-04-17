const color = ['red','blue','green'];
const [a,b,c] = color;
console.log(a);
console.log(b);

const color1 = ['red','blue','green'];
const [c1,,c2] = color1;
console.log(c1);

const word = ['moon','flower','cat','dog'];
const [,no01,,no02] = word;
console.log(no01);

const all = ['a1','a2','a3'];
const [b1,b2,b3,b4="data"] = all;
console.log(b1)
console.log(b4)