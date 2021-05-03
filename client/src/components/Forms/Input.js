/** @jsxImportSource @emotion/react */

import P from "../Text/P"
import { css } from '@emotion/react'



function Input({  input, type, label, id, value, pattern, checked}){
    return (
        <div>
            <label for={input}>
                <P label type={type==="radio" ? "radio":""}>{label}</P>
            </label>
            <input css={[type==="radio" ? radio:""]} id={id || input} name={input} type={type} value={value} pattern={pattern} accept={type === "file" ? "image/*": ""} multiple={type === "file" ? "multiple" : ""} />
        </div>
    );
}

export default Input;

const radio = css`
    float: left;
`
