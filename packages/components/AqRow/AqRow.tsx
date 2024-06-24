import React from "react";
import styled from "styled-components";
export interface AqRowProps{
    children?:React.ReactNode[]|React.ReactNode
}
export function AqRow({children=null}:AqRowProps)
{
    return <AqRowDiv>{children}</AqRowDiv>
}
const AqRowDiv=styled.div`
    display: flex;
    width: 100%;
    height: fit-content;
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