// components/SomeComponent.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser, toggleTheme } from "./ReduxStore";

const ReduxStoreSample = () => {
  const user = useSelector((state) => state.user);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(setUser({ name: "John Doe" }));
  };

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div>
      <p>User: {user ? user.name : "Guest"}</p>
      <p>Theme: {theme}</p>
      <button className="bg-red-400 p-2 rounded-md mt-2" onClick={handleLogin}>
        Login
      </button>
      <button
        className="bg-red-400 ml-4 p-2 rounded-md"
        onClick={handleToggleTheme}
      >
        Toggle Theme
      </button>
      <div>
        {theme === "light" ? (
          <span>The theme is light</span>
        ) : (
          <span>The theme is dark</span>
        )}
      </div>
    </div>
  );
};

export default ReduxStoreSample;
