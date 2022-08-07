import React, { useState } from "react";
import "../styles.css";
import realizeTransaction from "./realizeTransaction";
import LogIn from "./LogIn";
const { session } = require("../users/userSession.json");
const DashBoard = () => {
  //const [logged, setLogged] = useState(true);
  const [action, setAction] = useState(0);

  const DashBoardContentMenu = function () {
    return (
      <div className="dashboard">
        <h1>
          Bienvenido,{" "}
          <span className="dashboard-username">{session[0].name}</span>
        </h1>
        <div className="dashboard-account-info">
          <div>
            <h3>Datos del usuario</h3>
            <span className="account-info-prop">
              Usuario:{" "}
              <span className="account-info-user">{session[0].name}</span>
            </span>
            <span className="account-info-prop">
              Identificación:{" "}
              <span className="account-info-user">{session[0].id}</span>
            </span>
            <span className="account-info-prop">
              Correo:{" "}
              <span className="account-info-user">{session[0].email}</span>
            </span>
          </div>
          <div>
            <h3>Datos de la cuenta</h3>
            <span className="account-info-prop">
              Número de cuenta:{" "}
              <span className="account-info-user">{session[0].account}</span>
            </span>
            <span className="account-info-prop">
              Saldo:{" "}
              <span className="account-info-user">{session[0].balance}</span>
            </span>
          </div>
        </div>
        <div className="dashboard-action-menu">
          <h2>¿Qué deseas hacer?</h2>
          <div className="dashboard-action-buttons">
            <button
              onClick={() => {
                setAction(1);
              }}
            >
              Retirar dinero
            </button>
            <button
              onClick={() => {
                setAction(2);
              }}
            >
              Transferir a otra cuenta
            </button>
          </div>
          <div className="dashboard-action-buttons">
            <button className="disabled">
              Depositar dinero (No disponible)
            </button>
          </div>
          <div className="dashboard-action-logout">
            <button
              className="logout-btn"
              onClick={(e) => {
                setAction(3);
                session.pop();
              }}
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    );
  };

  const WithDrawals = function () {
    const [amount, setAmount] = useState(0);

    return (
      <div>
        <button
          className="return-menu-btn"
          onClick={() => {
            setAction(0);
          }}
        >
          Volver al menú
        </button>
        <div className="sendmoney-form-group">
          <h1>Retira dinero</h1>
          <form
            className="sendmoney-form"
            onSubmit={(e) => {
              e.preventDefault();
              if (session[0].balance >= amount) {
                realizeTransaction(2, session[0], {
                  account: session[0].account,
                  amount: amount
                });
                alert("Transacción exitosa");
              } else {
                alert("No tiene saldo para realizar esta operación.");
              }
            }}
          >
            <div className="sendmoney-input">
              <label htmlFor="destination">Cantidad</label>
              <input
                type="number"
                id="destination"
                required
                min="100"
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
            </div>
            <div className="sendmoney-submit">
              <button type="submit" id="submit-sendmoney">
                Retirar dinero
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  const SendMoney = function () {
    const [amount, setAmount] = useState(0);
    const [destination, setDestination] = useState(0);

    return (
      <div>
        <button
          className="return-menu-btn"
          onClick={() => {
            setAction(0);
          }}
        >
          Volver al menú
        </button>
        <div className="sendmoney-form-group">
          <h1>Envía dinero</h1>
          <form
            className="sendmoney-form"
            onSubmit={(e) => {
              e.preventDefault();
              if (session[0].balance >= amount) {
                realizeTransaction(1, session[0], {
                  account: Number(destination),
                  amount: Number(amount)
                });
              } else {
                alert("No tiene saldo para realizar esta operación.");
              }
            }}
          >
            <div className="sendmoney-input">
              <label htmlFor="destination">Número de cuenta</label>
              <input
                type="number"
                id="destination"
                required
                onChange={(e) => {
                  setDestination(e.target.value);
                }}
              />
            </div>
            <div className="sendmoney-input">
              <label htmlFor="destination">Cantidad</label>
              <input
                type="number"
                id="destination"
                required
                min="50000"
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
            </div>
            <div className="sendmoney-submit">
              <button type="submit" id="submit-sendmoney">
                Enviar dinero
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  if (action === 0) {
    return <DashBoardContentMenu />;
  } else if (action === 1) {
    return <WithDrawals />;
  } else if (action === 2) {
    return <SendMoney />;
  } else if (action === 3) {
    return <LogIn />;
  }
};

export default DashBoard;
