import Header from "../components/Header";
import Container from "../components/Container"
import Button from "../components/Button";
import H2 from "../components/Text/H2";
import CreditsRemaining from "../components/CreditsRemaining";
import FoodItem from "../components/FoodItem";

let currentVacation = true;

function Home(){

    if(!currentVacation){
        return (
            <div>
            <Header />
            <Container>
                <Button>Add Disney World Vacation</Button>
                <H2>Previous Vacations</H2>
                <Button>Spring 2020</Button>
                <Button>Spring 2019</Button>
                <Button>Spring 2018</Button>
                <Button>Winter 2017</Button>
            </Container>
            </div>
        );
    } else {
        return (
            <div>
            <Header />
            <Container>
                <CreditsRemaining />
                <FoodItem name="Mickey Ice Cream" credit="1 Snack" location="Stall in front of castle" park="Magic Kingdom"/>
                <FoodItem name="Breakfast Buffet" credit="1 Table-Service" location="Crystal Palace" park="Magic Kingdom"/>
                <Button>Mark Vacation as Completed</Button>
            </Container>
            </div>
        );
    }
}

export default Home;