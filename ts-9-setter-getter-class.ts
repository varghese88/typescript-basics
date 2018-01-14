class Point {
    constructor(private _x:number,private _y?:number){
    }
    draw(){
        // logic
        console.log("x:",this._x," y:",this._y);
    }
    getDistance(point:Point){
        // logic
    }
    set x(value) {
        this._x = value;
    }
    get x() {
        return this._x;
    }
}
let point = new Point(1,2);
point.x = 10;
let value = point.x;
point.draw();
