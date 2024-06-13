import React from "react";
export interface AqFlexProps {
    children: React.ReactNode[] | React.ReactNode;
    flexDirection?: "row" | "column";
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
    alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
}
export declare function AqFlex(props: AqFlexProps): import("react/jsx-runtime").JSX.Element;
export declare namespace AqFlex {
    var defaultProps: {
        flexDirection: string;
        justifyContent: string;
        alignItems: string;
        children: never[];
    };
}
export default AqFlex;
