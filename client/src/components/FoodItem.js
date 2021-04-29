/** @jsxImportSource @emotion/react */

import H2 from "./Text/H2";
import H5 from "./Text/H5";
import H3 from "./Text/H3";


import { css } from '@emotion/react'
import { useHistory } from 'react-router-dom'


function FoodItem({ name, credit, location, park, id }) {
    const history = useHistory();

    function onClickFoodItem(event) {
        const path = "/detail/" + id

        history.push(path)
    }
    return (
        <div css={section} onClick={onClickFoodItem}>
            <div css={header}>
                <H2>{name}</H2>
                <H5>{credit}</H5>
            </div>
            <H3>{location}</H3>
            <H3>{park}</H3>
        </div>

    );
}

export default FoodItem;

const section = css`
    background-color: LightGrey;
    margin: 10px auto;
    padding: 10px;
    padding-top: 0px;
    padding-bottom: 15px;
    h3 {
        margin: 0;
    }
`

const header = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
        margin: 0;
    }
`