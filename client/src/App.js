import Container from "./components/Container.js"
import Header from "./components/Header.js"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home"
import AddVacation from "./pages/AddVacation.js";
import FoodDetail from "./pages/FoodDetail.js";
import AddFood from "./pages/AddFood.js";
import rootReducer from "./reducers/rootReducer"

import {createStore} from 'redux';
import {Provider} from "react-redux";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Container>
        <BrowserRouter>
        {/* basename="/disney-dining-tracker" */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/add-vacation" component={AddVacation} />
            <Route path="/detail/:id" component={FoodDetail} />
            <Route path="/vacation/:id" component={Home}/>
            <Route exact path="/add-food" component={AddFood} />
          </Switch>
        </BrowserRouter>
      </Container>
    </Provider>
  );
}

export default App;
