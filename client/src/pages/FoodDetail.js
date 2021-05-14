/** @jsxImportSource @emotion/react */

import H1 from "../components/Text/H1";
import H2 from "../components/Text/H2";
import H3 from "../components/Text/H3";
import H4 from "../components/Text/H4";
import P from "../components/Text/P";
import Container from "../components/Container.js"
import Header from "../components/Header.js"

import convertDate from "../utils/convertDate"

import { css } from '@emotion/react'
import { useSelector } from 'react-redux'
import { useParams } from "react-router-dom";


function FoodDetail() {
    const userData = useSelector((state) => state.rootReducer.userData)

    const { id } = useParams();

    let foodItem;

    for (let i = 0; i < userData.length; i++) {
        const foodArray = userData[i].food

        for (let j = 0; j < foodArray.length; j++) {

            if (foodArray[j].id.toString() === id) {
                foodItem = foodArray[j];
                break;
            }
        }
    }

    function foodPhoto() {
        if (foodItem.photo) {
            return <img src={foodItem.photo} alt="" />
        }
    }

    function drink() {
        if (foodItem.drink) {
            return <H3>{"Drink: " + foodItem.drink}</H3>
        }
    }
    function dessert() {
        if (foodItem.dessert) {
            return <H3>{"Dessert: " + foodItem.dessert}</H3>
        }
    }

    return (
        <div>
            <Header />
            <Container>
                <div css={pageStyles} >
                    <H1>{foodItem.food}</H1>
                    {/* me first */}
                    <H4 className="date">{convertDate(foodItem.date)}</H4>
                    <H2>{foodItem.credit}</H2>
                    <hr />
                    {drink()}
                    {dessert()}
                    <H3>{foodItem.restaurant + ", " + foodItem.park}</H3>
                    {foodPhoto()}
                    <P>{foodItem.notes}</P>
                </div>
            </Container>
        </div>
    );
}

export default FoodDetail;

const pageStyles = css`
    img {
        width: 100%;
        max-width: 350px;
        margin-top: 10px;
    }
    h1{
        margin-bottom: 10px;
    }
    h4, h2, h3 {
        margin: 3px;
    }
    .date {
        float: right;
    }
`