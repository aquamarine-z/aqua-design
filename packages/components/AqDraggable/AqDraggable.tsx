
import styles from "./AqDraggable.module.less"
import React, {createRef, RefObject, useState} from "react";

export interface AqDraggableProps {
    children: JSX.Element,
    position: "fixed" | "absolute",
    originalPosition: {
        left: number,
        top: number
    },
    style:React.CSSProperties|null,
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

    if (position === "fixed") {
        const handleDragStart = (e: React.MouseEvent) => {
            setDragging(true)
            setStartLeft(e.pageX)
            setStartTop(e.pageY)

        }
        const handleDragMove = (e: React.MouseEvent) => {
            if (dragging) {
                const nowLeft = e.pageX
                const nowTop = e.pageY


                setStartLeft(nowLeft)
                setStartTop(nowTop)
                setLeft(left + nowLeft - startLeft)
                setTop(top + nowTop - startTop)

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
            <div style={
                {
                    ...style,
                    position: "fixed",
                    left: left + "px",
                    top: top + "px"
                }

            }
                 onMouseDown={handleDragStart} onMouseOut={handleDragLeave} onMouseMove={handleDragMove}
                 onMouseUp={handleDragEnd} className={styles.aq_draggable} ref={divRef}>
                {children}
            </div>
        )
    } else {
        const handleDragStart = (e: React.MouseEvent) => {
            setDragging(true)
            setStartLeft(e.clientX)
            setStartTop(e.clientY)

        }
        const handleDragMove = (e: React.MouseEvent) => {
            if (dragging) {
                const nowLeft = e.clientX
                const nowTop = e.clientY


                setStartLeft(nowLeft)
                setStartTop(nowTop)
                setLeft(left + nowLeft - startLeft)
                setTop(top + nowTop - startTop)

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
            <div style={
                {
                    ...style,
                    position: "absolute",
                    left: left + "px",
                    top: top + "px"
                }
            } onMouseDown={handleDragStart} onMouseOut={handleDragLeave} onMouseMove={handleDragMove}
                 onMouseUp={handleDragEnd} className={styles.aq_draggable} ref={divRef}>
                {children}
            </div>
        )
    }
}

AqDraggable.defaultProps = {
    originalPosition: {
        left: 0,
        top: 0
    },
    style:null
}