import Home from "./pages/home/Home";
import Topbar from "./componenet/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/setting/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom';



function App() {
  const user = false;

  return (
    <Router>
      <Topbar/>
      <Switch>
        <Route exact component path="/">
          <Home/>
        </Route>

        <Route path="/register">
          {user ?<Home/>: <Register/>}
        </Route>

        <Route path="/login">
          {user ?<Home/>: <Login/>}
        </Route>

        <Route path="/write">
          {user ? <Write/> : <Login/>}
        </Route>

        <Route path="/settings">
         {user ? <Settings/> : <Login/>}
        </Route>

        <Route path="/post/:postId">
          <Single/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
