import "./App.css";
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import InvestPage from "../src/pages/InvestPage";
import JoinUs from "../src/pages/JoinUsPage";
import Particles from "react-particles-js";
import particleConfig from "./particlesjs-config";
function App() {
  return (
    <>
      <Particles
        params={particleConfig}
        style={{
          position: "fixed",
          top: "0",
          zIndex: "-2",
        }}
      ></Particles>
      <Router>
        <Switch>
            
          <Route path="/" exact component={HomePage} />
        
          <Route path="/JoinUs" component={JoinUs} />
          <Route path="/Invest" component={InvestPage} />
        </Switch>
      </Router>
    </>
  );
}
export default App;
