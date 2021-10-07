import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Blogs from "./components/Blogs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; //localhost:3000/
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/portfolio" exact component={About} />
          <Route path="/experience" component={Experience} />
          <Route path="/education" component={Education} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/certificates" component={Certificates} />
          <Route path="/blogs" component={Blogs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
