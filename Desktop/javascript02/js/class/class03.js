class Book{
  constructor(name,type){
    this.name = name;
    this.type = type;
  }
   getBook(){
    document.write( `<p>${this.name} - ${this.type}</p>`)
  }
}
const myBook = [
    new Book('book1','all'),
    new Book('book2','all'),
    new Book('book3','all')
]
for(let i in myBook){
    myBook[i].getBook();
}

// 상속 class 만들기
class It extends Book{
    constructor(name,type,level){
        super(name,type);
        this.level = level;
    }
    getCall(){
        document.write(`<p>${this.level} - ${this.name} - ${this.type}</p>`)
    }
}

const myIt = [
    new It('html','인터넷','1'),
    new It('javascript','개발','2'),
    new It('react','앱개발','3')
]

for(let i in myIt){
    myIt[i].getCall();
}