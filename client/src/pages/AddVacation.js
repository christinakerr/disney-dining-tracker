import Form from "../components/Forms/Form"
import Button from "../components/Button";
import H1 from "../components/Text/H1";
import Input from "../components/Forms/Input";
import Container from "../components/Container.js"
import Header from "../components/Header.js"


function AddVacation() {
    return (
        <div>
            <Header />
            <Container>
                <H1>Add Vacation</H1>
                <Form>
                    <Input type="text" label="Vacation Name" input="vacation-name" />
                    <Input type="number" pattern="[0-9]*" label="Nights in a Walt Disney World Resort" input="vacation-days" />
                    <Button big>Add</Button>
                </Form>
            </Container>
        </div>
    )
}

export default AddVacation;