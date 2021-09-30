import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
// import NavBar from "./NavBar";
import NavBarOG from "./components/NavBar/NavBar";
import Intro from "./components/Intro/Intro";
// import Test from "./components/Test/Test";
import Home from "./Pages/Home";
import ProjectsPage from "./Pages/ProjectsPage";
import BlogsPage from "./Pages/BlogsPage";
import Blog3 from "./Pages/Blog3";

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
          {/* <Route path="/users">
            <NavBar />
          </Route> */}
          {/* <Route path="/test">
            <Test />
          </Route> */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/project">
            <ProjectsPage />
          </Route>
          <Route path="/blogs">
            <BlogsPage />
          </Route>
          <Route path="/blog3">
            <Blog3 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
