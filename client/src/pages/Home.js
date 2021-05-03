import Button from "../components/Button";
import H1 from "../components/Text/H1"
import H2 from "../components/Text/H2";
import H4 from "../components/Text/H4";
import CreditsRemaining from "../components/CreditsRemaining";
import FoodItem from "../components/FoodItem";
import Container from "../components/Container.js"
import Header from "../components/Header.js"

import convertDate from "../utils/convertDate"
import { previousVacations, currentVacation } from "../utils/filterVacations"

import { useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'


function Home() {

    const userData = useSelector((state) => state.userData)

    let hasCurrentVacation = false;
    const previous = previousVacations(userData)
    const current = currentVacation(userData);

    const history = useHistory();

    const params = useParams();

    function sortFoods(vacation) {
        const sorted = [];
        const usedItems = [];
        let foodArray;
        if (vacation === "current") {
            foodArray = current[0].food;
        } else {
            foodArray = findVacation().food;
        }

        for (let i = 0; i < foodArray.length; i++) {
            const matchingItem = usedItems.find(item => item.date === foodArray[i].date)
            if (matchingItem) {
                continue;
            }
            usedItems.push(foodArray[i])
            let array = [foodArray[i]];
            for (let j = 0; j < foodArray.length; j++) {
                if (foodArray[i].date === foodArray[j].date && i !== j) {
                    array.push(foodArray[j])
                }
            }
            sorted.push(array);
        }
        return sorted.sort((a, b) => {
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

    function findVacation() {
        return previous.find(vacation => vacation.id.toString() === params.id);
    }


    function previousVacation(event) {
        event.preventDefault();
        const targetVacation = previous.find(vacation => vacation.name === event.target.textContent);
        const path = "/vacation/" + targetVacation.id;
        history.push(path);
    }

    function addFood(event){
        event.preventDefault();
        const path = "/add-food/";
        history.push(path);
    }


    if (window.location.pathname !== "/") {
        return (
            <div>
                <Header />
                <Container>
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
                </Container>
            </div>
        )
    } else if (!hasCurrentVacation) {
        return (
            <div>
                <Header />
                <Container>
                    <Button big heading onClick={addVacation}>Add Disney World Vacation</Button>
                    <H2 center>Previous Vacations</H2>

                    {
                        previous.map(vacation => {
                            return <Button onClick={previousVacation} key={vacation.id} big>{vacation.name}</Button>
                        })
                    }
                </Container>
            </div>
        );
    } else {
        return (
            <div>
                <Header />
                <Container>
                    <CreditsRemaining />
                    <Button big onClick={addFood}>Add Food</Button>

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
                </Container>
            </div>
        );
    }
}

export default Home;