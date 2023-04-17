// 구조분해 할당
const num = {
    a1:10,
    a2:20,
    a3:30
}
console.log(num.a1);

const {b1,b2,b3} = {
    b1:10,
    b2:20,
    b3:30
}

console.log(b2);
// 할당연산자는 작업 하지 않는다.
// b2 = 'love';

const book = {
    title:'javascript',
    type:'it'
}
// const {title,type} = book;
const {title} = book;
console.log(title);


const no = {
    a1:[0,1,2,3,4,5],
    a2:[2,3,4,5],
    a3:[2,3,4,5],
    a4:[2,3,4,5],
    a5:[2,3,4,5],
}

console.log(no['a1']);
const {a1,a4} = no;
console.log(a1);
console.log();
console.log();