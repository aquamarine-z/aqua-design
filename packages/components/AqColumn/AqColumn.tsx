import React from "react";

import styled from "styled-components";
export interface AqColumnProps{
    children?: React.ReactNode[] | React.ReactNode | null,
}
/*
* @description 布局为Flex的Column
* css属性:
*   display: flex;
*   flex-direction: column;
*   width: 100%;
*   height:fit-content;
*   padding: 0;
*   margin: 0;
*   align-items: center;
* */
export function AqColumn({
                             children = null
                         }: AqColumnProps)
{
    return <AqColumnDiv>{children}</AqColumnDiv>
}
const AqColumnDiv=styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height:fit-content;
    padding: 0;
    margin: 0;
    align-items: center;
    background:none !important;
    border: none !important;
    box-shadow: none !important;
    border-radius: 0 !important;
    backdrop-filter: none !important;
  `