import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore } from "redux";
import reducer from "../../reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import Form from "../Form/Form";
import Profile from "../Profile/Profile";

function App() {
  const store = createStore(reducer, composeWithDevTools());
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Form />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
