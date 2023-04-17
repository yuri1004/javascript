const book = {
    title:'javascript',
    type:'it',
    // level:1
}
// 추가하기
const {title,type,level=0} = book;
console.log(type);
console.log(level);
console.log(title);

// 키의 변경
const str = title;
// console.log(title);
console.log(str);
// str = 'html'; ->타입에러가 나온다.

const graphic = {
    no:'paint',
    title2:'photoshop'
}
const {no:art,title2} = graphic;
// console.log(no);
console.log(art);