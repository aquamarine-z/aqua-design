


import React from "react";
import AqDraggable from "../AqDraggable";
import styled from "styled-components";

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
                <AqModalDialogDiv style={{zIndex:layerZIndex}}>
                    <AqDraggable position={"fixed"} originalPosition={{left: left, top: top}}
                                 style={{transform: "translateX(-50%) translateY(-50%)"}}>
                        <div className={"aq_modal_dialog"} >
                            {children}
                        </div>
                    </AqDraggable>
                </AqModalDialogDiv>
            </>
        )
    }
}
const AqModalDialogDiv=styled.div`
    position: fixed;
    z-index: calc(pow(2,31));
    left: 0;
    top:0;
    height: 100vh;
    width: 100vw;
    backdrop-filter: blur(15px) !important;
    background: transparent !important;
    border: none !important;
    user-select: none !important;
    -webkit-user-select: none !important;
    -moz-user-select: none !important;
    -ms-user-select: none !important;
    box-shadow:none !important;
    div.aq_modal_dialog,View.aq_modal_dialog{
        height: fit-content;
        width: fit-content;
        z-index: calc(pow(2,31));
        border: none !important;
        user-select: none !important;
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        box-shadow:none !important;
        backdrop-filter: none !important;
        background: transparent !important;
    }
`