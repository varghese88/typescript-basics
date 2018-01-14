class Point {
    private x:number;
    private y:number;
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

// point3.y = 5; not able set value for y
point1.draw();
