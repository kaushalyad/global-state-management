// stores/useGlobalStore.js
import create from "zustand";

const useGlobalStore = create((set) => ({
  user: null,
  theme: "light",
  setUser: (user) => set({ user }),
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
}));

export default useGlobalStore;
