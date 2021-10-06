import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Blogs from "./components/Blogs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/about" component={About} />
          <Route path="/experience" component={Experience} />
          <Route path="/education" component={Education} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/certificates" component={Certificates} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/resume" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
