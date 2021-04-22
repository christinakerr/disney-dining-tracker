/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'

function H2(props){
    return (
        <h2 css={[props.credits? credits:""]}>{props.children}</h2>
    );
}

export default H2;

const credits = css`
    margin: 1px;
`
