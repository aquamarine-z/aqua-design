// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import styles from "./Glass.module.less"

import AqDraggable from "../../../packages/components/AqDraggable";
import AqColumn from "../../../packages/components/AqColumn";
import {useEffect} from "react";
import AqGlassTheme from "../../../packages/themes/AqGlassTheme";

export function Glass() {
    useEffect(() => {
        document.title="Glass Theme风格展示"
    }, [])
    return (
        <div className={styles.background}>
            <AqDraggable position={"fixed"}>
                <AqGlassTheme>
                        <div className={styles.content}>
                            <AqColumn>
                                <h1>这是Glass Theme状态下的文本风格展示</h1>
                                <h1>Glass Theme状态下的一级标题</h1>
                                <h2>Glass Theme状态下的二级标题</h2>
                                <h3>Glass Theme状态下的三级标题</h3>
                                <h4>Glass Theme状态下的四级标题</h4>
                                <h5>Glass Theme状态下的五级标题</h5>
                                <h6>Glass Theme状态下的六级标题</h6>
                                <p>Glass Theme状态下的段落</p>
                                <button>Glass Theme状态下的按钮</button>
                            </AqColumn>
                        </div>
                </AqGlassTheme>
            </AqDraggable>
            <AqDraggable position={"fixed"}>
                <AqGlassTheme>
                    <div className={styles.content}>
                        <AqColumn>
                            <h1>这是Glass Theme状态下的Input风格展示</h1>
                            <input value={"这是Glass Theme状态下的Text输入框"} type={"text"}/>
                            <input value={""} type={"password"} placeholder={"这是Glass Theme状态下的Password输入框(PlaceHolder)"}/>
                            <input value={"Button Input"} type={"button"}/>
                            <input value={"Submit Input"} type={"submit"}/>
                            <input type={"checkbox"} />
                        </AqColumn>
                    </div>
                </AqGlassTheme>
            </AqDraggable>
        </div>
    )
}