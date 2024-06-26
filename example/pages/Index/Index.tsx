import {Link} from "react-router-dom";
import AqGlassTheme from "../../../packages/themes/GlassTheme/AqGlassTheme";
import AqColumn from "../../../packages/components/AqColumn";
import styles from "./index.module.less"

export function Index(){
    return(
        <div className={styles.background}>
            <AqGlassTheme>
                <div style={{height:"60vh",width:"70vw"}}>
                    <AqColumn style={{gap:"10px"}}>
                        <h1>Aqua Design 功能组件演示</h1>
                        <Link to={"/modal_dialog"}>ModalDialog组件演示</Link>
                        <Link to={"/drag"}>Draggable组件演示</Link>
                        <Link to={"/glass"}>GlassTheme组件演示 </Link>
                        <Link to={"/menu"}>圆扩展菜单组件展示</Link>
                    </AqColumn>
                </div>

            </AqGlassTheme>

        </div>

    )
}