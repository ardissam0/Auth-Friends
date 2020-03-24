import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

import Login from "./components/Login"
import Friends from "./components/Friends"
import AddFriend from "./components/AddFriend"
import EditFriend from "./components/EditFriend"
import DeleteFriend from "./components/DeleteFriend"
import PrivateRoute from "./components/PrivateRoute"
import styled from 'styled-components';

const LinkStyles = styled.div`
  text-decoration: none;

`;

function App() {
  return (
    <div className="App">
      <Router>
        <LinkStyles> 
        <Link to='/login'>LOGIN</Link>
        <Link to='/protected'>FRIENDS</Link>
        <Link to='/add-friend'>ADD FRIENDS</Link>
        <Link to='/edit-friend'>EDIT FRIENDS</Link>
        <Link to='/delete-friend'>DELETE FRIEND</Link>
        </LinkStyles>
        <Switch>
          <Route path="/login" component={Login} /> 
          <PrivateRoute exact path='/protected' component={Friends} />
          <PrivateRoute exact path='/add-friend' component={AddFriend} />
          <PrivateRoute exact path='/edit-friend' component={EditFriend} />
          <PrivateRoute exact path='/delete-friend' component={DeleteFriend} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
