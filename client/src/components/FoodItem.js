/** @jsxImportSource @emotion/react */

import H2 from "./Text/H2";
import H5 from "./Text/H5";
import H3 from "./Text/H3";

import { css } from '@emotion/react'

function FoodItem(props){
    return (
        <div css={section}>
            <div css={header}>
                <H2>{props.name}</H2>
                <H5>{props.credit}</H5>
            </div>
            <H3>{props.location}</H3>
            <H3>{props.park}</H3>
        </div>
    );
}

export default FoodItem;

const section = css`
    background-color: LightGrey;
    margin: 10px auto;
    padding: 10px;
    padding-bottom: 15px;
`

const header = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
`