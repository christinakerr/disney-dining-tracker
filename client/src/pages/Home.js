
import Button from "../components/Button";
import H2 from "../components/Text/H2";
import CreditsRemaining from "../components/CreditsRemaining";
import FoodItem from "../components/FoodItem";

let currentVacation = false;

function Home(){

    if(!currentVacation){
        return (
            <div>
                <Button big heading>Add Disney World Vacation</Button>
                <H2 center>Previous Vacations</H2>
                <Button big>Spring 2020</Button>
                <Button big>Spring 2019</Button>
                <Button big>Spring 2018</Button>
                <Button big>Winter 2017</Button>
            </div>
        );
    } else {
        return (
            <div>
                <CreditsRemaining />
                <Button big>Add Food</Button>
                <FoodItem name="Mickey Ice Cream" credit="1 Snack" location="Stall in front of castle" park="Magic Kingdom"/>
                <FoodItem name="Breakfast Buffet" credit="1 Table-Service" location="Crystal Palace" park="Magic Kingdom"/>
                <Button big>Mark Vacation as Complete</Button>
            </div>
        );
    }
}

export default Home;