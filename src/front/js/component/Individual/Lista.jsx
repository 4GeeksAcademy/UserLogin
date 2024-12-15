import React from "react";
const Lista = () => {
  //lista que itera todos los valores en el local storage
  return (
    <div className="container w-75">
      <ol class="list-group list-group-numbered">
        {Object.entries(localStorage).map(([key, value]) => {
          return (
            <div className="row">
              <div className="col-4 text-center fondo-item-lista fondo-key contenido-item-lista text-white border border-white border-end-0 my-1 align-content-center">
                {key}
              </div>
              <div className="col-8 text-center fondo-item-lista fondo-value contenido-item-lista border border-dark border-start-0  my-1 scroll py-1">
                {value}
              </div>
            </div>
          );
        })}
      </ol>
    </div>
  );
};
export default Lista;
