import Container from "./components/Container.js"
import Header from "./components/Header.js"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home"

function App() {
  return (
    <div>
      <Header />
      <Container>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
