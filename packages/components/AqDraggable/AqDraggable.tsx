

import React, {createRef, RefObject, useState} from "react";
import styled from "styled-components";

export interface AqDraggableProps {
    children: JSX.Element,
    position: "fixed" | "absolute",
    originalPosition: {
        left: number,
        top: number
    },
    style?:React.CSSProperties,
}

export function AqDraggable({
                                children,
                                position = "fixed",
                                originalPosition = {left: 0, top: 0},
                                style={},
                            }: AqDraggableProps) {
    const divRef: RefObject<HTMLDivElement> = createRef()
    const [left, setLeft] = useState(originalPosition.left)
    const [top, setTop] = useState(originalPosition.top)
    const [dragging, setDragging] = useState(false)
    const [startLeft, setStartLeft] = useState(0)
    const [startTop, setStartTop] = useState(0)
    let getPosition:(e:React.MouseEvent)=>([number,number])
    if(position==="fixed"){
        getPosition=(e:React.MouseEvent)=>{
            return [e.clientX,e.clientY]
        }
    }else if(position==="absolute"){
        getPosition=(e:React.MouseEvent)=>{
            return [e.pageX, e.pageY]
        }
    }
    const handleDragStart = (e: React.MouseEvent) => {
        setDragging(true)
        const [x,y]=getPosition(e)
        setStartLeft(x)
        setStartTop(y)

    }
    const handleDragMove = (e: React.MouseEvent) => {
        if (dragging) {
            const [nowLeft,nowTop]=getPosition(e)
            const setState=()=>{
                setStartLeft(nowLeft)
                setStartTop(nowTop)
                setLeft(left + nowLeft - startLeft)
                setTop(top + nowTop - startTop)
            }
            requestAnimationFrame(setState)

        }
    }
    const handleDragEnd = () => {
        setDragging(false)
        setStartLeft(0)
        setStartTop(0)
    }

    const handleDragLeave = () => {
        handleDragEnd()
    }

    return (
        <AqDraggableDiv style={
            {
                ...style,
                position: position,
                left: left + "px",
                top: top + "px"
            }

        }
             onMouseDown={handleDragStart} onMouseOut={handleDragLeave} onMouseMove={handleDragMove}
             onMouseUp={handleDragEnd} ref={divRef}>
            {children}
        </AqDraggableDiv>
    )
}

AqDraggable.defaultProps = {
    originalPosition: {
        left: 0,
        top: 0
    },
    style:null
}
const AqDraggableDiv=styled.div`
    padding: 0;
    margin: 0;
    background-color: transparent !important;
    transition: left 0s ,top 0s !important;
`