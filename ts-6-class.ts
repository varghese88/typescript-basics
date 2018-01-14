class Point {
    x:number;
    y:number;
    constructor(x:number,y?:number,z?:number){
        this.x = x;
        this.y = y;
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
point1.draw();
