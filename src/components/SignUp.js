import React, { useState, useEffect } from "react";
import verifyPassword from "./verifyPassword";
import LogIn from "./LogIn";
import createUsers from "./createUsers";
import "../styles.css";

const { users } = require("../users/users.json");
const SignUp = () => {
  const [redirect, setRedirect] = useState(1);
  const [user, setUser] = useState({});

  useEffect(
    function () {
      if (user.name) {
        if (!users.includes(user)) {
          const createdUser = createUsers(user);
          users.push(createdUser);
        }
        setRedirect(2);
      }
    },
    [user]
  );
  const FormSignUp = function () {
    const [password, setPassword] = useState("");
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    return (
      <form
        className="signup-form"
        onSubmit={(e) => {
          e.preventDefault();
          const isValidPassword = verifyPassword(password);
          if (isValidPassword) {
            setUser({
              name: name,
              id: id,
              email: email,
              password: password
            });
          }
        }}
      >
        <h1>Crea una cuenta</h1>
        <div className="signup-input">
          <label htmlFor="name-input"> Nombre </label>
          <input
            type="text"
            id="name-input"
            autoComplete="off"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="signup-input">
          <label htmlFor="email-input"> Email </label>
          <input
            type="email"
            autoComplete="off"
            id="email-input"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="signup-input id-input">
          <label htmlFor="id-input"> Identificación </label>
          <input
            type="number"
            autoComplete="off"
            id="id-input"
            required
            onChange={(e) => {
              setId(Number(e.target.value));
            }}
          />
        </div>
        <div className="signup-input">
          <label htmlFor="pass-input"> Contraseña </label>
          <input
            type="password"
            autoComplete="off"
            id="pass-input"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="signup-submit">
          <button type="submit" id="submit-signup">
            Crear
          </button>
        </div>
      </form>
    );
  };

  if (redirect === 1) {
    return <FormSignUp />;
  } else if (redirect === 2) {
    return <LogIn />;
  }
};

export default SignUp;
