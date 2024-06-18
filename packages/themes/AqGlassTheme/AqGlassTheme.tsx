// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import styles from "./AqGlassTheme.module.less"
import React from "react";
export interface AqGlassThemeProps {
    children?: React.ReactNode|React.ReactNode[]
}
export function AqGlassTheme({children=null}:AqGlassThemeProps)
{
    return <div className={styles.aq_glass_theme}>
        {children}
    </div>
}
