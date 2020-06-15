import * as React from "react";
import { ViewProps } from "react-native";
import { SharedElementNode } from "./types";
export declare type SharedElementProps = ViewProps & {
    children: React.ReactNode;
    onNode: (node: SharedElementNode | null) => void;
};
export declare function nodeFromRef(ref: any, isParent?: boolean, parentInstance?: any): SharedElementNode | null;
export declare class SharedElement extends React.Component<SharedElementProps> {
    componentDidUpdate(prevProps: SharedElementProps): void;
    private _node;
    private onSetRef;
    render(): JSX.Element;
}
