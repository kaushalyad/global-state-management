// components/SomeComponent.js
import React from "react";
import useGlobalStore from "./ZustandStores";

const ZustandSample = () => {
  const { user, theme, setUser, toggleTheme } = useGlobalStore();

  const handleLogin = () => {
    setUser({ name: "Kaushal Kumar Yadav" });
  };

  return (
    <div>
      <p>User: {user ? user.name : "Guest"}</p>
      <p>Theme: {theme}</p>
      <div className="mt-4">
        <button className="bg-red-300 p-2 rounded-md" onClick={handleLogin}>
          Login
        </button>
        <button
          className="bg-red-300 p-2 ml-4 rounded-md "
          onClick={toggleTheme}
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default ZustandSample;
