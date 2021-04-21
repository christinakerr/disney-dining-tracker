/** @jsxImportSource @emotion/react */

import P from "../Text/P"
import { css } from '@emotion/react'

function Input(props){
    return (
        <div>
            <label for={props.input}>
                <P label type={props.type==="radio" ? "radio":""}>{props.label}</P>
            </label>
            <input css={[props.type==="radio" ? radio:""]} id={props.id || props.input} name={props.input} type={props.type} value={props.value} />
        </div>
    );
}

export default Input;

const radio = css`
    float: left;
`