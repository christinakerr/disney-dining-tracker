import Container from "./components/Container.js"
import Header from "./components/Header.js"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home"
import AddVacation from "./pages/AddVacation.js";
import FoodDetail from "./pages/FoodDetail.js";
import AddFood from "./pages/AddFood.js";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/add-vacation" component={AddVacation} />
            <Route path="/detail/:id" component={FoodDetail} />
            <Route path="/add-food" component={AddFood} />
          </Switch>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
