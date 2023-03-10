import { Shape } from "./Shape";
export declare class Rectangle extends Shape implements IArea {
    private _width;
    private _height;
    constructor(x: number, y: number, _width: number, _height: number);
    area(): number;
    get width(): number;
    get height(): number;
    set width(width: number);
    set height(height: number);
}
