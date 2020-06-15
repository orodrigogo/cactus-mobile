import { RNSharedElementNode } from "./RNSharedElementNode.web";
export class RNSharedElementNodeManager {
    constructor() {
        this.nodes = new Map();
    }
    static getInstance() {
        if (!RNSharedElementNodeManager.instance) {
            RNSharedElementNodeManager.instance = new RNSharedElementNodeManager();
        }
        return RNSharedElementNodeManager.instance;
    }
    acquire(domNode, isParent, ancestorDomNode) {
        let node = this.nodes.get(domNode);
        if (node) {
            node.addRef();
            return node;
        }
        node = new RNSharedElementNode(domNode, isParent, ancestorDomNode);
        this.nodes.set(domNode, node);
        return node;
    }
    release(node) {
        const refCount = node.releaseRef();
        if (!refCount) {
            this.nodes.delete(node.domNode);
        }
        return refCount;
    }
}
//# sourceMappingURL=RNSharedElementNodeManager.web.js.map