export class RNSharedElementTransitionItem {
    constructor(nodeManager, name) {
        this._hidden = false;
        this._node = null;
        this.needsStyle = false;
        this.style = null;
        this.needsContent = false;
        this.content = null;
        this._nodeManager = nodeManager;
        this.name = name;
    }
    get node() {
        return this._node;
    }
    set node(node) {
        if (this._node === node) {
            if (node != null)
                this._nodeManager.release(node);
            return;
        }
        if (this._node != null) {
            if (this._hidden)
                this._node.releaseHideRef();
            this._nodeManager.release(this._node);
        }
        this._node = node;
        this._hidden = false;
        this.needsStyle = node != null;
        this.style = null;
        this.needsContent = node != null;
        this.content = null;
    }
    get hidden() {
        return this._hidden;
    }
    set hidden(hidden) {
        if (this._hidden === hidden)
            return;
        this._hidden = hidden;
        if (!this._node)
            return;
        if (hidden) {
            this._node.addHideRef();
        }
        else {
            this._node.releaseHideRef();
        }
    }
}
//# sourceMappingURL=RNSharedElementTransitionItem.web.js.map