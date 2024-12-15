import React from "react";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate("");

  return (
    <div className="row p-0 m-0">
      <div className="col-12 text-center p-0">
        <button
          className="btn  btn-logout w-100"
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Logout;
