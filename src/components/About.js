import React from "react";
import { useNavigate } from "react-router-dom";

const About = (props) => {
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/support");
  }

  return (
    <div>
      <div>This is About page</div>
      <button onClick={clickHandler}>Move to Support page </button>
    </div>
  );
};

export default About;
