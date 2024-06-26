
import styles from "./ModalDialog.module.less"
import AqColumn from "../../../packages/components/AqColumn";
import AqGlassTheme from "../../../packages/themes/GlassTheme/AqGlassTheme";
import {useState} from "react";
import {AqModalDialog} from "../../../packages/components/AqModalDialog/AqModalDialog";

export function ModalDialog() {
    const [dialog1Open, setDialog1Open] = useState(true)
    const [dialog2Open,setDialog2Open]=useState(true)
    return (
        <div className={styles.background}>
            <AqColumn>
                <AqGlassTheme>
                    <button onClick={() => {
                        setDialog1Open(true)
                    }}>点我开启弹窗1
                    </button>
                    <button onClick={() => {
                        setDialog2Open(true)
                    }}>点我开启弹窗2
                    </button>
                    <button onClick={() => {
                        setDialog2Open(true)
                        setDialog1Open(true)
                    }}>点我开启所有弹窗
                    </button>
                </AqGlassTheme>
                <AqModalDialog visible={dialog1Open}>
                    <AqGlassTheme>

                        <div className={styles.content}>
                            <AqColumn>
                                <h1>这是一个弹出的窗口1</h1>
                                <button onClick={() => {
                                    setDialog1Open(false)
                                }}>点我关闭此窗口
                                </button>
                            </AqColumn>

                        </div>

                    </AqGlassTheme>

                </AqModalDialog>
                <AqModalDialog visible={dialog2Open}>
                    <AqGlassTheme>

                        <div className={styles.content}>
                            <AqColumn>
                                <h1>这是一个弹出的窗口2</h1>
                                <button onClick={() => {
                                    setDialog2Open(false)
                                }}>点我关闭此窗口
                                </button>
                            </AqColumn>

                        </div>

                    </AqGlassTheme>

                </AqModalDialog>
            </AqColumn>
        </div>
    )

}