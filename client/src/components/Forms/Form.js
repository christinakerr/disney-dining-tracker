function Form(props){
    return (
        <form id={props.id} onSubmit={props.onSubmit} novalidate={props.noValidate}>{props.children}</form>
    );
}

export default Form;