/** @jsxImportSource @emotion/react */

import CreditsRemainingCategory from "./CreditsRemainingCategory"
import { css } from '@emotion/react'

import { useSelector } from 'react-redux'

function CreditsRemaining(){

    const userData = useSelector((state) => state.userData)

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