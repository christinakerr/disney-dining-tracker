/** @jsxImportSource @emotion/react */

import Button from "./Button"
import { css } from '@emotion/react'

function Header(){
    return (
        <div>
            <img src="http://via.placeholder.com/50" alt="placeholder" css={image} />
            <div css={menu}>
            <Button>Past</Button>
            <Button>Current</Button>
            <Button>+</Button>
            </div>
            <div css={clearfix}></div>
        </div>
    );
}

export default Header;

const image = css`
    float: left;
`

const menu = css`
    float: right;
`

const clearfix = css`
    content: "";
    clear: both;
    display: table;
`