import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  user: null,
  theme: "light",
};

const GlobalStateContext = createContext(initialState);
const GlobalStateDispatchContext = createContext(null);

function globalStateReducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "TOGGLE_THEME":
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalStateReducer, initialState);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalStateDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalStateDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
export const useGlobalDispatch = () => useContext(GlobalStateDispatchContext);
