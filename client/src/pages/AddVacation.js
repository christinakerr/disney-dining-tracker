import Form from "../components/Forms/Form"
import Button from "../components/Button";
import H1 from "../components/Text/H1";
import Input from "../components/Forms/Input";



function AddVacation(){
    return(
        <div>
            <H1>Add Vacation</H1>
            <Form>
                <Input type="text" label="Name" input="vacation-name"/>
                <Input type="number" label="Nights in a Walt Disney World Resort" input="vacation-days"/>
                <Button big>Add</Button>
            </Form>
        </div>
    )
}

export default AddVacation;