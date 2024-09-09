
import { create } from 'zustand';

const useStore = create((set) => ({
  // States
  menuOpen: '', // state values can set to "", [], {}, or null; also add a comma to add more

  // Actions
  setMenuOpen: (menuOpen) => set({ menuOpen }) // look at the app.jsx to see how this is implemented

}));

export default useStore;
