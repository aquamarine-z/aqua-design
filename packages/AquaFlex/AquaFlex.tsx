import React from "react";

export function AquaFlex(props:{
    children: React.ReactNode[],
    flexDirection?: "row" | "column"
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"
    alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline"
}){
    return <div style={{
        display: "flex",
        flexDirection: props.flexDirection,
        justifyContent: props.justifyContent,
        alignItems: props.alignItems
    }}>
        {props.children}
    </div>
}
AquaFlex.defaultProps = {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start"
}