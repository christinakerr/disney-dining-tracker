import P from "../Text/P"

function Input(props){
    return (
        <div>
            <label for={props.input}>
                <P>{props.label}</P>
            </label>
            <input id={props.id || props.input} name={props.input} type={props.type} value={props.value} />
        </div>
    );
}

export default Input;