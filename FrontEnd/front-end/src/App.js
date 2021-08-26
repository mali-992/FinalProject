import './App.css';
import Login from './components/login/Login'
import Signup from './components/signup/Signup'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
      <Route>
        <Switch>
          <Route component={Login} path="/login"/>
          <Route component={Signup} path="/signup"/>
        </Switch>
      </Route>
    </div>
    </Router>
  );
}

export default App;
