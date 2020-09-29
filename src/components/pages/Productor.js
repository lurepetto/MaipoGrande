import React from "react";
import "../../App.css";
import IngresarDComerciales from "../IngresarDComerciales";
import MostrarDComerciales from "../MostrarDComerciales";
import IngresarProducto from "../IngresarProducto";
import NavbarPR from '../NavbarPR';

function Productor() {
  return (
    <div>
      <NavbarPR />
      <MostrarDComerciales />
    </div>
  );
}

export default Productor;
