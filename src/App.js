import { useState } from "react";
import "./styles.css";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
export default function App() {
  const [access, accessState] = useState(0);
  const Home = () => {
    return (
      <div className="App">
        <h1>Aplicación de tipo bancaria</h1>
        <h3>Desposita, retira, transfiere.</h3>
        <h2>Seleccionar acción</h2>
        <div className="action-btn-group">
          <button
            onClick={() => {
              accessState(1);
            }}
          >
            Crear cuenta
          </button>
          <button
            onClick={() => {
              accessState(2);
            }}
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    );
  };
  if (access === 0) {
    return <Home />;
  } else if (access === 1) {
    return (
      <div>
        <button
          className="return-btn"
          onClick={() => {
            accessState(0);
          }}
        >
          Volver al inicio
        </button>
        <SignUp />
      </div>
    );
  } else if (access === 2) {
    return (
      <div>
        <button
          className="return-btn"
          onClick={() => {
            accessState(0);
          }}
        >
          Volver al inicio
        </button>
        <LogIn />
      </div>
    );
  }
}
