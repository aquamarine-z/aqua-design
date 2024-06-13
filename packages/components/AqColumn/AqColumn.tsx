import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import styles from "./AqColumn.module.less"
export interface AqColumnProps{
    children?: React.ReactNode[]|React.ReactNode,

}
export function AqColumn(props:AqColumnProps)
{
    return <div className={styles.aq_column}>{props.children}</div>
}
export default AqColumn