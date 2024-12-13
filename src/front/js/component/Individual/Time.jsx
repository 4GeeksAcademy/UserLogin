import React from "react";
const Time = () => {
  return (
    <div>
      <span className="Numero-Tiempo">
        {localStorage.getItem("tiempo")}
        <span className="fs-1">s</span>
      </span>
      <div className="container bg-white rounded-3 opacity-75">
        <p className="p-3 text-center fs-3 borde-luz fw-bold">
          Thank you for wasting this precious time filling out this troll form.
          We truly appreciate the time and effort you’ve spent on it, even
          though it’s all just for fun. Hopefully, this experience wasn’t too
          much of a hassle, and you had a good laugh while completing it. Thanks
          again for engaging with this playful little questionnaire!
        </p>
      </div>
    </div>
  );
};

export default Time;
