import create from "zustand";

const useStore = create((set) => ({
  loggedInUser: { username: "Priest", email: "priest@priest.com" },
  setUser: (loggedInUser) => set(() => ({ loggedInUser })),
}));

export default useStore;
