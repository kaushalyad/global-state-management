// src/components/MobXSample.jsx
import React from "react";
import { observer } from "mobx-react-lite";
import store from "./MobXStore";

const MobXSample = observer(() => {
  const handleLogin = () => {
    store.setUser({ name: "John Doe" });
  };

  const handleToggleTheme = () => {
    store.toggleTheme();
  };

  return (
    <div>
      <p>User: {store.user ? store.user.name : "Guest"}</p>
      <p>Theme: {store.theme}</p>
      <button className="bg-red-400 p-2 rounded-md" onClick={handleLogin}>
        Login
      </button>
      <button
        className="bg-red-400 ml-4 p-2 rounded-md"
        onClick={handleToggleTheme}
      >
        Toggle Theme
      </button>
      <div>
        {store.theme === "light" ? (
          <span>The theme is light</span>
        ) : (
          <span>The theme is dark</span>
        )}
      </div>
    </div>
  );
});

export default MobXSample;
