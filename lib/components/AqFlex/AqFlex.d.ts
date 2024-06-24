import React from "react";
export interface AqFlexProps {
    children: React.ReactNode[] | React.ReactNode;
    flexDirection?: "row" | "column";
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
    alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
    style: React.CSSProperties;
}
/***

 ***/
export declare function AqFlex({ flexDirection, justifyContent, alignItems, children, style }: AqFlexProps): import("react/jsx-runtime").JSX.Element;
