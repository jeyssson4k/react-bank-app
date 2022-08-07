import React, { useState, useEffect } from "react";
import "../styles.css";
import DashBoard from "./DashBoard";
import logIntoAccount from "./verifyLogin";
const { session } = require("../users/userSession.json");

const LogIn = () => {
  const [redirect, setRedirect] = useState(1);
  const [logged, setLogged] = useState(false);
  useEffect(() => {
    if (session.length === 1) setRedirect(2);
  }, [logged]);

  const LogInForm = function () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          const userLog = logIntoAccount({ email, password });
          if (userLog) {
            if (!session.includes(userLog[0])) session.push(userLog[0]);
            setLogged(true);
          } else {
            alert("Correo o contraseña incorrectos");
            setRedirect(1);
          }
        }}
      >
        <h1>Iniciar Sesión</h1>
        <div className="login-input">
          <label htmlFor="email-input"> Email </label>
          <input
            type="email"
            id="email-input"
            required
            autoComplete="off"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="login-input">
          <label htmlFor="pass-input"> Contraseña </label>
          <input
            type="password"
            id="pass-input"
            required
            autoComplete="off"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="login-submit">
          <button type="submit" id="submit-login">
            Iniciar Sesión
          </button>
        </div>
      </form>
    );
  };
  if (redirect === 1) {
    return <LogInForm />;
  } else if (redirect === 2) {
    return <DashBoard />;
  }
};

export default LogIn;
