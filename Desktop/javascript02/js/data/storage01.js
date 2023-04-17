const fruit ={
    color:'red',
    name:'apple',
    price:1000
}
// export 준비
const str = JSON.stringify(fruit);
console.log(str);
// 올리기
localStorage.setItem('fruit',str);

const num = localStorage.getItem('fruit');
console.log(num);
const str2 = JSON.parse(num)
console.log(str2)
document.write(`
<dl>
  <dt>${str2.name}</dt>
  <dd>${str2.color}</dd>
  <dd>${str2.price}원</dd>
</dl>
`)
localStorage.setItem('color','red')
localStorage.removeItem('color');
// localStorage.clear();