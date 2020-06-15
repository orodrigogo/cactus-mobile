import * as React from "react";
import { RNSharedElementTransition, RNSharedElementNodeConfig, RNSharedElementAnimation, RNSharedElementResize, RNSharedElementAlign } from "./web/index.web";
declare type PropsType = {
    startNode: {
        node: RNSharedElementNodeConfig | null;
        ancestor: RNSharedElementNodeConfig | null;
    };
    endNode: {
        node: RNSharedElementNodeConfig | null;
        ancestor: RNSharedElementNodeConfig | null;
    };
    nodePosition: number | any;
    animation: RNSharedElementAnimation;
    resize: RNSharedElementResize;
    align: RNSharedElementAlign;
};
declare type StateType = {
    transition: RNSharedElementTransition;
};
export declare class RNSharedElementTransitionView extends React.Component<PropsType, StateType> {
    state: {
        transition: RNSharedElementTransition;
    };
    static getDerivedStateFromProps(props: PropsType, state: StateType): null;
    shouldComponentUpdate(): boolean;
    componentWillUnmount(): void;
    private onSetRef;
    render(): JSX.Element;
}
export {};
