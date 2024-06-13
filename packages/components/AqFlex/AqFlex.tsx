import React from "react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import styles from "./AqFlex.module.less"
export interface AqFlexProps{
    children: React.ReactNode[]|React.ReactNode,
    flexDirection?: "row" | "column"
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"
    alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline"

}
export function AqFlex(props:AqFlexProps){
    return <div style={{
        display: "flex",
        flexDirection: props.flexDirection,
        justifyContent: props.justifyContent,
        alignItems: props.alignItems
    }}
                className={styles.aq_flex}
    >
        {props.children}
    </div>
}
AqFlex.defaultProps = {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    children: []
}
export default AqFlex