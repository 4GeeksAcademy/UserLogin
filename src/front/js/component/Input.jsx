import React, { useContext, useEffect, useRef, useState } from "react";
import { Toaster, toast } from "sonner";
import { Context } from "../store/appContext";

const Input = ({ nombre, col, id, type, valorFormulario }) => {
  const InputRef = useRef(null);
  const timeoutRef = useRef(null);
  const [input, SetInput] = useState("");
  const { store, actions } = useContext(Context);

  const AgregarBordeInvalido = () => {
    InputRef.current.classList.remove("Marcado");
    InputRef.current.classList.remove("input-valido");
    InputRef.current.classList.add("input-invalido");
  };

  const AgregarBordeValido = () => {
    timeoutRef.current = setTimeout(() => {
      InputRef.current.classList.add("Marcado");
    }, 3000);
    InputRef.current.classList.remove("input-invalido");
    InputRef.current.classList.add("input-valido");
  };

  useEffect(() => {
    if (input.length == 0) {
      InputRef.current.classList.add("input-invalido");
    }
  }, []);

  const handleInput = (e) => {
    SetInput(e.target.value);

    InputRef.current.classList.remove("Marcado");
    if (nombre === "Guess the number from 1 to 10 randomly") {
      const numeroUsuario = parseInt(e.target.value, 10);
      const randomNumber = Math.floor(Math.random() * 10) + 1;
      if (numeroUsuario === randomNumber) {
        InputRef.current.disabled = true;
        toast.success(`Congrats ${randomNumber} it's the number`);
      } else {
        setTimeout(() => {
          InputRef.current.value = "";
        }, 750);
        toast.warning(`Try again`);
      }
    }
    // validamos si el valor esta vacio
    if (e.target.value.length == 0) {
      clearTimeout(timeoutRef.current);
      InputRef.current.placeholder = "Empty";
      actions.modificarFormulario(valorFormulario, "");
      AgregarBordeInvalido();
    } else {
      // validacion de la password
      if (nombre === "Password") {
        AgregarBordeInvalido();
        if (/[A-Z]/.test(e.target.value) === false) {
          //si necesitas una password para testear la aplicacion usa esta: A1@!ilovevar😭.>"1234q55255910"
          actions.modificarFormulario(valorFormulario, "");
          toast.warning(`Your password must have an uppercase letter`);
        } else if (/\d/.test(e.target.value) === false) {
          actions.modificarFormulario(valorFormulario, "");
          toast.warning(`Your password must contain a number`);
        } else if (/@/.test(e.target.value) === false) {
          actions.modificarFormulario(valorFormulario, "");
          toast.warning(`Your password must have an @`);
        } else if (/!/.test(e.target.value) === false) {
          actions.modificarFormulario(valorFormulario, "");
          toast.warning(`Your password must have an !`);
        } else if (/ilovevar/.test(e.target.value) === false) {
          actions.modificarFormulario(valorFormulario, "");
          toast.warning(`Your password must have an ilovevar`);
        } else if (/😭/.test(e.target.value) === false) {
          actions.modificarFormulario(valorFormulario, "");
          toast.warning(`Your password must have an 😭`);
        } else if (/./.test(e.target.value) === false) {
          actions.modificarFormulario(valorFormulario, "");
          toast.warning(`Your password must have an .`);
        } else if (/>/.test(e.target.value) === false) {
          actions.modificarFormulario(valorFormulario, "");
          toast.warning(`Your password must have an >`);
        } else if (/"/.test(e.target.value) === false) {
          actions.modificarFormulario(valorFormulario, "");
          toast.warning(`Your password must have an "`);
        } else if (/1234/.test(e.target.value) === false) {
          actions.modificarFormulario(valorFormulario, "");
          toast.warning(`Your password must have an 1234`);
        } else if (/q/.test(e.target.value) === false) {
          actions.modificarFormulario(valorFormulario, "");
          toast.warning(`Your password must have an q`);
        } else if (/55/.test(e.target.value) === false) {
          actions.modificarFormulario(valorFormulario, "");
          toast.warning(`30 + 25 = ?`);
        } else if (/25/.test(e.target.value) === false) {
          actions.modificarFormulario(valorFormulario, "");
          toast.warning(`5 x 5 = ?`);
        } else if (/59/.test(e.target.value) === false) {
          actions.modificarFormulario(valorFormulario, "");
          toast.warning(`7 x 7 = ?"`);
        } else if (/10/.test(e.target.value) === false) {
          actions.modificarFormulario(valorFormulario, "");
          toast.warning(
            `"If you have 10 fish and 2 drown, how many are left?"`
          );
        } else {
          AgregarBordeValido();
          toast.success("Nice password :)");
          actions.modificarFormulario(valorFormulario, e.target.value);
        }
      } else {
        if (nombre === "IF you were to use a password, what would it be?") {
          AgregarBordeValido();
          e.target.value == "1234"
            ? setTimeout(() => {
                toast.error("1234 ? 😴");
              }, 3000)
            : "";
          actions.modificarFormulario(valorFormulario, e.target.value);
        } else {
          // timeout para indicar al usuario que el contenido esta correcto

          AgregarBordeValido();
          actions.modificarFormulario(valorFormulario, e.target.value);
          if (type == "password" && e.target.value.length > 0) {
            clearTimeout(timeoutRef.current);
          }
        }
      }
    }
  };

  return (
    <div className={col} id={id}>
      <div className="text-center">
        <label className="text-dark fw-bold my-2">{nombre}</label>
        <div class="input-group mb-3">
          <input
            ref={InputRef}
            type={type}
            class="form-control text-center fw-bold rounded-2"
            placeholder="-------"
            onChange={handleInput}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
