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
  background-color: #778899;
  height: 100%;
  font-weight: bold;
  font-size: 1.4rem;
  border-bottom: 10px solid #FFDBB0;
  width: 100%;
  padding-top: 2%;
  padding-bottom: 2%;
  @media(max-width: 376px) {
    display: flex;
    flex-direction: column;
    font-size: 1.7rem;
  }
`;

function App() {
  return (
    <div className="App">
      <Router>
        <LinkStyles>
        <Link style={{color: "#FFDBB0", textDecoration: "none",}} to='/login'>LOGIN</Link>
        <Link style={{color: "#FFDBB0", textDecoration: "none", marginLeft: "2.5%",}} to='/protected'>FRIENDS</Link>
        <Link style={{color: "#FFDBB0", textDecoration: "none", marginLeft: "2.5%",}} to='/add-friend'>ADD</Link>
        <Link style={{color: "#FFDBB0", textDecoration: "none", marginLeft: "2.5%",}} to='/edit-friend'>EDIT</Link>
        <Link style={{color: "#FFDBB0", textDecoration: "none", marginLeft: "2.5%",}} to='/delete-friend'>DELETE</Link>
        </LinkStyles>
        <Switch>
          <PrivateRoute exact path='/protected' component={Friends} />
          <PrivateRoute path='/add-friend' component={AddFriend} />
          <PrivateRoute path='/edit-friend' component={EditFriend} />
          <PrivateRoute path='/delete-friend' component={DeleteFriend} />
          <Route path="/login" component={Login} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
