import * as React from "react";
import { View, findNodeHandle } from "react-native";
export function nodeFromRef(ref, isParent, parentInstance) {
    const nodeHandle = ref ? findNodeHandle(ref) : undefined;
    return nodeHandle
        ? {
            ref,
            nodeHandle,
            isParent: isParent || false,
            parentInstance
        }
        : null;
}
export class SharedElement extends React.Component {
    constructor() {
        super(...arguments);
        this._node = null;
        this.onSetRef = (ref) => {
            this._node = nodeFromRef(ref, true, this);
            if (this.props.onNode) {
                this.props.onNode(this._node);
            }
        };
    }
    componentDidUpdate(prevProps) {
        if (!prevProps.onNode && this.props.onNode && this._node) {
            this.props.onNode(this._node);
        }
    }
    render() {
        const { onNode, //eslint-disable-line @typescript-eslint/no-unused-vars
        ...otherProps } = this.props;
        return <View ref={this.onSetRef} collapsable={false} {...otherProps}/>;
    }
}
//# sourceMappingURL=SharedElement.js.map