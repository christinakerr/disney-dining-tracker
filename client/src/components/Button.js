/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'

function Button(props){
    return (
        <button css={[props.big ? big : small]}>{props.children}</button>
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