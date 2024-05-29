import "./App.css";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import ReduxStore from "./components/ReduxStore";
import { GlobalStateProvider } from "./components/GlobalStateContext";
import { enableStaticRendering } from "mobx-react-lite";
enableStaticRendering(typeof window === "undefined");
function App() {
  return (
    <GlobalStateProvider>
      <Provider store={ReduxStore}>
        <Home />
      </Provider>
    </GlobalStateProvider>
  );
}

export default App;
