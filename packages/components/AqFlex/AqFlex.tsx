import React from "react";



import styled from "styled-components";
export interface AqFlexProps{
    children: React.ReactNode[]|React.ReactNode,
    flexDirection?: "row" | "column"
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"
    alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline",
    style: React.CSSProperties,
}
/***

 ***/
export function AqFlex({
                           flexDirection = "row",
                           justifyContent = "flex-start",
                           alignItems = "flex-start",
                           children = null,
                        style={}
                       }: AqFlexProps) {
    return <AqFlexDiv style={{
        display: "flex",
        flexDirection: flexDirection,
        justifyContent: justifyContent,
        alignItems: alignItems,
        ...style
    }}
    >
        {children}
    </AqFlexDiv>
}
const AqFlexDiv=styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background:none !important;
    border: none !important;
    box-shadow: none !important;
    border-radius: 0 !important;
    backdrop-filter: none !important;
  `