class Point {
    // prefix a access modifier it will create a field and set it to their respected value 
    constructor(private x:number,private y?:number, private z?:number){
    }
    draw(){
        // logic
        console.log("x:",this.x," y:",this.y);
    }
    getDistance(point:Point){
        // logic
    }
}
let point1 = new Point(1,2);
let point2 = new Point(1);
let point3 = new Point(1,2,3);

// point3.y = 5; not able set value for y
point1.draw();
