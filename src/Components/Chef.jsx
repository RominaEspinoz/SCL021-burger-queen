import { useAuth } from "../context/authContext";

export const Chef = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div>
      <h1>AQUI VISTA CHEF</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
