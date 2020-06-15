export declare type SharedElementNode = {
    ref: any;
    nodeHandle: number;
    isParent: boolean;
    parentInstance: any;
};
export declare type SharedElementAnimation = "move" | "fade" | "fade-in" | "fade-out";
export declare type SharedElementResize = "auto" | "stretch" | "clip" | "none";
export declare type SharedElementAlign = "auto" | "left-top" | "left-center" | "left-bottom" | "right-top" | "right-center" | "right-bottom" | "center-top" | "center-center" | "center-bottom";
export declare type SharedElementNodeType = "startNode" | "endNode" | "startAncestor" | "endAncestor";
export declare type SharedElementContentType = "none" | "snapshotView" | "snapshotImage" | "image";
