// var scope to the near functions
function doSomething(){
    for(var i=0;i<4;i++){
        console.log(i);
    }
    console.log('Finall - ',i);
}
// let - block scope
function doSomethingLet(){
    let i = 0;
    for(i=0;i<4;i++){
        console.log(i);
    }
    console.log('Finall - ',i);
}

doSomething();

let count:number = 5;
count = 8;
let a:boolean;
let b:string;
let c:any;
let d:number[] = [1,2,3];

const ColorRed = 0;

enum Color { Red = 0, Blue, Green}
let backgroundColor = Color.Red;
