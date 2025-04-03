import React from "react";
import { useNavigate } from "react-router-dom";

const Labs = (props) => {
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/about");
  }

  return (
    <div>
      <div>This is labs page</div>
      <button onClick={clickHandler}>Move to About page </button>
    </div>
  );
};

export default Labs;
