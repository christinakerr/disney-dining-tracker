import Form from "../components/Forms/Form"
import Button from "../components/Button";
import H1 from "../components/Text/H1";
import Input from "../components/Forms/Input";
import Container from "../components/Container.js"
import Header from "../components/Header.js"

import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';



function AddVacation() {

    const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();

        const vacation = event.target[0].value;
        const nights = event.target[1].value;

        const vacationObj = {
            "name": vacation,
            "current": true,
            "nights": nights,
            "food": [],
            "id": uuidv4()
        }
        console.log(vacationObj)
        dispatch({type: "ADDVACATION", payload: vacationObj});
    }
    return (
        <div>
            <Header />
            <Container>
                <H1>Add Vacation</H1>
                <Form id="addVacation" onSubmit={handleSubmit}>
                    <Input type="text" label="Vacation Name" input="vacation-name" />
                    <Input type="number" pattern="[0-9]*" label="Nights in a Walt Disney World Resort" input="vacation-days" />
                    <Button big type="submit" form="addVacation" value="Add Vacation">Add</Button>
                </Form>
            </Container>
        </div>
    )
}

export default AddVacation;