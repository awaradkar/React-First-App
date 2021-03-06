import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="/container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}
