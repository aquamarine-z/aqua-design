import React from "react";
import styled from "styled-components";
export interface AqRowProps{
    children?:React.ReactNode[]|React.ReactNode,
    style?:React.CSSProperties
}
export function AqRow({children=null,style={}}:AqRowProps)
{

    return <AqRowDiv style={{...style}}>{children}</AqRowDiv>
}
const AqRowDiv=styled.div`
    display: flex;
    width: fit-content;
    height: 100%;
    flex-direction: row;
    padding: 0;
    margin: 0;
    align-items: center;
    background:none !important;
    border: none !important;
    box-shadow: none !important;
    border-radius: 0 !important;
    backdrop-filter: none !important;
`