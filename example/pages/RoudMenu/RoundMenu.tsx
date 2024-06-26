import styles from "./RoundMenu.module.less"
import AqDraggable from "../../../packages/components/AqDraggable";
import AqGlassTheme from "../../../packages/themes/GlassTheme/AqGlassTheme";
import React from "react";

export function RoundMenu() {
    return (
        <>
            <div className={styles.background}></div>
            <Menu>

            </Menu>
        </>

    )
}

function Menu() {
    const [expand, setExpand] = React.useState(false)
    const items = [] as JSX.Element[]
    const r = 120;
    const degAmount = 6;
    const itemAmount = 3;
    const deg = 360 / degAmount
    for (let i = 0; i < itemAmount; i++) {
        const x = r * Math.sin(deg * i * Math.PI / 180)
        const y = r * Math.cos(deg * i * Math.PI / 180)
        items.push(
            <div key={i} style={{position: "absolute", left: x, top: y}}>
                <AqGlassTheme>
                    <div className={expand ? styles.menu_item : styles.menu_item_hide}>

                    </div>
                </AqGlassTheme>
            </div>
        )
    }
    return (
        <AqDraggable position={"absolute"}>
            <div style={{margin: "0", padding: "0", position: "relative"}}>
                <AqGlassTheme>
                    <div className={styles.menu_item_center} onDoubleClick={() => {
                        setExpand(!expand)
                    }}></div>
                </AqGlassTheme>
                {items}
            </div>

        </AqDraggable>
    )
}