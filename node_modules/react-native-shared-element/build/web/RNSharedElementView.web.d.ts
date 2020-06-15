import { RNSharedElementStyle } from "./RNSharedElementStyle.web";
import { Rect } from "./Rect.web";
import { IHTMLElement, RNSharedElementAlign, RNSharedElementResize } from "./types";
export declare class RNSharedElementView {
    parentLayout: Rect;
    readonly element: HTMLElement;
    layout: Rect;
    style: RNSharedElementStyle | null;
    originalLayout: Rect;
    _contentElement: IHTMLElement | null;
    contentLayout: Rect;
    resize: RNSharedElementResize;
    align: RNSharedElementAlign;
    get contentElement(): IHTMLElement | null;
    set contentElement(value: IHTMLElement | null);
    updateLayout(): void;
    /**
     * Updates the layout by only changing the scale of the
     * element. This technique achieves a very high performance
     * as it can be handled completely by the GPU, requiring
     * no layout passes in the browser. It is however also more
     * limited and can't be used for all effects.
     */
    private updateLayoutForScale;
    /**
     * Updates the layout by updating the size of the
     * element and its content element. This algorihm
     * can achieve any possible layout, as well as
     * clipping of the content.
     */
    private updateLayoutForResize;
    private updateStyle;
}
