export class Shape{
    private _x:number;
    private _y:number;

    constructor(x:number, y:number) {
        this._x = x;
        this._y = y;
    }

    get y(){
        return this._y;
    }

    get x(){
        return this.x;
    }

    set y(y:number){
        this._y = y;
    }

    set x(x:number){
        this._x = x;
    }

    toString():string{
        return `(x: ${this._x} , y: ${this._y})`;
    }
}