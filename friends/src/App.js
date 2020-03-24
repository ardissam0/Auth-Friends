import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

import Login from "./components/Login"
import Friends from "./components/Friends"
import AddFriend from "./components/AddFriend"
import EditFriend from "./components/EditFriend"
import DeleteFriend from "./components/DeleteFriend"
import PrivateRoute from "./components/PrivateRoute"

function App() {
  return (
    <div className="App">
      <Router>
        <Link to='/login'>Login</Link>
        <Link to='/friends'>Friends</Link>
        <Link to='/add-friend'>Add Friend</Link>
        <Link to='/edit-friend'>Edit Friend</Link>
        <Link to='/delete-friend'>Delete Friend</Link>

        <Switch>
          <PrivateRoute exact path='/add-friend' component={AddFriend} />
          <PrivateRoute exact path='/delete-friend' component={DeleteFriend} />
          <PrivateRoute exact path='/friends' component={Friends} />
          <PrivateRoute exact path='/edit-friend' component={EditFriend} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
