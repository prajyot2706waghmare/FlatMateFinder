/* ===================================================================
File: src/context/AuthContext.jsx
Simple auth provider that stores token + profile in localStorage
=================================================================== */
import React, { createContext, useContext, useEffect, useState } from "react";
import { loginAdmin, registerAdmin, getAdminProfile } from "../api/adminApi";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("admin_profile");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (user) localStorage.setItem("admin_profile", JSON.stringify(user));
    else localStorage.removeItem("admin_profile");
  }, [user]);

  const login = async (creds) => {
    const data = await loginAdmin(creds); // expects { token, user }
    localStorage.setItem("admin_token", data.token);
    // optionally fetch profile
    const profile = await getAdminProfile();
    setUser(profile);
    return profile;
  };

  const register = async (creds) => {
    const data = await registerAdmin(creds);
    localStorage.setItem("admin_token", data.token);
    const profile = await getAdminProfile();
    setUser(profile);
    return profile;
  };

  const addAdmin = async (creds) => {
    const data = await registerAdmin(creds);
    // Don't update token or user, just return the response
    return data;
  };

  const logout = () => {
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_profile");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, login, register, addAdmin, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
