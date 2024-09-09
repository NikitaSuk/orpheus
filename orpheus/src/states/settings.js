import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

export const useSettingsStore = create(
  persist(
    (set, get) => ({
    }),
    {
      name: 'user-settings-storage',
      storage: createJSONStorage(() => sessionStorage)
    },
  ),
)