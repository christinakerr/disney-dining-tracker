/** @jsxImportSource @emotion/react */

import { useState } from "react";
import {useDispatch} from 'react-redux';

import Form from "../components/Forms/Form"
import Button from "../components/Button";
import H1 from "../components/Text/H1";
import Input from "../components/Forms/Input";
import P from "../components/Text/P";
import TextArea from "../components/Forms/TextArea"
import Container from "../components/Container.js"
import Header from "../components/Header.js"

import { css } from '@emotion/react'
import {v4 as uuidv4} from 'uuid';
import { useHistory } from 'react-router-dom'

function AddFood() {

    const [parkInput, setParkInput] = useState();
    const [restaurantInput, setRestaurantInput] = useState();
    const [foodInput, setFoodInput] = useState();
    const [drinkInput, setDrinkInput] = useState();
    const [dessertInput, setDessertInput] = useState();
    const [creditInput, setCreditInput] = useState();
    const [photoInput, setPhotoInput] = useState();
    const [dateInput, setDateInput] = useState();
    const [noteInput, setNoteInput] = useState();

    const [drinkClass, setDrinkClass] = useState(false);
    const [dessertClass, setDessertClass] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();

    let disabled = false;

    if (!parkInput || !restaurantInput || !foodInput || !dateInput || !creditInput){
        disabled = true;
    }

    function addField(event) {
        event.preventDefault()
        const content = event.target.textContent;

        if (content === "Add Drink") {
            setDrinkClass(true);
        } else if (content === "Add Dessert") {
            setDessertClass(true);
        }
    }

    function handleSubmit(event){
        event.preventDefault();

        const credit = [event.target[7], event.target[8], event.target[9], event.target[10], event.target[11]].filter(selection => selection.checked)[0].value;

        const park = event.target[0].value;
        const restaurant = event.target[1].value
        const food = event.target[2].value;
        const drink = event.target[5].value;
        const dessert = event.target[6].value;
        // const photo = event.target[12].value;
        const date = event.target[13].value.replace(/(-)/g, "");
        const note = event.target[14].value;


        const foodObj = {
            "park": park,
            "restaurant": restaurant,
            "food": food,
            "drink": drink,
            "dessert": dessert,
            "credit": credit,
            "date": date,
            "note": note,
            "id": uuidv4()
        }

        for (let prop in foodObj){
            if (foodObj.hasOwnProperty(prop) && foodObj[prop] === ""){
                delete foodObj[prop];
            }
        }
        dispatch({type: "ADDFOOD", payload: foodObj})
        history.push("/")
    }


    return (
        <div css={showHide}>
            <Header />
            <Container>
                <H1>Add Food</H1>
                <Form id="addFood" onSubmit={handleSubmit}>
                    <Input type="text" label="Park *" input="park" stateProp={parkInput} onChange={(e) => setParkInput(e.target.value)} />
                    <Input type="text" label="Restaurant *" input="restaurant" stateProp={restaurantInput} onChange={(e) => setRestaurantInput(e.target.value)}/>
                    <Input type="text" label="Food *" input="food" stateProp={foodInput} onChange={(e) => setFoodInput(e.target.value)} />
                    <br />

                    <Button onClick={addField}>Add Drink</Button>
                    <Button onClick={addField}>Add Dessert</Button>

                    <div className={drinkClass ? "show" : "hide"}>
                        <Input type="text" label="Drink" input="drink" stateProp={drinkInput} onChange={(e) => setDrinkInput(e.target.value)} />
                    </div>
                    <div className={dessertClass ? "show" : "hide"}>
                        <Input type="text" label="Dessert" input="dessert" stateProp={dessertInput} onChange={(e) => setDessertInput(e.target.value)} />
                    </div>


                    <P label>Dining Credit *</P>

                    <Input type="radio" id="snack" label="Snack" input="credit" value="1 Snack" onClick={(e) => setCreditInput(e.target.value)}  />
                    <Input type="radio" id="quick-service" label="Quick-Service" input="credit" value="1 Quick-Service" onClick={(e) => setCreditInput(e.target.value)} />
                    <Input type="radio" id="table-service" label="Table-Service" input="credit" value="1 Table-Service" onClick={(e) => setCreditInput(e.target.value)} />
                    <Input type="radio" id="two-credit-table-service" label="2 Credit Table-Service" input="credit" value="2 Table-Service" onClick={(e) => setCreditInput(e.target.value)} />
                    <Input type="radio" id="no-plan" label="Not on Dining Plan" input="credit" value="Not on Plan" onClick={(e) => setCreditInput(e.target.value)} />

                    <Input type="file" label="Upload Photo" input="photo" stateProp={photoInput} onChange={(e) => setPhotoInput(e.target.value)} />

                    <Input type="date" label="Date *" stateProp={dateInput} onChange={(e) => setDateInput(e.target.value)} />

                    <TextArea input="notes" label="Notes" value={noteInput} onChange={(e) => setNoteInput(e.target.value)} />

                    <Button big type="submit" form="addFood" disabled={disabled} value="Add Food" >Add Food</Button>
                </Form>
            </Container>
        </div>
    )
}

export default AddFood;

const showHide = css`
    .hide {
        display: none;
    }

    .show {
        display: block;
    }
`