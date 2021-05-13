
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home"
import AddVacation from "./pages/AddVacation.js";
import FoodDetail from "./pages/FoodDetail.js";
import AddFood from "./pages/AddFood.js";
import rootReducer from "./reducers/rootReducer"

import {createStore} from 'redux';
import {Provider} from "react-redux";
import Register from "./auth/Register";
import Login from "./auth/Login";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      
        <BrowserRouter>
        {/* basename="/disney-dining-tracker" */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/add-vacation" component={AddVacation} />
            <Route path="/detail/:id" component={FoodDetail} />
            <Route path="/vacation/:id" component={Home}/>
            <Route exact path="/add-food" component={AddFood} />
            <Route exact path="/previous-vacations" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
          
        </BrowserRouter>
      
    </Provider>
  );
}

export default App;
