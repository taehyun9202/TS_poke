import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Pokemon from "./components/Pokemon";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/pokemon/:id" component={Pokemon} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
