import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "./App.css";
import MainSite from "./Layout/MainSite/MainSite";
import Login from "./AuthorizedLayout/Login/Login";
import useAuthUser from "./hooks/useAuthUser";
import Account from "./AuthorizedLayout/Account/Account";
import JobOffer from "./AuthorizedLayout/JobOffer/JobOffer";
import Announcements from "./AuthorizedLayout/Annonucements/Announcements";
import TasksManager from "./AuthorizedLayout/TasksManager/TasksManager";
import Events from "./AuthorizedLayout/Events/Events";
import Employers from "./AuthorizedLayout/Employers/Employers";
import Emails from "./AuthorizedLayout/Emails/Emails";

const App = (): JSX.Element => {
  const currentUser = useAuthUser();
  const PrivateRoute = ({ children, ...rest }) => {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          currentUser ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
  };
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <MainSite />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <PrivateRoute path='/account/job'>
            <JobOffer />
          </PrivateRoute>
          <PrivateRoute path='/account/events'>
            <Events />
          </PrivateRoute>
          <PrivateRoute path='/account/announcements'>
            <Announcements />
          </PrivateRoute>
          <PrivateRoute path='/account/employers'>
            <Employers />
          </PrivateRoute>
          <PrivateRoute path='/account/emails'>
            <Emails />
          </PrivateRoute>
          <PrivateRoute path='/account/tasks'>
            <TasksManager />
          </PrivateRoute>
          <PrivateRoute path='/account'>
            <Account />
          </PrivateRoute>
        </Switch>
      </Router>
    </>
  );
};

export default App;
