import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


import Home from "./functionComponents/Home";
import Login from './components/Login';
import LogOut from './components/logOut';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import Workspaces from './components/Workspaces';
import CreateWorkSpace from './components/CreateWorkSpace';
import EditWorkSpace from './components/EditWorkSpace'
import NotFoundPage from './components/NotFound';


class App extends React.Component{
  render(){
    return (<div>
              <Router>   
                <Switch>
                  <Route  exact path="/" component={Home} />
                  <Route  path="/login" component={Login} />
                  <Route  path="/logout" component={LogOut} />
                  <Route  path="/signup" component={SignUp} />
                  <Route  path="/profile" component={Profile} />
                  <Route  path="/workspaces" component={Workspaces}/>
                  <Route  path="/createWorkspace" component={CreateWorkSpace}/>
                  <Route  path="/editWorkspace" component={EditWorkSpace}/>
                  <Route  component={NotFoundPage}/>
                </Switch>
              </Router>
      </div>)
  }
}
export default App;
