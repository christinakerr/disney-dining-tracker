import Form from "../components/Forms/Form"
import Button from "../components/Button";
import H1 from "../components/Text/H1";
import Input from "../components/Forms/Input";
import Container from "../components/Container.js"
import Header from "../components/Header.js"
import P from "../components/Text/P"

import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { registerUser } from "../actions/authActions";
import classnames from "classnames";
import {error, auth} from "../reducers/rootReducer";

function Register() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [nameInput, setNameInput] = useState()
    const [emailInput, setEmailInput] = useState()
    const [passwordInput, setPasswordInput] = useState()
    const [password2Input, setPassword2Input] = useState()
    const [errors, setErrors] = useState({})

    let disabled = false;
    // if (!nameInput || !nightsInput){
    //     disabled = true;
    // }

    function handleSubmit(event) {
        event.preventDefault();

        const vacationObj = {
            // "name": nameInput,
            // "current": true,
            // "nights": nightsInput,
            // "food": [],
            // "id": uuidv4()
        }
        dispatch({type: "ADDVACATION", payload: vacationObj});
        history.push("/")
    }

    useEffect(() => {
        if (errors) {
            setErrors(errors);
        }
    }, [nameInput, emailInput, passwordInput, password2Input, errors])

    // registerUser(newUser, history);

    return (
        <div>
            <Header />
            <Container>
                <H1>Register</H1>
                <Form noValidate id="register" onSubmit={handleSubmit}>
                    <Input type="text" label="Name" input="name" stateProp={nameInput} onChange={(e) => setNameInput(e.target.value)} error={errors.name} className={classnames("", {invalid: errors.name})} errorMsg={<span className="red-text">{errors.name}</span>} />
                    <Input type="email" label="Email" input="email" stateProp={emailInput} onChange={(e) => setEmailInput(e.target.value)} error={errors.email} className={classnames("", {invalid: errors.email})} errorMsg={<span className="red-text">{errors.email}</span>} />
                    <Input type="password" label="Password" input="password" stateProp={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} error={errors.password} errorMsg={<span className="red-text">{errors.password}</span>} className={classnames("", {invalid: errors.password})}/>
                    <Input type="password" label="Confirm Password" input="password2" stateProp={password2Input} onChange={(e) => setPassword2Input(e.target.value)} error={errors.password2} errorMsg={<span className="red-text">{errors.password2}</span>} className={classnames("", {invalid: errors.password2})} />
                    <br />
                    <Button big type="submit" form="register" value="register" disabled={disabled}>Register</Button>
                </Form>
                <P>Already have an account? <Link to="/login">Log in</Link></P>
            </Container>
        </div>
    )
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};


export default Register;