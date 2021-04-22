/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'

function H2(props){
    return (
        <h2 css={props.center?centered:""}>{props.children}</h2>
    );
}

export default H2;

const centered = css`
    text-align: center;
`