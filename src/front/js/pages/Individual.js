import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/Individual.css";
import Register from "../component/Register.jsx";
import Time from "../component/Individual/Time.jsx";
import Lista from "../component/Individual/Lista.jsx";

export const Individual = () => {
  const { store, actions } = useContext(Context);

  console.log(store);
  return (
    <div className="fondo text-center">
      <Time />
      <Lista />
    </div>
  );
};
