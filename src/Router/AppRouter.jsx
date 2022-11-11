import { React } from "react";
import { Route, Routes } from "react-router-dom";
import { Chef } from "../Components/Chef";
import { Home } from "../Components/Home";
import { Login } from "../Components/Login";
import { ProtectedRoute } from "../Components/ProtectedRoute";
import { Waiter } from "../Components/Waiter";
import { AuthProvider } from "../context/authContext";

export const AppRouter = () => {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route
            path="/waiter"
            element={
              <ProtectedRoute>
                <Waiter />
              </ProtectedRoute>
            }
          />
          {/* <Route path="waiter" element={<Waiter />} /> */}
          <Route
            path="/chef"
            element={
              <ProtectedRoute>
                <Chef />
              </ProtectedRoute>
            }
          />
          {/* <Route path="chef" element={<Chef />} /> */}
        </Routes>
      </AuthProvider>
    </>
  );
};
