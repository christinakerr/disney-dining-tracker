
import Button from "../components/Button";
import H2 from "../components/Text/H2";
import CreditsRemaining from "../components/CreditsRemaining";
import FoodItem from "../components/FoodItem";

import React, { useState } from "react";

let currentVacation = false;

function Home() {

    const [tempState] = useState(userData);

    const previous = tempState.filter(vacation => !vacation.current)

    if (!currentVacation) {
        return (
            <div>
                <Button big heading>Add Disney World Vacation</Button>
                <H2 center>Previous Vacations</H2>

                {
                    previous.map(vacation => {
                        return <Button big>{vacation.name}</Button>
                    })
                }
            </div>
        );
    } else {
        return (
            <div>
                <CreditsRemaining />
                <Button big>Add Food</Button>
                <FoodItem name="Mickey Ice Cream" credit="1 Snack" location="Stall in front of castle" park="Magic Kingdom" />
                <FoodItem name="Breakfast Buffet" credit="1 Table-Service" location="Crystal Palace" park="Magic Kingdom" />
                <Button big>Mark Vacation as Complete</Button>
            </div>
        );
    }
}

export default Home;


const userData = [
    {
        id: 1,
        name: "Spring 2020",
        current: true,
        nights: 5,
        food: [
            {
                id: 1,
                park: "Magic Kingdom",
                restaurant: "Crystal Palace",
                food: "Breakfast Buffet",
                drink: "Orange Juice",
                credit: "table-service",
                date: 20200321,
            },
            {
                id: 2,
                park: "Magic Kingdom",
                restaurant: "Pecos Bill's",
                food: "Rice Bowl",
                drink: "Lemonade",
                dessert: "Brownie",
                credit: "quick-service",
                date: 20200322,
            },
            {
                id: 3,
                park: "Magic Kingdom",
                restaurant: "Gaston's Tavern",
                food: "Cinnamon Roll",
                credit: "snack",
                date: 202003221,
            }
        ]
    },
    {
        id: 2,
        name: "Spring 2019",
        current: false,
        nights: 5,
        food: [
            {
                id: 1,
                park: "Magic Kingdom",
                restaurant: "Crystal Palace",
                food: "Breakfast Buffet",
                drink: "Orange Juice",
                credit: "table-service",
                date: 20200321,
            },
            {
                id: 2,
                park: "Magic Kingdom",
                restaurant: "Pecos Bill's",
                food: "Rice Bowl",
                drink: "Lemonade",
                dessert: "Brownie",
                credit: "quick-service",
                date: 20200322,
            },
            {
                id: 3,
                park: "Magic Kingdom",
                restaurant: "Gaston's Tavern",
                food: "Cinnamon Roll",
                credit: "snack",
                date: 202003221,
            }
        ]
    },
    {
        id: 3,
        name: "Spring 2018",
        current: false,
        nights: 5,
        food: [
            {
                id: 1,
                park: "Magic Kingdom",
                restaurant: "Crystal Palace",
                food: "Breakfast Buffet",
                drink: "Orange Juice",
                credit: "table-service",
                date: 20200321,
            },
            {
                id: 2,
                park: "Magic Kingdom",
                restaurant: "Pecos Bill's",
                food: "Rice Bowl",
                drink: "Lemonade",
                dessert: "Brownie",
                credit: "quick-service",
                date: 20200322,
            },
            {
                id: 3,
                park: "Magic Kingdom",
                restaurant: "Gaston's Tavern",
                food: "Cinnamon Roll",
                credit: "snack",
                date: 202003221,
            }
        ]
    }
]