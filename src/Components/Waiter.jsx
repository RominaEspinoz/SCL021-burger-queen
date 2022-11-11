import { useAuth } from "../context/authContext";

export const Waiter = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };
  return (
    <div>
      <h1>AQUI VISTA MESERO</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
