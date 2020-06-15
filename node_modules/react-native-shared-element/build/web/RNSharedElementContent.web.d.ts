import { Rect } from "./Rect.web";
import { IHTMLElement } from "./types";
export declare class RNSharedElementContent {
    readonly element: IHTMLElement;
    readonly size: Rect;
    constructor(element: IHTMLElement, size: Rect);
    static getSize(element: IHTMLElement): Promise<Rect | null>;
    static getLayout(layout: Rect, content: RNSharedElementContent | null, resizeMode: string, reverse?: boolean): Rect;
}
