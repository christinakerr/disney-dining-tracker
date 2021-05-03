function Form(props){
    return (
        <form id={props.id} onSubmit={props.onSubmit}>{props.children}</form>
    );
}

export default Form;