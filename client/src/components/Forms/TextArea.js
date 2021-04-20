import P from "../Text/P"

function TextArea(props){
    return (
        <div>
            <label for={props.input}>
                <P>{props.label}</P>
            </label>
            <textarea id={props.input} name={props.input} rows="4" cols="30"/>
        </div>
    );
}

export default TextArea;