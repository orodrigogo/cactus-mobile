import { RNSharedElementNodeConfig, RNSharedElementAnimation, RNSharedElementResize, RNSharedElementAlign, IHTMLElement } from "./types";
export declare class RNSharedElementTransition {
    private items;
    animation: RNSharedElementAnimation;
    resize: RNSharedElementResize;
    align: RNSharedElementAlign;
    nodePosition: number;
    element: IHTMLElement | null;
    private layout;
    private views;
    destroy(): void;
    setNode(end: boolean, node: RNSharedElementNodeConfig | null, ancestor: RNSharedElementNodeConfig | null): void;
    didSetProps(): void;
    private requestStylesAndContent;
    private updateNodeVisibility;
    private updateLayout;
    private updateView;
}
