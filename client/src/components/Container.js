/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'

function Container(props) {
    return (
        <div css={containerStyle}>{props.children}</div>
    );
}

export default Container;

const containerStyle = css`
    margin: 0 auto;
    @media (min-width: 320px) {
        max-width: 310px;
    }
    @media (min-width: 425px) {
        max-width: 400px;
    }
    @media (min-width: 576px) {
        max-width: 540px;
    }
    @media (min-width: 768px) {
        max-width: 720px;
    }
    @media (min-width: 992px) {
        max-width: 960px;
    }
    @media (min-width: 1200px) {
        max-width: 1140px;
    }
    @media (min-width: 1400px) {
        max-width: 1320px;
    }
`