import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Signup from "./Components/SignupPage/Signup";
import ProductList from "./Components/Dashboard/ProductList";

function App(props) {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Signup} />

          <Route path="/productlist" component={ProductList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
