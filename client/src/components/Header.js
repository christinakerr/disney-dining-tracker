/** @jsxImportSource @emotion/react */

import Button from "./Button"
import { css } from '@emotion/react'

// import { currentVacation } from "../utils/filterVacations"

import { useHistory } from 'react-router-dom'

// import { useSelector } from 'react-redux'

function Header() {

    const history = useHistory();

    // const userData = useSelector((state) => state.userData)

    // const current = currentVacation(userData);

    if (window.location.pathname === "/") {
        return (
            <div>
                <img src="http://via.placeholder.com/50" alt="placeholder" css={image} />
                <div css={menu}>
                    <Button>Past</Button>
                </div>
                <div css={clearfix}></div>
            </div>
        );
    } else {
        return (
            <div>
                <Button onClick={()=>history.goBack()}>{"<-"}</Button>
                <div css={menu}>
                    <Button>Past</Button>
                </div>
                <div css={clearfix}></div>
            </div>
        );
    }

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