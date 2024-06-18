
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import styles from "./AqRow.module.less"
import React from "react";
export interface AqRowProps{
    children?:React.ReactNode[]|React.ReactNode
}
export function AqRow({children=null}:AqRowProps)
{
    return <div className={styles.aq_row}>{children}</div>
}
