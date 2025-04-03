import React from "react";
import { useNavigate } from "react-router-dom";

const Support = (props) => {
  const navigate = useNavigate();

  function clickHandler() {
    navigate("/Labs");
  }

  function backHandler(){
    navigate(-1);
  }
  return (
    <div>
      <div>This is Support page</div>
      <button onClick={clickHandler}>Move to Labs page </button>
      <br/>
      <button onClick={backHandler}>Go Back </button>
    </div>
  );
};

export default Support;
