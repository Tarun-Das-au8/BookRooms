import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import { RoomProvider } from "./Context";

import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import Confirm from "./pages/Confirm";

function App() {
  return (
    <RoomProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms/" component={Rooms} />
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route exaxt path="/contactus" component={ContactUs} />
          <Route path="/login" component={Login} />
          <Route exact path="/payment/" component={Payment} />
          <Route exact path="/confirm/" component={Confirm} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </RoomProvider>
  );
}

export default App;
