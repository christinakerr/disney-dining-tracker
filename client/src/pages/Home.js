
import Button from "../components/Button";
import H2 from "../components/Text/H2";
import H4 from "../components/Text/H4";
import CreditsRemaining from "../components/CreditsRemaining";
import FoodItem from "../components/FoodItem";

import { useSelector } from 'react-redux'


function Home() {

    const userData = useSelector((state) => state.userData)

    let hasCurrentVacation = false;
    const previous = userData.filter(vacation => !vacation.current)
    const current = userData.filter(vacation => vacation.current);

    if (current.length === 1) {
        hasCurrentVacation = true;
    }

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

    const doubleSorted = currentSorted.sort((a, b) => {
        return b[0].date - a[0].date;
    })

    function convertDate(date) {

        const day = date.toString().slice(6);
        const month = date.toString().slice(4, 6);

        let monthWord;
        switch (month) {
            case "01":
                monthWord = "January "
                break;
            case "02":
                monthWord = "February "
                break;
            case "03":
                monthWord = "March "
                break;
            case "04":
                monthWord = "April "
                break;
            case "05":
                monthWord = "May "
                break;
            case "06":
                monthWord = "June "
                break;
            case "07":
                monthWord = "July "
                break;
            case "08":
                monthWord = "August "
                break;
            case "09":
                monthWord = "September "
                break;
            case "10":
                monthWord = "October "
                break;
            case "11":
                monthWord = "November "
                break;
            case "12":
                monthWord = "December "
                break;
            default:
                break;
        }
        return monthWord + day;
    }


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
                    doubleSorted.map(date => {
                        console.log(date);
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