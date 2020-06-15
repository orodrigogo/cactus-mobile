import { RNSharedElementNode } from "./RNSharedElementNode.web";
import { IHTMLElement } from "./types";
export declare class RNSharedElementNodeManager {
    private nodes;
    private static instance;
    static getInstance(): RNSharedElementNodeManager;
    acquire(domNode: IHTMLElement, isParent: boolean, ancestorDomNode: IHTMLElement): RNSharedElementNode;
    release(node: RNSharedElementNode): number;
}
