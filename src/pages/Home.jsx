import React from "react";
import ContextApiSample from "../components/ContextApiSample";
import ZustandSample from "../components/ZustandSample";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import MobXSample from "../components/MobXSample";
import ReduxStoreSample from "../components/ReduxStoreSample";
const Home = () => {
  const codeStringForContext = `
  import React, { createContext, useState, useContext } from 'react';
  
  const GlobalContext = createContext();
  
  export const GlobalProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [theme, setTheme] = useState('light');
  
    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
  
    return (
      <GlobalContext.Provider value={{ user, setUser, theme, toggleTheme }}>
        {children}
      </GlobalContext.Provider>
    );
  };
  
  export const useGlobalContext = () => useContext(GlobalContext);
  `;
  const codeStringForContextSample = `
  import React from 'react';
  import { GlobalProvider } from './GlobalStateContext';
  
  function MyApp({ Component, pageProps }) {
    return (
      <GlobalProvider>
        <Component />
      </GlobalProvider>
    );
  }
  
  export default MyApp;
  `;
  const codeStringForRedux = `
  import { configureStore, createSlice } from '@reduxjs/toolkit';
  
  const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
      setUser: (state, action) => action.payload,
    },
  });

  const themeSlice = createSlice({
    name: 'theme',
    initialState: 'light',
    reducers: {
      toggleTheme: (state) => (state === 'light' ? 'dark' : 'light'),
    },
  });
  
  export const { setUser } = userSlice.actions;
  export const { toggleTheme } = themeSlice.actions;
  
  const store = configureStore({
    reducer: {
      user: userSlice.reducer,
      theme: themeSlice.reducer,
    },
  });
  
  export default store;
  `;
  const codeStringForReduxSample = `
  import React from 'react';
  import { Provider } from 'react-redux';
  import store from './ReduxStore';
  
  function MyApp({ Component, pageProps }) {
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
  
  export default MyApp;
  `;
  const codeStringForZustand = `
  import { create } from 'zustand';
  
  const useGlobalStore = create((set) => ({
    user: null,
    theme: 'light',
    setUser: (user) => set({ user }),
    toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
  }));
  
  export default useGlobalStore;
  `;
  const codeStringForMobX = `
  import { makeAutoObservable } from 'mobx';
  
  class GlobalStore {
    user = null;
    theme = 'light';
  
    constructor() {
      makeAutoObservable(this);
    }
  
    setUser(user) {
      this.user = user;
    }
  
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
    }
  }
  
  const globalStore = new GlobalStore();
  export default globalStore;
  `;
  const codeStringForMobXSample = `
  import React from 'react';
  import { observer } from 'mobx-react-lite';
  import globalStore from './MobXStore';
  
  const MobXSample = observer(() => {
    const { user, theme, setUser, toggleTheme } = globalStore;
  
    const handleLogin = () => {
      setUser({ name: 'Kaushal Kumar Yadav' });
    };
  
    return (
      <div>
        <p>User: {user ? user.name : 'Guest'}</p>
        <p>Theme: {theme}</p>
        <button onClick={handleLogin}>Login</button>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <div>
          {theme === 'light' ? (
            <span>The theme is light</span>
          ) : (
            <span>The theme is dark</span>
          )}
        </div>
      </div>
    );
  });
  
  export default MobXSample;
  `;
  const codeStringForZustandSample = `
  import React from 'react';
  import useGlobalStore from './ZustandStore';
  
  const ZustandSample = () => {
    const { user, theme, setUser, toggleTheme } = useGlobalStore();
  
    const handleLogin = () => {
      setUser({ name: 'Kaushal Kumar Yadav' });
    };
  
    return (
      <div>
        <p>User: {user ? user.name : 'Guest'}</p>
        <p>Theme: {theme}</p>
        <button onClick={handleLogin}>Login</button>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    );
  };
  
  export default ZustandSample;
  `;
  return (
    <div>
      <div className="pb-10">
        <div className="w-full h-10 ">
          <p className=" text-lime-600 bg-gray-300 text-center text-3xl">
            {" "}
            POC For Context API in React.Js
          </p>
        </div>
        <div>
          <p className="text-lime-600 mt-4">Introduction:</p>
          <p className="mt-2">
            The Context API is a built-in feature of React that allows for state
            sharing across components without prop drilling. It is useful for
            managing global state in small to medium-sized applications.
          </p>
        </div>
        <div className="mt-4">
          <p className="text-lime-600">Setup and Installation:</p>
          <p className="mt-2">
            No additional installation is needed as Context API is a part of
            React.
          </p>
        </div>
        <div className="mt-4">
          <p className="text-lime-600">Implementation:</p>
          <p className="text-red-400">Create a Global State: </p>
          <div className="mt-2">
            <SyntaxHighlighter language="javascript" style={docco}>
              {codeStringForContext}
            </SyntaxHighlighter>
          </div>
          <div className="text-red-400 mb-2 mt-2">
            Using ContextAPI For Sample
          </div>
          <SyntaxHighlighter language="javascript" style={docco}>
            {codeStringForContextSample}
          </SyntaxHighlighter>
        </div>
        <div className="mt-4">
          <p className="text-lime-600">Pros and Cons:</p>
          <p className="mt-3">Pros:</p>
          <div className="mt-2">
            <p>1.Simple to implement for small to medium applications.</p>
            <p>2.No external dependencies.</p>
          </div>
          <p className="mt-3">Cons:</p>
          <div className="mt-2">
            <p>1.Can lead to prop drilling if not used with hooks.</p>
            <p>2.Performance issues with deeply nested components.</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lime-600">Learnings:</p>
          <p className="mt-2">
            Context API is straightforward and useful for applications with
            limited global state requirements. However, it may not scale well
            for larger applications with complex state management needs
          </p>
        </div>
        <div>
          <p className="mt-4 text-lime-600">ContextApi Sample</p>
          <ContextApiSample />
        </div>
      </div>
      <div className="pb-10">
        <div className="w-full h-10 mb-4">
          <p className=" text-lime-600 bg-gray-300 text-center text-3xl">
            {" "}
            POC For Redux in React.js
          </p>
        </div>
        <div>
          <p className="text-lime-600 mt-4">Introduction:</p>
          <p className="mt-2">
            Redux Toolkit is the official, recommended way to write Redux logic.
            It simplifies store setup and reduces boilerplate code by providing
            a set of tools and best practices for efficient Redux development.
          </p>
        </div>
        <div className="mt-4">
          <p className="text-lime-600">Setup and Installation:</p>
          <div className="mt-2">
            <p className="text-lime-600">Install:</p>
            <p className="mt-2 p-4 bg-black text-white">
              {" "}
              npm install redux react-redux
            </p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lime-600">Implementation:</p>
          <p className="text-red-400">Create a Global State: </p>
          <div className="mt-2">
            <SyntaxHighlighter language="javascript" style={docco}>
              {codeStringForRedux}
            </SyntaxHighlighter>
          </div>
          <div className="text-red-400 mb-2 mt-2">Using Redux For Sample</div>
          <SyntaxHighlighter language="javascript" style={docco}>
            {codeStringForReduxSample}
          </SyntaxHighlighter>
        </div>
        <div className="mt-4">
          <p className="text-lime-600">Pros and Cons:</p>
          <p className="mt-3">Pros:</p>
          <div className="mt-2">
            <p>1.Strongly typed and predictable state management.</p>
            <p>2.Excellent developer tools and middleware support.</p>
          </div>
          <p className="mt-3">Cons:</p>
          <div className="mt-2">
            <p>1.Can be overkill for small applications.</p>
            <p>2.Boilerplate code can be cumbersome.</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lime-600">Learnings:</p>
          <p className="mt-2">
            <p>
              1. Redux Toolkit simplifies the process of setting up a Redux
              store.
            </p>
            <p>
              2. It reduces boilerplate code by using createSlice to handle
              actions and reducers.
            </p>
            <p>
              3. The configureStore function automatically sets up the Redux
              DevTools Extension and includes some default middleware.
            </p>
          </p>
        </div>
        <div>
          <p className="mt-4 text-lime-600">Redux Sample</p>
          <ReduxStoreSample />
        </div>
      </div>
      <div className="pb-10">
        <div className="w-full h-10">
          <p className=" text-lime-600 bg-gray-300 text-center text-3xl">
            {" "}
            POC For MobX in React.Js
          </p>
        </div>
        <div>
          <p className="text-lime-600 mt-4">Introduction:</p>
          <p className="mt-2">
            MobX is a simple, scalable, and battle-tested state management
            solution for React applications. It allows you to manage and react
            to observable state changes in a very straightforward manner.
          </p>
        </div>
        <div className="mt-4">
          <p className="text-lime-600">Setup and Installation:</p>
          <div className="mt-2">
            <p className="text-lime-600">Install:</p>
            <p className="mt-2 p-4 bg-black text-white">
              {" "}
              npm install mobx mobx-react-lite
            </p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lime-600">Implementation:</p>
          <p className="text-red-400">Create a MobX Store: </p>
          <div className="mt-2">
            <SyntaxHighlighter language="javascript" style={docco}>
              {codeStringForMobX}
            </SyntaxHighlighter>
          </div>
          <div className="text-red-400 mb-2 mt-2">Using MobX For Sample</div>
          <SyntaxHighlighter language="javascript" style={docco}>
            {codeStringForMobXSample}
          </SyntaxHighlighter>
        </div>
        <div className="mt-4">
          <p className="text-lime-600">Pros and Cons:</p>
          <p className="mt-3">Pros:</p>
          <div className="mt-2">
            <p>
              1. Simplicity: Easy to learn and use with a very straightforward
              API.
            </p>
            <p>
              2. Reactivity: Automatically tracks state changes and updates
              components efficiently.
            </p>
            <p>
              3. Flexibility: Can be used in both small and large applications
              without much setup.
            </p>
            <p>
              4. Minimal Boilerplate: Reduces the amount of code needed for
              state management.
            </p>
          </div>
          <p className="mt-3">Cons:</p>
          <div className="mt-2">
            <p>
              1. Learning Curve: While simpler than Redux, MobX's concepts of
              observables and reactions might take some time to understand.
            </p>
            <p>
              2. Implicitness: The automatic nature of state tracking can
              sometimes make it harder to debug.
            </p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lime-600">Learnings:</p>
          <div className="mt-2">
            <p>
              1. MobX uses observable state and reactions to manage state
              changes efficiently.
            </p>
            <p>
              2. It allows for easy state management with minimal boilerplate.
            </p>
            <p>
              3. MobX is very flexible and can be used in small and large
              applications alike.{" "}
            </p>
          </div>
        </div>
        <div>
          <p className="mt-4 text-lime-600">MobX Sample</p>
          <MobXSample />
        </div>
      </div>
      <div className="pb-10">
        <div className="w-full h-10">
          <p className=" text-lime-600 bg-gray-300 text-center text-3xl">
            {" "}
            POC For Zustand in React.Js
          </p>
        </div>
        <div>
          <p className="text-lime-600 mt-4">Introduction:</p>
          <p className="mt-2">
            Zustand is a small, fast, and scalable state management solution for
            React applications. It provides a minimalistic API and allows for
            efficient state updates without the need for boilerplate code.
          </p>
        </div>
        <div className="mt-4">
          <p className="text-lime-600">Setup and Installation:</p>
          <div className="mt-2">
            <p className="text-lime-600">Install:</p>
            <p className="mt-2 p-4 bg-black text-white"> npm install zustand</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lime-600">Implementation:</p>
          <p className="text-red-400">Create a Zustand Store: </p>
          <div className="mt-2">
            <SyntaxHighlighter language="javascript" style={docco}>
              {codeStringForZustand}
            </SyntaxHighlighter>
          </div>
          <div className="text-red-400 mb-2 mt-2">Using Zustand For Sample</div>
          <SyntaxHighlighter language="javascript" style={docco}>
            {codeStringForZustandSample}
          </SyntaxHighlighter>
        </div>
        <div className="mt-4">
          <p className="text-lime-600">Pros and Cons:</p>
          <p className="mt-3">Pros:</p>
          <div className="mt-2">
            <p>
              1. Minimalistic and Simple: Easy to learn and use with minimal
              boilerplate.
            </p>
            <p>
              2. Performance: Efficient state updates with a small bundle size.
            </p>
            <p>
              3. Flexibility: Can be used in both small and large applications.
            </p>
            <p>
              4. No Provider Required: Directly use the store in your components
              without needing a Provider.
            </p>
          </div>
          <p className="mt-3">Cons:</p>
          <div className="mt-2">
            <p>
              1. Smaller Ecosystem: Compared to Redux, Zustand has a smaller
              ecosystem and community.
            </p>
            <p>
              2. Less Structured: May not provide as much structure for complex
              state management needs compared to Redux.
            </p>
          </div>
          <div>
            <p></p>
            <p></p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lime-600">Learnings:</p>
          <div className="mt-2">
            <p>
              1. Zustand offers a very simple and minimalistic API for state
              management.
            </p>
            <p>2. It is easy to set up and use without boilerplate code.</p>
            <p>
              3. Zustand can efficiently handle state updates, making it
              suitable for both small and large applications.
            </p>
          </div>
        </div>
        <div>
          <p className="mt-4 text-lime-600">Zustand Sample</p>
          <ZustandSample />
        </div>
      </div>
    </div>
  );
};

export default Home;
