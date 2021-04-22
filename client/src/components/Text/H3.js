/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'

function H3(props){
    return (
        <h3 css={styles}>{props.children}</h3>
    );
}

export default H3;

const styles = css`
    margin: 0;
`