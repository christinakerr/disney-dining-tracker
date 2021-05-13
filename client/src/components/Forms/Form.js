function Form(props){
    return (
        <form id={props.id} onSubmit={props.onSubmit}>{props.children} noValidate={props.noValidate}</form>
    );
}

export default Form;