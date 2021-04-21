/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'

function P(props){
    return (
        <p css={[props.label ? label : "", props.type ? radio : ""]}>{props.children}</p>
    );
}

export default P;

const label = css`
    margin-bottom: 5px;
`

const radio = css`
    display: inline;
`
