import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./pages/Welcome";
import SignUp from "./pages/SignUp";
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Curricula from "./pages/Curricula";
import StudyingSources from './pages/StudyingSources';
import StudentActivities from "./pages/StudentActivities";
import Shop from "./pages/Shop";
import Contribute from "./pages/Contribute";
import Contact from './pages/Contact'; 
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/curricula">
            <Curricula />
          </Route>
          <Route path="/studyingsources">
            <StudyingSources />
          </Route>
          <Route path="/studentactivities">
            <StudentActivities />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/contribute">
            <Contribute />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
