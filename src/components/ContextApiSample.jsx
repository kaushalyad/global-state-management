import React from "react";
import { useGlobalState, useGlobalDispatch } from "./GlobalStateContext";

const ContextApiSample = () => {
  const { user, theme } = useGlobalState();
  const dispatch = useGlobalDispatch();

  const handleLogin = () => {
    dispatch({ type: "SET_USER", payload: { name: "Kaushal Kumar Yadav" } });
  };

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <div className="mt-2">
      <p>User: {user ? user.name : "Guest"}</p>
      <p>Theme: {theme}</p>
      <button className="bg-red-300 mt-4 p-2 rounded-md" onClick={handleLogin}>
        Login
      </button>
      <button className="bg-red-300 p-2 ml-4 rounded-md" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ContextApiSample;
