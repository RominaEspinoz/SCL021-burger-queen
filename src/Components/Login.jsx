import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

import Logo1 from "../img/Logo1.png";
import "../styleLogin.css";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { IconContext } from "react-icons";
const iconStyles = { color: "grey", size: "2em" };

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section id="Login">
      {error && <p>{error}</p>}
      <img id="logo1" src={Logo1} alt="Logo Iniciales VQ"></img>

      <form onSubmit={handleSubmit} id="LoginForm">
        <h1>HOLA VEGGIER</h1>
        <p>Por favor ingresa tus credenciales</p>
        <div className="inputLogin">
          <IconContext.Provider value={iconStyles}>
            <div>
              <FaEnvelope />
            </div>
          </IconContext.Provider>
          <input
            type="email"
            name="email"
            className="inpLogin"
            id="loginEmail"
            placeholder="aaaa@aaa.aaa"
            onChange={handleChange}
          />
        </div>

        <div className="inputLogin">
          <IconContext.Provider value={iconStyles}>
            <div>
              <FaLock />
            </div>
          </IconContext.Provider>
          <input
            type="password"
            name="password"
            className="inpLogin"
            id="loginPassword"
            placeholder="*****"
            onChange={handleChange}
          />
        </div>

        <button id="buttonLogin">Inicar Sesión</button>
      </form>
    </section>
  );
};
