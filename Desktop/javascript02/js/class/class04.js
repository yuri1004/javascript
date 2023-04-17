class Rect{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    action(){
        document.write(this.width* this.height,'<br>')
    }
}
const myRect =[new Rect(100,200)]
for(let i in myRect){
    myRect[i].action()
}
// console.log(myRect.action())

// 상속받는 class
class NumPoly extends Rect{
    constructor(width,height,num){
        super(width,height);
        this.num = num;
    }
    action(){
        document.write(this.width * this.height * this.num,'<br>')
    }
}
const myPoly = [new NumPoly(100,300,3)]
for(let i of myPoly){
    i.action()
}