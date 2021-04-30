/** @jsxImportSource @emotion/react */

import { useState } from "react";

import Form from "../components/Forms/Form"
import Button from "../components/Button";
import H1 from "../components/Text/H1";
import Input from "../components/Forms/Input";
import P from "../components/Text/P";
import TextArea from "../components/Forms/TextArea"
import Container from "../components/Container.js"
import Header from "../components/Header.js"


import { css } from '@emotion/react'

function AddFood() {

    const [drinkClass, setDrinkClass] = useState(false);
    const [dessertClass, setDessertClass] = useState(false);


    function addField(event) {
        event.preventDefault();
        const content = event.target.textContent;

        if (content === "Add Drink") {
            setDrinkClass(true);
        } else if (content === "Add Dessert") {
            setDessertClass(true);
        }
    }


    return (
        <div css={showHide}>
            <Header />
            <Container>
                <H1>Add Food</H1>
                <Form>
                    <Input type="text" label="Park" input="park" />
                    <Input type="text" label="Restaurant" input="restaurant" />
                    <Input type="text" label="Food" input="food" />
                    <br />

                    <Button onClick={addField}>Add Drink</Button>
                    <Button onClick={addField}>Add Dessert</Button>

                    <div className={drinkClass ? "show" : "hide"}>
                        <Input type="text" label="Drink" input="drink" />
                    </div>
                    <div className={dessertClass ? "show" : "hide"}>
                        <Input type="text" label="Dessert" input="dessert" />
                    </div>


                    <P label>Dining Credit</P>

                    <Input type="radio" id="snack" label="Snack" input="credit" value="snack" />
                    <Input type="radio" id="quick-service" label="Quick-Service" input="credit" value="quick-service" />
                    <Input type="radio" id="table-service" label="Table-Service" input="credit" value="table-service" />
                    <Input type="radio" id="two-credit-table-service" label="2 Credit Table-Service" input="credit" value="two-credit-table-service" />
                    <Input type="radio" id="no-plan" label="Not on Dining Plan" input="credit" value="no-plan" />

                    <Input type="file" label="Upload Photo" input="photo" />

                    <Input type="date" label="Date" />

                    <TextArea input="notes" label="Notes" />

                    <Button big>Add Food</Button>
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