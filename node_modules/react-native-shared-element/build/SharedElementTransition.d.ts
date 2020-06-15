import * as React from "react";
import { Animated } from "react-native";
import { SharedElementNode, SharedElementAnimation, SharedElementResize, SharedElementAlign, SharedElementNodeType, SharedElementContentType } from "./types";
export declare type SharedElementMeasureData = {
    node: SharedElementNodeType;
    layout: {
        x: number;
        y: number;
        width: number;
        height: number;
        visibleX: number;
        visibleY: number;
        visibleWidth: number;
        visibleHeight: number;
        contentX: number;
        contentY: number;
        contentWidth: number;
        contentHeight: number;
    };
    contentType: SharedElementContentType;
    style: {
        borderRadius: number;
    };
};
export declare type SharedElementOnMeasureEvent = {
    nativeEvent: SharedElementMeasureData;
};
export declare type SharedElementTransitionProps = {
    start: {
        node: SharedElementNode | null;
        ancestor: SharedElementNode | null;
    };
    end: {
        node: SharedElementNode | null;
        ancestor: SharedElementNode | null;
    };
    position: number | any | void;
    animation: SharedElementAnimation;
    resize?: SharedElementResize;
    align?: SharedElementAlign;
    debug?: boolean;
    style?: any;
    onMeasure?: (event: SharedElementOnMeasureEvent) => void;
    SharedElementComponent?: any;
};
declare type StateType = {
    startNode?: SharedElementMeasureData;
    endNode?: SharedElementMeasureData;
    startAncestor?: SharedElementMeasureData;
    endAncestor?: SharedElementMeasureData;
};
export declare const RNAnimatedSharedElementTransitionView: Animated.AnimatedComponent<any> | undefined;
export declare class SharedElementTransition extends React.Component<SharedElementTransitionProps, StateType> {
    static prepareNode(node: SharedElementNode | null): any;
    static defaultProps: {
        start: {};
        end: {};
        SharedElementComponent: Animated.AnimatedComponent<any> | undefined;
        animation: string;
        resize: string;
        align: string;
    };
    constructor(props: SharedElementTransitionProps);
    state: StateType;
    private static isNotAvailableWarningShown;
    onMeasureNode: (event: SharedElementOnMeasureEvent) => void;
    renderDebugOverlay(): JSX.Element | undefined;
    renderDebugLayer(name: SharedElementNodeType): JSX.Element | undefined;
    render(): JSX.Element | null;
}
export {};
