import React from "react";
import { Route } from "react-router-dom";

import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import OutlawedSessions from "./containers/ourworks/OutlawedSessions";
import CommunityWork from "./containers/ourworks/CommunityWork";
import SchoolProgram from "./containers/ourworks/SchoolProgram";
import Collaborations from "./containers/Collaborations";
import Outreach from "./containers/Outreach";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/ourworks/community-work" component={CommunityWork} />
    <Route exact path="/ourworks/school-program" component={SchoolProgram} />
    <Route
      exact
      path="/ourworks/outlawed-sessions"
      component={OutlawedSessions}
    />
    <Route exact path="/collaborations" component={Collaborations} />
    <Route exact path="/outreach" component={Outreach} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/logout" />
  </div>
);

export default BaseRouter;
