import { RNSharedElementContent } from "./RNSharedElementContent.web";
import { RNSharedElementStyle } from "./RNSharedElementStyle.web";
import { IHTMLElement } from "./types";
export declare type RNSharedElementNodeStyleCallback = (value: RNSharedElementStyle) => void;
export declare type RNSharedElementNodeContentCallback = (value: RNSharedElementContent) => void;
export declare class RNSharedElementNode {
    readonly domNode: IHTMLElement;
    readonly ancestorDomNode: IHTMLElement;
    readonly isParent: boolean;
    private hideRefCount;
    private hideOpacity;
    private refCount;
    private styleCache;
    private styleCallbacks;
    private contentCache;
    private contentCallbacks;
    constructor(domNode: IHTMLElement, isParent: boolean, ancestorDomNode: IHTMLElement);
    addRef(): number;
    releaseRef(): number;
    addHideRef(): void;
    releaseHideRef(): void;
    get resolvedElement(): IHTMLElement | null;
    get resolvedAncestor(): IHTMLElement | null;
    requestStyle(): Promise<RNSharedElementStyle>;
    private fetchInitialStyle;
    requestContent(): Promise<RNSharedElementContent>;
    private fetchInitialContent;
}
