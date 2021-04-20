import Container from "./components/Container.js"
import Header from "./components/Header.js"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home"
import AddVacation from "./pages/AddVacation.js";

function App() {
  return (
    <div>
      <Header />
      <Container>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/add-vacation" component={AddVacation} />
          </Switch>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
