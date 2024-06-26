

import React, {createRef, RefObject, useState} from "react";
import styled from "styled-components";

export interface AqDraggableProps {
    children?: JSX.Element[]|JSX.Element,
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
    const [touchId,setTouchId]=useState(0)
    let getPositionMouse:(e:React.MouseEvent)=>([number,number])
    if(position==="fixed"){
        getPositionMouse=(e:React.MouseEvent)=>{
            return [e.clientX,e.clientY]
        }
    }else if(position==="absolute"){
        getPositionMouse=(e:React.MouseEvent)=>{
            return [e.pageX, e.pageY]
        }
    }
    const handleDragStart = (e: React.MouseEvent) => {
        setDragging(true)
        const [x,y]=getPositionMouse(e)
        setStartLeft(x)
        setStartTop(y)

    }
    const handleDragMove = (e: React.MouseEvent) => {
        if (dragging) {
            //e.preventDefault()
            const [nowLeft,nowTop]=getPositionMouse(e)
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
    const handleDragLeave = (e:React.MouseEvent) => {
        const [x,y]=getPositionMouse(e)
        const bounds=divRef.current!.getBoundingClientRect()!
        if(bounds.left<=x&&bounds.top<=y&&bounds.right>=x&&bounds.bottom>=y){
            return
        }
        handleDragEnd()
    }
    let getPositionTouch:(e:React.TouchEvent)=>[number,number]
    if(position==="fixed"){
        getPositionTouch=(e:React.TouchEvent)=>{
            return [e.touches[touchId].clientX,e.touches[touchId].clientY]
        }
    }else if(position==="absolute"){
        getPositionTouch=(e:React.TouchEvent)=>{
            return [e.touches[touchId].pageX, e.touches[touchId].pageY]
        }
    }
    const handleTouchDown=(e:React.TouchEvent)=>{
        setTouchId(e.touches.length-1)
        setDragging(true)
        const [x,y]=getPositionTouch(e)
        setStartLeft(x)
        setStartTop(y)
    }
    const handleTouchMove=(e:React.TouchEvent)=>{
        if (dragging) {
            //e.preventDefault()
            const [nowLeft,nowTop]=getPositionTouch(e)
            const setState=()=>{
                setStartLeft(nowLeft)
                setStartTop(nowTop)
                setLeft(left + nowLeft - startLeft)
                setTop(top + nowTop - startTop)
            }
            requestAnimationFrame(setState)
        }
    }
    const handleTouchEnd=()=>{
        /*const [x,y]=getPositionTouch(e)
        const bounds=divRef.current!.getBoundingClientRect()!
        if(bounds.left<=x&&bounds.top<=y&&bounds.right>=x&&bounds.bottom>=y){
            return
        }*/
        setDragging(false)
        setStartLeft(0)
        setStartTop(0)
        setTouchId(0)
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
                        onMouseDown={handleDragStart}
                        onMouseOut={handleDragLeave}
                        onMouseMove={handleDragMove}
                        onMouseUp={handleDragEnd}
                        onTouchStart={handleTouchDown}
                        onTouchEnd={handleTouchEnd}
                        onTouchMove={handleTouchMove}
                        ref={divRef}>
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