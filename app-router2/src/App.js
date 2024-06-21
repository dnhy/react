import "./App.css";
import Header from "./components/Home/Header";
import Home from "./components/Home";
import About from "./components/About";
import { Link, Route, NavLink, Switch, Redirect } from "react-router-dom";
import MyNavLink from "./components/MyNavLink";

function App() {
  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            <MyNavLink to="/about" children="About" />
            <MyNavLink to="/home" children="Home" />
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              <Switch>
                <Route path="/about" component={About} />
                <Route path="/home" component={Home} />
                <Redirect to="/about" />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
