export class Point {
    constructor(private _x:number,private _y?:number){
    }
    draw(){
        // logic
        console.log("x:",this._x," y:",this._y);
    }
    getDistance(point:Point){
        // logic
    }
}

// we cam import this class by import { Point } from './Point';