import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function ProtectedRoute() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // initial load
    const savedUser = localStorage.getItem("user");
    setUser(savedUser ? JSON.parse(savedUser) : null);
    setLoading(false);

    // same-tab updates (triggered from Navbar)
    const handleUserChanged = () => {
      const updated = localStorage.getItem("user");
      setUser(updated ? JSON.parse(updated) : null);
    };

    // cross-tab updates
    const handleStorage = (e) => {
      if (e.key === "user") {
        setUser(e.newValue ? JSON.parse(e.newValue) : null);
      }
    };

    window.addEventListener("userChanged", handleUserChanged);
    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("userChanged", handleUserChanged);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  // show loading indicator briefly while checking user state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-600 text-lg">
        Checking authentication...
      </div>
    );
  }

  // If no user, redirect to login and preserve the intended route
  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // If user is logged in, render the child route(s)
  return <Outlet />;
}
