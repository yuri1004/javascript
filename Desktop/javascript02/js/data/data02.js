const color = {
    title:'red',
    sample:'apple',
    no:123
}

console.log(color);
// 일반객체 -> JSON(String)

const str = JSON.stringify(color);
console.log(str);


// JSON -> 일반객체
const obj = JSON.parse(str);
console.log(obj)