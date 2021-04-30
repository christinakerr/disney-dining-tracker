
import Button from "../components/Button";
import H2 from "../components/Text/H2";
import H4 from "../components/Text/H4";
import CreditsRemaining from "../components/CreditsRemaining";
import FoodItem from "../components/FoodItem";
import convertDate from "../utils/convertDate"

import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'


function Home() {

    const userData = useSelector((state) => state.userData)

    let hasCurrentVacation = false;
    const previous = userData.filter(vacation => !vacation.current)
    const current = userData.filter(vacation => vacation.current);

    let doubleSorted;

    const history = useHistory();

    if (current.length === 1) {
        hasCurrentVacation = true;

        const currentSorted = [];
        const usedItems = [];

        const currentFood = current[0].food;

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

        doubleSorted = currentSorted.sort((a, b) => {
            return b[0].date - a[0].date;
        })
    }

function addVacation(event) {
    event.preventDefault();
    const path = "/add-vacation/"
    history.push(path);

}




    if (!hasCurrentVacation) {
        return (
            <div>
                <Button big heading onClick={addVacation}>Add Disney World Vacation</Button>
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
                    doubleSorted.map(date => {
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