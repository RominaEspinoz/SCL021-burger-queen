import { useAuth } from "../context/authContext";
import { Link } from "react-router-dom";

import "../styleHome.css";
import logo2 from "../img/logo2.png";
import LogoWaiter from "../img/LogoWaiter.png";
import LogoChef from "../img/LogoChef.png";

export const Home = () => {
  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  if (loading) return <h1>loading</h1>;

  return (
    <section id="Home">
      <img id="logo2" src={logo2} alt="Logo VeggieQueen" />
      <h1>Bienvenido {user.email}, Selecciona tu labor</h1>
      <button className="btnSelect">
        <Link to="/waiter">
          MESERO
          <img
            className="logoEmployers"
            src={LogoWaiter}
            alt="Logo Mesero"
          ></img>
        </Link>
      </button>
      <button className="btnSelect">
        <Link to="/CHEF">
          COCINERO
          <img className="logoEmployers" src={LogoChef} alt="Logo Chef"></img>
        </Link>
      </button>

      <button onClick={handleLogout}>Logout</button>
    </section>
  );
};
