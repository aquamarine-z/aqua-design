import React from "react";


import styles from "./AqFlex.module.less"
export interface AqFlexProps{
    children: React.ReactNode[]|React.ReactNode,
    flexDirection?: "row" | "column"
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"
    alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline"

}
/***

 ***/
export function AqFlex({
                           flexDirection = "row",
                           justifyContent = "flex-start",
                           alignItems = "flex-start",
                           children = null
                       }: AqFlexProps) {
    return <div style={{
        display: "flex",
        flexDirection: flexDirection,
        justifyContent: justifyContent,
        alignItems: alignItems
    }}
                className={styles.aq_flex}
    >
        {children}
    </div>
}
