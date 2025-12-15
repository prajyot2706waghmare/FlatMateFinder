import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Flats from "./pages/Flats";
import FlatForm from "./pages/FlatForm";
import Flatmates from "./pages/Flatmates";
import FlatmateForm from "./pages/FlatmateForm";
import Roomshares from "./pages/Roomshares";
import RoomshareForm from "./pages/RoomshareForm";
import Profile from "./pages/Profile";
import { AuthProvider, useAuth } from "./context/AuthContext";

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return children;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/register"
            element={
              <ProtectedRoute>
                <Register />
              </ProtectedRoute>
            }
          />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/flats"
            element={
              <ProtectedRoute>
                <Flats />
              </ProtectedRoute>
            }
          />
          <Route
            path="/flats/new"
            element={
              <ProtectedRoute>
                <FlatForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/flats/:id/edit"
            element={
              <ProtectedRoute>
                <FlatForm edit />
              </ProtectedRoute>
            }
          />

          <Route
            path="/flatmates"
            element={
              <ProtectedRoute>
                <Flatmates />
              </ProtectedRoute>
            }
          />
          <Route
            path="/flatmates/new"
            element={
              <ProtectedRoute>
                <FlatmateForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/flatmates/:id/edit"
            element={
              <ProtectedRoute>
                <FlatmateForm edit />
              </ProtectedRoute>
            }
          />

          <Route
            path="/roomshares"
            element={
              <ProtectedRoute>
                <Roomshares />
              </ProtectedRoute>
            }
          />
          <Route
            path="/roomshares/new"
            element={
              <ProtectedRoute>
                <RoomshareForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/roomshares/:id/edit"
            element={
              <ProtectedRoute>
                <RoomshareForm edit />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
