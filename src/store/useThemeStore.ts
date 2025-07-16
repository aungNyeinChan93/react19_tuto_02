import { create } from 'zustand'

type Theme = 'light' | 'dark';

interface ThemeStore {
    theme: Theme,
    changeTheme: () => void
};

const useThemeStore = create<ThemeStore>((set) => {

    const theme = 'light';

    const changeTheme = () => {
        return set(state => ({ theme: state.theme === 'light' ? "dark" : 'light' }))
    }

    return { theme, changeTheme }
});

export default useThemeStore;

