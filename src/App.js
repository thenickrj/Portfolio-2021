import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import NavBarOG from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/nav">
            <NavBarOG />
          </Route>
          <Route path="/users">
            {" "}
            <NavBar />
          </Route>
          <Route path="/">Home</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
