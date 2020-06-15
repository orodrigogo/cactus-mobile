import { Color } from "./Color.web";
import { Rect } from "./Rect.web";
import { CSSStyleDeclaration } from "./types";
export declare class RNSharedElementStyle {
    readonly layout: Rect;
    readonly style: CSSStyleDeclaration;
    readonly opacity: number;
    readonly backgroundColor: Color;
    constructor(layout: Rect, style: CSSStyleDeclaration);
    static getInterpolatedLayout(layout1: Rect, layout2: Rect, position: number): Rect;
    static getInterpolatedStyle(style1: RNSharedElementStyle, style2: RNSharedElementStyle, position: number): RNSharedElementStyle;
}
