import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/Individual.css";
import Time from "../component/Individual/Time.jsx";
import Lista from "../component/Individual/Lista.jsx";
import Logout from "../component/Individual/Logout.jsx";

export const Individual = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="fondo text-center">
      <Logout />
      <Time />
      <Lista />
    </div>
  );
};
