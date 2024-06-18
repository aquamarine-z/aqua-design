
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import styles from "./AqModalDialog.module.less"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import AqDraggable from "../AqDraggable";

export interface AqModalDialogProps{
    visible:boolean;
    children?:React.ReactNode|React.ReactNode[];
}
export function AqModalDialog({visible=false,children=null}:AqModalDialogProps){
    const left=document.documentElement.clientWidth/2;
    const top=document.documentElement.clientHeight/2;
    const layerZIndex=2^32-1
    if(!visible){
        return <></>
    }else{

        return (
            <>
                <div className={styles.aq_modal_dialog_layer} style={{zIndex:layerZIndex}}>
                    <AqDraggable position={"fixed"} originalPosition={{left: left, top: top}}
                                 style={{transform: "translateX(-50%) translateY(-50%)"}}>
                        <div className={styles.aq_modal_dialog} >
                            {children}
                        </div>
                    </AqDraggable>
                </div>


            </>
        )
    }
}