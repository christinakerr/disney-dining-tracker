/** @jsxImportSource @emotion/react */

import Button from "./Button"
import { css } from '@emotion/react'

import { previousVacations } from "../utils/filterVacations"

import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {

    const userData = useSelector((state) => state.userData)
    const history = useHistory();

    function hasPastVacations(){
        if (previousVacations(userData).length > 0){
            return <Button>Previous Vacations</Button>;
        } else {
            return "";
        }
    }

    if (window.location.pathname === "/") {
        return (
            <div>
                <img src="http://via.placeholder.com/50" alt="placeholder" css={image} />
                <div css={menu}>
                    {hasPastVacations()}
                </div>
                <div css={clearfix}></div>
            </div>
        );
    } else {
        return (
            <div>
                <Button onClick={()=>history.goBack()}>{"<-"}</Button>
                <div css={menu}>
                    {hasPastVacations()}
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