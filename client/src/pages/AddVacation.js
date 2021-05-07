import Form from "../components/Forms/Form"
import Button from "../components/Button";
import H1 from "../components/Text/H1";
import Input from "../components/Forms/Input";
import Container from "../components/Container.js"
import Header from "../components/Header.js"

import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { useState } from 'react';

function AddVacation() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [nameInput, setNameInput] = useState()
    const [nightsInput, setNightsInput] = useState()

    let disabled = false;
    if (!nameInput || !nightsInput){
        disabled = true;
    }

    function handleSubmit(event) {
        event.preventDefault();

        const vacationObj = {
            "name": nameInput,
            "current": true,
            "nights": nightsInput,
            "food": [],
            "id": uuidv4()
        }
        dispatch({type: "ADDVACATION", payload: vacationObj});
        history.push("/")
    }

    return (
        <div>
            <Header />
            <Container>
                <H1>Add Vacation</H1>
                <Form id="addVacation" onSubmit={handleSubmit}>
                    <Input type="text" label="Vacation Name *" input="vacation-name" stateProp={nameInput} onChange={(e) => setNameInput(e.target.value)} />
                    <Input type="number" pattern="[0-9]*" label="Nights in a Walt Disney World Resort Hotel *" input="vacation-days" stateProp={nightsInput} onChange={(e) => setNightsInput(e.target.value)} />
                    <br />
                    <Button big type="submit" form="addVacation" value="Add Vacation" disabled={disabled}>Add Vacation</Button>
                </Form>
            </Container>
        </div>
    )
}

export default AddVacation;