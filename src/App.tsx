import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";

import ChatScreen from "./screens/ChatScreen";
import ProfileScreen from "./screens/ProfileScreen";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />

        <Route path="/chat/:id" component={ChatScreen} />

        <Route path="/profile/:id" component={ProfileScreen} />
      </Switch>
    </Router>
  );
};

export default App;
