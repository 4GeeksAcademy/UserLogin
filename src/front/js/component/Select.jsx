import React, { useContext, useEffect, useRef, useState } from "react";
import { Toaster, toast } from "sonner";
import { Context } from "../store/appContext";

const Select = ({ nombre, col, valores, id, desabilitar, valorFormulario }) => {
  const SelectRef = useRef(null);
  const [select, SetSelect] = useState("");
  const { store, actions } = useContext(Context);

  //ponemos el input en rojo apenas se inicializa para indicar que falta rellenarlo
  useEffect(() => {
    if (select.length == 0) {
      SelectRef.current.classList.add("input-invalido");
    } else {
      SelectRef.current.classList.add("input-valido");
    }
  }, []);

  const handleSelect = (e) => {
    SetSelect(e.target.value);
    if (e.target.value == "") {
      // si esta vacio lo mantenemos con luz roja
      SelectRef.current.classList.remove("input-valido");
      SelectRef.current.classList.add("input-invalido");
    } else {
      // si el usuario elije un valor le ponemos color verde y un opacity de 0.5
      SelectRef.current.classList.add("Marcado");
      SelectRef.current.classList.remove("input-invalido");
      SelectRef.current.classList.add("input-valido");
      actions.modificarFormulario(valorFormulario, e.target.value);
    }
  };

  return (
    <div className={col} id={id}>
      <div className="text-center">
        <label className="text-dark fw-bold my-2">{nombre}</label>
        <div class="input-group mb-3 text-center fw-bold text-dark">
          <select
            ref={SelectRef}
            class="form-select text-center fw-bold text-dark"
            onKeyDown={handleSelect}
            onChange={handleSelect}
          >
            <option>---</option>
            {/* hacemos un map para poder reutilizar el select a traves de sus props */}
            {valores.map((elem, index) => {
              if (desabilitar.includes(elem)) {
                return (
                  <option disabled value={elem} className="fw-bold">
                    {elem}
                  </option>
                );
              } else {
                return (
                  <option value={elem} className="fw-bold">
                    {elem}
                  </option>
                );
              }
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Select;
