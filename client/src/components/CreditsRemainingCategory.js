/** @jsxImportSource @emotion/react */

import H2 from "./Text/H2"
import { css } from '@emotion/react'

function CreditsRemainingCategory(props){
    return (
        <div css={section}>
            <H2 credits>
                {props.remaining}
            </H2>
            <H2 credits>
                {props.category}
            </H2>
            
        </div>
    );
}

export default CreditsRemainingCategory;

const section = css`
    width: 33%;
    text-align: center;
    display: flex;
    flex-direction: column;
`

