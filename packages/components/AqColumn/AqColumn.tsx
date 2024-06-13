import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import styles from "./AqColumn.module.less"
export interface AqColumnProps{
    children?: React.ReactNode[]|React.ReactNode,
}
/*
* @description 布局为Flex的Column
* css属性:
*   display: flex;
*   flex-direction: column;
*   width: 100%;
*   height:fit-content;
*   padding: 0;
*   margin: 0;
*   align-items: center;
* */
export function AqColumn(props:AqColumnProps)
{
    return <div className={styles.aq_column}>{props.children}</div>
}
