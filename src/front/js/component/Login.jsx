import React, { useContext, useState } from "react";
import Input from "./Input.jsx";
import Select from "./Select.jsx";
import { Toaster, toast } from "sonner";
import { Context } from "../store/appContext.js";
import Register from "./Register.jsx";

const Login = () => {
  const [register, setRegister] = useState(false);
  const { store, actions } = useContext(Context);
  const [modoFacil, setModoFacil] = useState(false);

  return register === true ? ( // comprobamos si el usuario no ha cambiado a register
    <Register />
  ) : (
    <div className="py-3">
      <Toaster richColors position="top-right" />
      <h1 className="text-center borde-oscuro  text-white fw-bold m-3">
        <span
          className="elemento-transicion-home text-info"
          onClick={() => {
            setRegister(true);
          }}
        >
          Register
        </span>{" "}
        / Login
      </h1>
      <div className="container formulario borde-luz w-75 py-0 p-0">
        <div className="row p-3" id="ejemplo">
          <div className="col-12 text-end d-flex justify-content-between">
            <span className="fw-bold text-dark mx-3 borde-oscuro">Login</span>

            <span
              className="fw-bold text-dark mx-3 elemento-transicion-home"
              onClick={() => {
                setModoFacil(true);
              }}
            >
              {modoFacil === true ? ":)" : "Are you scared? Click me"}
            </span>
          </div>

          <Input
            nombre="First Name"
            col={modoFacil === true ? "col-12" : "col-md-6 col-12"}
            id="firstName"
            type="text"
            valorFormulario="firstName"
          />
          <Input
            nombre="Second Name"
            col={modoFacil === true ? "d-none" : "col-md-6 col-12"}
            id="secondName"
            type="text"
            valorFormulario="secondName"
          />
          <Input
            nombre="Imaginary Nickname"
            col={modoFacil === true ? "d-none" : "col-md-4 col-12"}
            id="imaginaryNickname"
            type="text"
            valorFormulario="imaginaryNickname"
          />
          <Input
            nombre="Favorite SuperHero"
            col={modoFacil === true ? "d-none" : "col-md-4 col-12"}
            id="favoriteSuperHero"
            type="text"
            valorFormulario="favoriteSuperHero"
          />
          <Input
            nombre="Favorite Villain"
            col={modoFacil === true ? "d-none" : "col-md-4 col-12"}
            id="favoriteVillain"
            type="text"
            valorFormulario="favoriteVillain"
          />
          <Input
            nombre="Password "
            col={modoFacil === true ? "d-none" : "col-md-6 col-12"}
            id="password"
            type="password"
            valorFormulario="password"
          />
          <Input
            nombre="Eye color"
            col={modoFacil === true ? "d-none" : "col-md-3 col-12"}
            id="eyeColor"
            type="color"
            valorFormulario="eyeColor"
          />
          <Input
            nombre="Hair color"
            col={modoFacil === true ? "d-none" : "col-md-3 col-12"}
            id="hairColor"
            type="color"
            valorFormulario="hairColor"
          />
          <Input
            nombre="Mail"
            col={modoFacil === true ? "col-12" : "col-md-4 col-12"}
            id="mail"
            type="text"
            valorFormulario="mail"
          />

          <Input
            nombre="Age"
            col={modoFacil === true ? "d-none" : "col-md-2 col-12"}
            id="age"
            type="number"
            valorFormulario="age"
          />
          <Select
            nombre="Favorite Variable"
            col={modoFacil === true ? "d-none" : "col-md-6 col-12"}
            valores={["Const", "Var", "Let"]}
            id="favoriteVariable"
            desabilitar="Const Let"
            valorFormulario="favoriteVariable"
          />
          <Select
            nombre="Rate Your Experience with This Form"
            col={modoFacil === true ? "d-none" : "col-12"}
            valores={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
            id="experienceRate"
            desabilitar=""
            valorFormulario="experienceRate"
          />
          <Input
            nombre="Phone"
            col={modoFacil === true ? "d-none" : "col-md-4 col-12"}
            id="phone"
            type="number"
            valorFormulario="phone"
          />
          <Input
            nombre="Favorite Colour"
            col={modoFacil === true ? "d-none" : "col-md-4 col-12"}
            id="favoriteColour"
            type="color"
            valorFormulario="favoriteColour"
          />
          <Input
            nombre="Birth Day"
            col={modoFacil === true ? "d-none" : "col-md-4 col-12"}
            id="birthDay"
            type="date"
            valorFormulario="birthDay"
          />
          <Input
            nombre="Name of your computer"
            col={modoFacil === true ? "d-none" : "col-md-6 col-lg-4 col-12"}
            id="computerName"
            type="text"
            valorFormulario="computerName"
          />
          <Select
            nombre="Variable you hate using the most"
            col={modoFacil === true ? "d-none" : "col-md-6 col-lg-8 col-12"}
            valores={["Const", "Var", "Let"]}
            id="hatedVariable"
            desabilitar="Var"
            valorFormulario="hatedVariable"
          />
          <Select
            nombre="Tabs, spaces, or chaos"
            col={modoFacil === true ? "d-none" : "col-md-4 col-lg-5 col-12"}
            valores={["Tabs", "Spaces", "Chaos"]}
            id="tabsSpacesChaos"
            desabilitar=""
            valorFormulario="tabsSpacesChaos"
          />
          <Input
            nombre="If you were a bug, which one would you be?"
            col={modoFacil === true ? "d-none" : "col-md-8 col-lg-7 col-12"}
            id="bugType"
            type="number"
            valorFormulario="bugType"
          />
          <Select
            nombre="Have you ever apologized to your computer?"
            col={modoFacil === true ? "d-none" : "col-md-12 col-lg-7 col-12"}
            valores={["Yes", "No", "She’s always to blame"]}
            id="apologizedToComputer"
            desabilitar=""
            valorFormulario="apologizedToComputer"
          />
          <Input
            nombre="Sum up this form in one word"
            col={modoFacil === true ? "d-none" : "col-lg-5 col-12"}
            id="formSummary"
            type="text"
            valorFormulario="formSummary"
          />
          <Select
            nombre="Rate Your Experience with This Form (Be honest)"
            col={modoFacil === true ? "d-none" : "col-12"}
            valores={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
            id="honestExperienceRate"
            desabilitar="12345678"
            valorFormulario="honestExperienceRate"
          />
          <Input
            nombre="IF you were to use a password, what would it be?"
            col={modoFacil === true ? "d-none" : "col-md-7 col-12"}
            id="potentialPassword"
            type="text"
            valorFormulario="potentialPassword"
          />
          <Input
            nombre="Wich is your favorite number"
            col={modoFacil === true ? "d-none" : "col-md-5 col-12"}
            id="favoriteNumber"
            type="number"
            valorFormulario="favoriteNumber"
          />
          <Select
            nombre="On a scale of 1 to 10, how much do you love variable var?"
            col={modoFacil === true ? "d-none" : "col-12"}
            valores={[
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10 I love it ",
            ]}
            id="loveForVar"
            desabilitar="123456789"
            valorFormulario="loveForVar"
          />
          <Select
            nombre="if you need to use fetch, do you use await or then?"
            col={modoFacil === true ? "d-none" : "col-md-12 col-lg-7 col-12"}
            valores={["Await", "then"]}
            id="fetchPreference"
            desabilitar=""
            valorFormulario="fetchPreference"
          />
          <Select
            nombre="Dark mode or Light mode"
            col={modoFacil === true ? "d-none" : "col-md-4 col-lg-5 col-12"}
            id="modePreference"
            valores={["Dark mode", "Light mode"]}
            desabilitar=""
            valorFormulario="modePreference"
          />
          <Input
            nombre="If you didn’t have fingers, how would you program?"
            col={modoFacil === true ? "d-none" : "col-md-8 col-lg-5 col-12"}
            id="programmingWithoutFingers"
            type="text"
            valorFormulario="programmingWithoutFingers"
          />
          <Input
            nombre="Favorite Day"
            col={modoFacil === true ? "d-none" : "col-md-3 col-12"}
            id="favoriteDay"
            type="date"
            valorFormulario="favoriteDay"
          />
          <Input
            nombre="Guess the number from 1 to 10 randomly"
            col={modoFacil === true ? "d-none" : "col-md-9 col-lg-4 col-12"}
            id="randomGuess"
            type="text"
            valorFormulario="randomGuess"
          />
          <Select
            nombre="Which is the worst football team?"
            col={modoFacil === true ? "d-none" : "col-md-5 col-lg-5 col-12"}
            valores={["Sevilla"]} // esto no es mi culpa, me lo dijo alguien de la clase
            id="worstFootballTeam"
            desabilitar=""
            valorFormulario="worstFootballTeam"
          />
          <Select
            nombre="How long do you think it took you to get here?"
            col={modoFacil === true ? "d-none" : "col-md-7 col-lg-7 col-12"}
            valores={["1min", "2min", "3min", "4min", "5min", "10min"]}
            id="timeToComplete"
            desabilitar="1min 2min"
            valorFormulario="timeToComplete"
          />
        </div>
        <button
          className="w-100"
          id="boton-subir"
          onClick={() => {
            actions.Login(store.mail, store.firstName);
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
