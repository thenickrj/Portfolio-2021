import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import NavBarOG from "./components/NavBar/NavBar";
import Intro from "./components/Intro/Intro";
import Test from "./components/Test/Test";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/nav">
            <NavBarOG />
          </Route>
          <Route path="/intro">
            <Intro />
          </Route>
          <Route path="/users">
            <NavBar />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
