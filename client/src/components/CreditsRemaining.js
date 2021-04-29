/** @jsxImportSource @emotion/react */

import CreditsRemainingCategory from "./CreditsRemainingCategory"
import { css } from '@emotion/react'

import { useSelector } from 'react-redux'

function CreditsRemaining(){

    const state = useSelector((state) => state)

    const current = userData.filter(vacation => vacation.current);

    if (current.length === 1){

        let snackCredits = current[0].nights * 2;
        let quickServiceCredits = current[0].nights;
        let tableServiceCredits = current[0].nights;


        current[0].food.forEach(item =>{
            switch(item.credit){
                case "1 Snack":
                    snackCredits -= 1;
                    break;
                case "1 Quick-Service":
                    quickServiceCredits -= 1;
                    break;
                case "1 Table-Service":
                    tableServiceCredits -= 1;
                    break;
                case "2 Table-Service":
                    tableServiceCredits -= 2;
                    break;
                default:
                    break;
            }
        })

        return (
        <div css={container}>
            <CreditsRemainingCategory category="Snack" remaining={snackCredits}/>
            <CreditsRemainingCategory category="Quick Service" remaining={quickServiceCredits}/>
            <CreditsRemainingCategory category="Table Service" remaining={tableServiceCredits}/>
        </div>
    );
    } else {
        return (
            <div></div>
        )
    }
    
}

export default CreditsRemaining;

const container = css`
    margin-top: 20px;
    padding: 15px;
    background-color: LightGrey;
    display: flex;
`

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