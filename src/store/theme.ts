import { create } from "zustand";

interface State {
    theme: 'light' | 'dark',
    toggleTheme: () => void
}

export const useTheme = create<State>((set) => ({
    theme: 'light',
    toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
}))