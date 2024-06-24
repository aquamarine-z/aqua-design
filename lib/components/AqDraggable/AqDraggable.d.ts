import React from "react";
export interface AqDraggableProps {
    children: JSX.Element;
    position: "fixed" | "absolute";
    originalPosition: {
        left: number;
        top: number;
    };
    style?: React.CSSProperties;
}
export declare function AqDraggable({ children, position, originalPosition, style, }: AqDraggableProps): import("react/jsx-runtime").JSX.Element;
export declare namespace AqDraggable {
    var defaultProps: {
        originalPosition: {
            left: number;
            top: number;
        };
        style: null;
    };
}
