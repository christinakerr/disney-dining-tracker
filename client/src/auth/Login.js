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
import { useState } from 'react';

function Login() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [emailInput, setEmailInput] = useState()
    const [passwordInput, setPasswordInput] = useState()
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

    return (
        <div>
            <Header />
            <Container>
                <H1>Log In</H1>
                <Form noValidate id="login" onSubmit={handleSubmit}>
                    <Input type="email" label="Email" input="email" stateProp={emailInput} onChange={(e) => setEmailInput(e.target.value)} error={errors.email} />
                    <Input type="password" label="Password" input="password" stateProp={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} error={errors.password} />
                    <br />
                    <Button big type="submit" form="login" value="login" disabled={disabled}>Log In</Button>
                </Form>
                <P>Don't have an account? <Link to="/register">Register</Link></P>
            </Container>
        </div>
    )
}

export default Login;