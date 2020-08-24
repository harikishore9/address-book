import React from "react";
import "./App.css";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import Forgot from "./components/Forgot/Forgot";
import Profile from "./components/Profile/Profile";
import Address from "./components/Address/Address";
import AddressList from "./components/AddressList/AddressList";
import UnGatedRoute from "./components/UnGatedRoute/UnGatedRoute";
import GatedRoute from "./components/GatedRoute/GatedRoute";
import styled from "styled-components";
import NavBar from "./components/NavBar/NavBar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
const AddressBook = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60vw;
  flex-direction: column;
  margin: 0 auto;
  & > *:not(:first-child) {
    margin-top: 1em;
  }
`;
function App() {
  return (
    <AddressBook>
      <Router>
        <NavBar />
        <Switch>
          <UnGatedRoute
            path="/register"
            exact
            component={Registration}
          ></UnGatedRoute>
          <UnGatedRoute path="/login" exact component={Login}></UnGatedRoute>
          <UnGatedRoute path="/forgot" exact component={Forgot}></UnGatedRoute>
          <GatedRoute path="/address" exact component={Address}></GatedRoute>
          <GatedRoute path="/list" exact component={AddressList}></GatedRoute>
          <GatedRoute path="/profile" exact component={Profile}></GatedRoute>
          <Route
            render={(props) => {
              return (
                <React.Fragment>
                  <h1>Welcome to Address book</h1>
                  <Login />
                </React.Fragment>
              );
            }}
          ></Route>
        </Switch>
      </Router>
    </AddressBook>
  );
}

export default App;
