import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import Register from "../component/Register.jsx";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="fondo">
      <Register />
    </div>
  );
};
