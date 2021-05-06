/** @jsxImportSource @emotion/react */


import P from "../Text/P"

function TextArea(props){
    return (
        <div>
            <label htmlFor={props.input}>
                <P label>{props.label}</P>
            </label>
            <textarea id={props.input} name={props.input} rows="4" cols="25"/>
        </div>
    );
}

export default TextArea;