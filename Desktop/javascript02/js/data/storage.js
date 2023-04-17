localStorage.setItem('book','javascript');
const color = {
    title:'red',
    sample:'apple',
    no:['no01','no02']
}

// localStorage.setItem('color',color); -> 안되는애
const str = JSON.stringify(color);
console.log(str);

localStorage.setItem('color',str);
 
// loccalstorafe.color 가져오기
const obj = localStorage.getItem('color');
console.log(obj);
// javascript 오브젝트 변환
const str2 = JSON.parse(obj)
console.log(str2)
console.log(str2.sample)