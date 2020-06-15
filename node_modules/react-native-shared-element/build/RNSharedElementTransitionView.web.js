import * as React from "react";
import { View, findNodeHandle } from "react-native";
import { RNSharedElementTransition } from "./web/index.web";
export class RNSharedElementTransitionView extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            transition: new RNSharedElementTransition()
        };
        this.onSetRef = (ref) => {
            if (!ref)
                return;
            const element = ref ? findNodeHandle(ref) : null;
            const { transition } = this.state;
            transition.element = element;
        };
    }
    static getDerivedStateFromProps(props, state) {
        const { startNode, endNode, animation, resize, align, nodePosition } = props;
        const { transition } = state;
        transition.setNode(false, startNode.node, startNode.ancestor);
        transition.setNode(true, endNode.node, endNode.ancestor);
        transition.nodePosition = nodePosition;
        transition.animation = animation;
        transition.resize = resize;
        transition.align = align;
        transition.didSetProps();
        return null;
    }
    shouldComponentUpdate() {
        return false;
    }
    componentWillUnmount() {
        this.state.transition.destroy();
    }
    render() {
        // console.log("RNSharedElementTransitionView.render");
        return <View ref={this.onSetRef}/>;
    }
}
//# sourceMappingURL=RNSharedElementTransitionView.web.js.map