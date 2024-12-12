import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
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
