import React from "react";
import { useNavigate } from "react-router-dom";
import backArrow from '../../images/backArrow.png'

import { SignUp } from "../../components";

const Register = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="backButton" onClick={()=> navigate('/')}><img src={backArrow} alt="back button"/><p>Home</p></div>
      <SignUp />
    </>
  );
};

export default Register;
