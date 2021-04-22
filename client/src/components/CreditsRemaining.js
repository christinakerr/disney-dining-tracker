/** @jsxImportSource @emotion/react */

import CreditsRemainingCategory from "./CreditsRemainingCategory"
import { css } from '@emotion/react'

function CreditsRemaining(){
    return (
        <div css={container}>
            <CreditsRemainingCategory category="Snack" remaining="15"/>
            <CreditsRemainingCategory category="Quick Service" remaining="5"/>
            <CreditsRemainingCategory category="Table Service" remaining="5"/>
        </div>
    );
}

export default CreditsRemaining;

const container = css`
    margin-top: 20px;
    padding: 15px;
    background-color: LightGrey;
    display: flex;
`