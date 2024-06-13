import React from "react";
export declare function AquaFlex(props: {
    children: React.ReactNode[];
    flexDirection?: "row" | "column";
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
    alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
}): import("react/jsx-runtime").JSX.Element;
export declare namespace AquaFlex {
    var defaultProps: {
        flexDirection: string;
        justifyContent: string;
        alignItems: string;
        children: never[];
    };
}
