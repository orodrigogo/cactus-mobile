import { RNSharedElementContent } from "./RNSharedElementContent.web";
import { RNSharedElementNode } from "./RNSharedElementNode.web";
import { RNSharedElementNodeManager } from "./RNSharedElementNodeManager.web";
import { RNSharedElementStyle } from "./RNSharedElementStyle.web";
export declare class RNSharedElementTransitionItem {
    private _hidden;
    readonly name: string;
    private _node;
    private _nodeManager;
    needsStyle: boolean;
    style: RNSharedElementStyle | null;
    needsContent: boolean;
    content: RNSharedElementContent | null;
    constructor(nodeManager: RNSharedElementNodeManager, name: string);
    get node(): RNSharedElementNode | null;
    set node(node: RNSharedElementNode | null);
    get hidden(): boolean;
    set hidden(hidden: boolean);
}
