import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./pages/Welcome";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Curricula from "./pages/Curricula";
import StudyingSources from "./pages/StudyingSources";
import Blog from "./pages/Blog";
import Contribute from "./pages/Contribute";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import AuthContextProvider from "./context/AuthContext";
function App() {
  return (
    <div className="App">
        <Router>
          <AuthContextProvider>
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
              <Route path="/blog">
                <Blog />
              </Route>
              <Route path="/contribute">
                <Contribute />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
            </AuthContextProvider>
        </Router>
        <Footer />
    </div>
  );
}

export default App;
