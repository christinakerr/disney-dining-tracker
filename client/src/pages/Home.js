
import Button from "../components/Button";
import H2 from "../components/Text/H2";
import CreditsRemaining from "../components/CreditsRemaining";
import FoodItem from "../components/FoodItem";

import React, { useState } from "react";



function Home() {

    const [tempState] = useState(userData);
    let hasCurrentVacation = false;
    const previous = tempState.filter(vacation => !vacation.current)
    const current = tempState.filter(vacation => vacation.current);



    if (current.length === 1) {
        hasCurrentVacation = true;
    }

    const currentSorted = [];
    const usedItems = [];

    const currentFood = current[0].food;


    for (let i = 0; i < currentFood.length; i++){

        const matchingItem = usedItems.find(item => item.date === currentFood[i].date)

        if (matchingItem) {
            continue;
        }
        usedItems.push(currentFood[i])

        let array = [currentFood[i]];
        for (let j = 0; j < currentFood.length; j++){
            if (currentFood[i].date === currentFood[j].date && i !== j){
                array.push(currentFood[j])
            }
        }
        currentSorted.push(array);
    }

    const doubleSorted = currentSorted.sort((a, b) => {
        return b[0].date - a[0].date;
    })

    console.log(doubleSorted);

    if (!hasCurrentVacation) {
        return (
            <div>
                <Button big heading>Add Disney World Vacation</Button>
                <H2 center>Previous Vacations</H2>

                {
                    previous.map(vacation => {
                        return <Button key={vacation.id} big>{vacation.name}</Button>
                    })
                }
            </div>
        );
    } else {
        return (
            <div>
                <CreditsRemaining />
                <Button big>Add Food</Button>

                {
                    current[0].food.map(item => {
                        return <FoodItem name={item.food} credit={item.credit} location={item.restaurant} park={item.park} key={item.id} />
                    })
                }

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
                credit: "1 Table-Service",
                date: 20200320,
            },
            {
                id: 2,
                park: "Magic Kingdom",
                restaurant: "Pecos Bill's",
                food: "Rice Bowl",
                drink: "Lemonade",
                dessert: "Brownie",
                credit: "1 Quick-Service",
                date: 20200320,
            },
            {
                id: 3,
                park: "Magic Kingdom",
                restaurant: "Gaston's Tavern",
                food: "Cinnamon Roll",
                credit: "1 Snack",
                date: 20200320,
            },
            {
                id: 4,
                park: "Epcot",
                restaurant: "Garden Grill",
                food: "Tofu Wrap",
                drink: "Milk",
                credit: "1 Quick-Service",
                date: 20200321,
            },
            {
                id: 5,
                park: "Epcot",
                restaurant: "China Stall",
                food: "Bubble Tea",
                credit: "1 Snack",
                date: 20200321,
            },
            {
                id: 6,
                park: "Epcot",
                restaurant: "Via Napoli",
                food: "Margherita Pizza",
                drink: "Cocktail",
                dessert: "Cannolis",
                credit: "1 Table-Service",
                date: 20200321,
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
                credit: "1 Table-Service",
                date: 20200321,
            },
            {
                id: 2,
                park: "Magic Kingdom",
                restaurant: "Pecos Bill's",
                food: "Rice Bowl",
                drink: "Lemonade",
                dessert: "Brownie",
                credit: "1 Quick-Service",
                date: 20200322,
            },
            {
                id: 3,
                park: "Magic Kingdom",
                restaurant: "Gaston's Tavern",
                food: "Cinnamon Roll",
                credit: "1 Snack",
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
                credit: "1 Table-Service",
                date: 20200321,
            },
            {
                id: 2,
                park: "Magic Kingdom",
                restaurant: "Pecos Bill's",
                food: "Rice Bowl",
                drink: "Lemonade",
                dessert: "Brownie",
                credit: "1 Quick-Service",
                date: 20200322,
            },
            {
                id: 3,
                park: "Magic Kingdom",
                restaurant: "Gaston's Tavern",
                food: "Cinnamon Roll",
                credit: "1 Snack",
                date: 202003221,
            }
        ]
    }
]