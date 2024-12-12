import React, { useContext, useEffect, useState } from "react";
import Input from "./Input.jsx";
import Select from "./Select.jsx";
import { Toaster, toast } from "sonner";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";
import Login from "./Login.jsx";

const Register = () => {
  const [login, setLogin] = useState(false);
  const { store, actions } = useContext(Context);
  const [inputs, setInputs] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(inputs);
    for (let i = 0; i < store.length; i++) {
      if (store[i] === "") {
        console.log(inputs);
        setInputs(inputs + 1);
      } else {
      }
    }
  }, [store]);

  return login === true ? (
    <Login />
  ) : (
    <div className="py-3">
      <Toaster richColors position="top-right" />
      <h1 className="text-center borde-oscuro text-dark fw-bold m-3">
        Register{" "}
        <span
          className="elemento-transicion-home text-white"
          onClick={() => {
            setLogin(true);
          }}
        >
          / Login
        </span>
      </h1>
      <div className="container formulario borde-luz w-75 py-0 p-0">
        <div className="row p-3" id="ejemplo">
          <div className="col-12 text-start">
            {" "}
            <span className="fw-bold text-dark mx-3 borde-oscuro">
              Register
            </span>
          </div>
          <Input
            nombre="First Name"
            col="col-6"
            id="firstName"
            type="text"
            valorFormulario="firstName"
          />
          <Input
            nombre="Second Name"
            col="col-6"
            id="secondName"
            type="text"
            valorFormulario="secondName"
          />
          <Input
            nombre="Imaginary Nickname"
            col="col-4"
            id="imaginaryNickname"
            type="text"
            valorFormulario="imaginaryNickname"
          />
          <Input
            nombre="Favorite SuperHero"
            col="col-4"
            id="favoriteSuperHero"
            type="text"
            valorFormulario="favoriteSuperHero"
          />
          <Input
            nombre="Favorite Villain"
            col="col-4"
            id="favoriteVillain"
            type="text"
            valorFormulario="favoriteVillain"
          />
          <Input
            nombre="Password"
            col="col-6"
            id="password"
            type="password"
            valorFormulario="password"
          />
          <Input
            nombre="Eye color"
            col="col-3"
            id="eyeColor"
            type="color"
            valorFormulario="eyeColor"
          />
          <Input
            nombre="Hair color"
            col="col-3"
            id="hairColor"
            type="color"
            valorFormulario="hairColor"
          />
          <Input
            nombre="Mail"
            col="col-4"
            id="mail"
            type="text"
            valorFormulario="mail"
          />

          <Input
            nombre="Age"
            col="col-2"
            id="age"
            type="number"
            valorFormulario="age"
          />
          <Select
            nombre="Favorite Variable"
            col="col-6"
            valores={["Const", "Var", "Let"]}
            id="favoriteVariable"
            desabilitar="Const Let"
            valorFormulario="favoriteVariable"
          />
          <Select
            nombre="Rate Your Experience with This Form"
            col="col-12"
            valores={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
            id="experienceRate"
            desabilitar=""
            valorFormulario="experienceRate"
          />
          <Input
            nombre="Phone"
            col="col-4"
            id="phone"
            type="number"
            valorFormulario="phone"
          />
          <Input
            nombre="Favorite Colour"
            col="col-4"
            id="favoriteColour"
            type="color"
            valorFormulario="favoriteColour"
          />
          <Input
            nombre="Birth Day"
            col="col-4"
            id="birthDay"
            type="date"
            valorFormulario="birthDay"
          />
          <Input
            nombre="Name of your computer"
            col="col-4"
            id="computerName"
            type="text"
            valorFormulario="computerName"
          />
          <Select
            nombre="Variable you hate using the most"
            col="col-8"
            valores={["Const", "Var", "Let"]}
            id="hatedVariable"
            desabilitar="Var"
            valorFormulario="hatedVariable"
          />
          <Select
            nombre="Tabs, spaces, or chaos"
            col="col-5"
            valores={["Tabs", "Spaces", "Chaos"]}
            id="tabsSpacesChaos"
            desabilitar=""
            valorFormulario="tabsSpacesChaos"
          />
          <Input
            nombre="If you were a bug, which one would you be?"
            col="col-7"
            id="bugType"
            type="number"
            valorFormulario="bugType"
          />
          <Select
            nombre="Have you ever apologized to your computer?"
            col="col-7"
            valores={["Yes", "No", "She’s always to blame"]}
            id="apologizedToComputer"
            desabilitar=""
            valorFormulario="apologizedToComputer"
          />
          <Input
            nombre="Sum up this form in one word"
            col="col-5"
            id="formSummary"
            type="text"
            valorFormulario="formSummary"
          />
          <Select
            nombre="Rate Your Experience with This Form (Be honest)"
            col="col-12"
            valores={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]}
            id="honestExperienceRate"
            desabilitar="12345678"
            valorFormulario="honestExperienceRate"
          />
          <Input
            nombre="IF you were to use a password, what would it be?"
            col="col-7"
            id="potentialPassword"
            type="text"
            valorFormulario="potentialPassword"
          />
          <Input
            nombre="Wich is your favorite number"
            col="col-5"
            id="favoriteNumber"
            type="number"
            valorFormulario="favoriteNumber"
          />
          <Select
            nombre="On a scale of 1 to 10, how much do you love variable var?"
            col="col-12"
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
            col="col-7"
            valores={["Await", "then"]}
            id="fetchPreference"
            desabilitar=""
            valorFormulario="fetchPreference"
          />
          <Select
            nombre="Dark mode or Light mode"
            col="col-5"
            id="modePreference"
            valores={["Dark mode", "Light mode"]}
            desabilitar=""
            valorFormulario="modePreference"
          />
          <Input
            nombre="If you didn’t have fingers, how would you program?"
            col="col-5"
            id="programmingWithoutFingers"
            type="text"
            valorFormulario="programmingWithoutFingers"
          />
          <Input
            nombre="Favorite Day"
            col="col-3"
            id="favoriteDay"
            type="date"
            valorFormulario="favoriteDay"
          />
          <Input
            nombre="Guess the number from 1 to 10 randomly"
            col="col-4"
            id="randomGuess"
            type="text"
            valorFormulario="randomGuess"
          />
          <Select
            nombre="Which is the worst football team?"
            col="col-3"
            valores={["Sevilla"]} // esto no es mi culpa, me lo dijo alguien de la clase
            id="worstFootballTeam"
            desabilitar=""
            valorFormulario="worstFootballTeam"
          />
          <Select
            nombre="How long do you think it took you to get here?"
            col="col-9"
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
            document
              .querySelector(`#${actions.validarFormulario()}`)
              .scrollIntoView();
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
