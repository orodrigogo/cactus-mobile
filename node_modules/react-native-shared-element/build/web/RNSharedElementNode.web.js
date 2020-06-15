import { RNSharedElementContent } from "./RNSharedElementContent.web";
import { RNSharedElementStyle } from "./RNSharedElementStyle.web";
import { Rect } from "./Rect.web";
export class RNSharedElementNode {
    constructor(domNode, isParent, ancestorDomNode) {
        this.hideRefCount = 0;
        this.hideOpacity = null;
        this.refCount = 1;
        this.styleCache = null;
        this.styleCallbacks = null;
        this.contentCache = null;
        this.contentCallbacks = null;
        this.domNode = domNode;
        this.isParent = isParent;
        this.ancestorDomNode = ancestorDomNode;
    }
    addRef() {
        return ++this.refCount;
    }
    releaseRef() {
        return --this.refCount;
    }
    addHideRef() {
        this.hideRefCount++;
        if (this.hideRefCount === 1) {
            const element = this.resolvedElement;
            this.hideOpacity = element.style.opacity;
            element.style.opacity = "0";
        }
    }
    releaseHideRef() {
        this.hideRefCount--;
        if (this.hideRefCount === 0) {
            const element = this.resolvedElement;
            // @ts-ignore
            element.style.opacity = this.hideOpacity;
        }
    }
    get resolvedElement() {
        let element = this.domNode;
        // If this node is a parent, look for the first child
        if (this.isParent) {
            if (element.childNodes.length === 1) {
                // @ts-ignore
                element = element.childNodes[0];
            }
            else if (element.childNodes.length <= 0) {
                console.log("Child for parent doesnt exist");
                return null;
            }
        }
        // Get background-image node
        const { childNodes } = element;
        if (childNodes.length === 2) {
            for (let i = 0; i < 2; i++) {
                // @ts-ignore
                const childNode = childNodes[i];
                if (childNode.tagName === "IMG") {
                    // @ts-ignore
                    element = childNodes[i ? 0 : i + 1];
                    break;
                }
            }
        }
        return element;
    }
    get resolvedAncestor() {
        return this.ancestorDomNode;
    }
    requestStyle() {
        if (this.styleCache) {
            return Promise.resolve(this.styleCache);
        }
        return new Promise(resolve => {
            this.styleCallbacks = this.styleCallbacks || [];
            this.styleCallbacks.push(resolve);
            if (!this.fetchInitialStyle()) {
                console.debug("Failed to fetch style");
                //startRetryLoop();
            }
        });
    }
    fetchInitialStyle() {
        const element = this.resolvedElement;
        const ancestor = this.resolvedAncestor;
        if (!element || !ancestor)
            return false;
        if (!this.styleCallbacks)
            return true;
        // Fetch layout
        const rect = element.getBoundingClientRect();
        // const ancestorTransform = ancestor.style.transform;
        const ancestorRect = ancestor.getBoundingClientRect();
        // console.log("ancestorTransform: ", ancestor.style, ancestorRect);
        const translateX = ancestorRect.x; // TODO
        const translateY = ancestorRect.y; // TODO
        const layout = new Rect({
            x: rect.x - translateX,
            y: rect.y - translateY,
            width: rect.width,
            height: rect.height
        });
        // Create style
        const style = new RNSharedElementStyle(layout, 
        // @ts-ignore
        window.getComputedStyle(element, null));
        // console.debug("Style fetched: ", style);
        // Update cache
        this.styleCache = style;
        // Notify callbacks
        const callbacks = this.styleCallbacks;
        this.styleCallbacks = null;
        callbacks.forEach(callback => callback(style));
        return true;
    }
    async requestContent() {
        if (this.contentCache)
            return this.contentCache;
        return new Promise(resolve => {
            if (this.contentCallbacks)
                return;
            this.contentCallbacks = this.contentCallbacks || [];
            this.contentCallbacks.push(resolve);
            this.fetchInitialContent();
            // TODO RETRY IN CASE OF FAILURE?
        });
    }
    async fetchInitialContent() {
        const element = this.resolvedElement;
        if (!element)
            return false;
        if (!this.contentCallbacks)
            return true;
        // Fetch content size
        const size = await RNSharedElementContent.getSize(element);
        if (!size) {
            return false;
        }
        // Create content
        const content = new RNSharedElementContent(element, size);
        // console.debug("Content fetched: ", content);
        // Update cache
        this.contentCache = content;
        // Notify callbacks
        const callbacks = this.contentCallbacks;
        this.contentCallbacks = null;
        callbacks.forEach(callback => callback(content));
        return true;
    }
}
//# sourceMappingURL=RNSharedElementNode.web.js.map