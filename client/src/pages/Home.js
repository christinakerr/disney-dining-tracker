
import Button from "../components/Button";
import H1 from "../components/Text/H1"
import H2 from "../components/Text/H2";
import H4 from "../components/Text/H4";
import CreditsRemaining from "../components/CreditsRemaining";
import FoodItem from "../components/FoodItem";
import convertDate from "../utils/convertDate"

import { useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'


function Home() {

    const userData = useSelector((state) => state.userData)

    let hasCurrentVacation = false;
    const previous = userData.filter(vacation => !vacation.current)
    const current = userData.filter(vacation => vacation.current);

    const history = useHistory();
    const params = useParams();


    function sortFoods(vacation) {
        const currentSorted = [];
        const usedItems = [];
        let currentFood;
        if (vacation === "current") {
            currentFood = current[0].food;
        } else {
            currentFood = findVacation().food;
        }

        for (let i = 0; i < currentFood.length; i++) {
            const matchingItem = usedItems.find(item => item.date === currentFood[i].date)
            if (matchingItem) {
                continue;
            }
            usedItems.push(currentFood[i])
            let array = [currentFood[i]];
            for (let j = 0; j < currentFood.length; j++) {
                if (currentFood[i].date === currentFood[j].date && i !== j) {
                    array.push(currentFood[j])
                }
            }
            currentSorted.push(array);
        }
        return currentSorted.sort((a, b) => {
            return b[0].date - a[0].date;
        })
    }



    if (current.length === 1) {
        hasCurrentVacation = true;
    }


    function addVacation(event) {
        event.preventDefault();
        const path = "/add-vacation/"
        history.push(path);
    }

    function findVacation(){
        return previous.find(vacation => vacation.id.toString() === params.id);
    }


    function previousVacation(event) {
        event.preventDefault();
        const targetVacation = previous.find(vacation => vacation.name === event.target.textContent);
        const path = "/vacation/" + targetVacation.id;
        history.push(path);
    }


    if (window.location.pathname !== "/") {
        return (
            <div>
                <H1>{findVacation().name}</H1>
                {
                    sortFoods("past").map(date => {
                        return (
                            <div key={findVacation().date}>
                                {
                                    [
                                        <H4>{convertDate(date[0].date)}</H4>,
                                        date.map(item => {
                                            return <FoodItem name={item.food} credit={item.credit} location={item.restaurant} park={item.park} key={item.id} id={item.id} />
                                        })
                                    ]
                                }
                            </div>

                        )

                    })
                }
            </div>
        )
    } else if (!hasCurrentVacation) {
        return (
            <div>
                <Button big heading onClick={addVacation}>Add Disney World Vacation</Button>
                <H2 center>Previous Vacations</H2>

                {
                    previous.map(vacation => {
                        return <Button onClick={previousVacation} key={vacation.id} big>{vacation.name}</Button>
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
                    sortFoods("current").map(date => {
                        return (
                            [
                                <H4>{convertDate(date[0].date)}</H4>,
                                date.map(item => {
                                    return <FoodItem name={item.food} credit={item.credit} location={item.restaurant} park={item.park} key={item.id} id={item.id} />
                                })
                            ]
                        )

                    })
                }

                <Button big>Mark Vacation as Complete</Button>
            </div>
        );
    }
}

export default Home;