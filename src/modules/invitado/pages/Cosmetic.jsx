import React, { Component } from "react";
import { Switch, Route } from 'react-router-dom';
import NavbarResponsiveInv from "../../../components/navbars/NavbarResponsiveInv";
import Home from "./Home";
import WeAre from "./cosmetic/WeAre";

class Cosmetic extends Component {
  render() {
    return (
      <main className="container-fluid">
          <NavbarResponsiveInv />
      </main>
    );
  }
}

export default Cosmetic;
