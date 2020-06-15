import { IRect } from "./types";
export declare class Rect implements IRect {
    x: number;
    y: number;
    width: number;
    height: number;
    static readonly empty: Rect;
    constructor(source?: IRect);
    equals(rect: Rect): boolean;
}
