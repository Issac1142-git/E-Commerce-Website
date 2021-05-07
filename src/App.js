import { Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";
import "./App.css";

const hat = () => <h1>HAT ROUTE</h1>;

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/hat" component={hat} />
      </Switch>
    </div>
  );
}

export default App;
