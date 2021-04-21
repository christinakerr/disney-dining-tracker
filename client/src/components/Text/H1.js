/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'

function H1(props){
    return (
        <h1 css={h1Style}>{props.children}</h1>
    );
}

export default H1;

const h1Style = css`
    text-align: center;
`