/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'

function selectStyle (prop, style1, style2) {
    return prop ? style1 : style2;
}

function Button(props){
    return (
        <button css={[
            selectStyle(props.big, big, small), 
            selectStyle(props.heading, heading, "")
        ]}>{props.children}</button>
    );
}

export default Button;


const big = css`
    display: block;
    width: 100%;
    padding: 15px;
    margin: 15px auto;
    font-size: 20px;
`

const small = css`
    padding: 8px;
    margin: 5px 5px 5px 0;
    font-size: 15px;
`

const heading = css`
    margin-top: 50px;
    margin-bottom: 50px;
    font-size: 25px;
`