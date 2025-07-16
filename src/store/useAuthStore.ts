import { create } from "zustand";

interface User {
    name: string,
    email: string,
    password: string | number
};

interface AuthStore {
    user: User,
    setUser: (newUser: User) => void,
    changePassword: (password: string) => void,
};

const useAuthStore = create<AuthStore>((set) => {
    const user = {
        name: '',
        email: '',
        password: ''
    };

    const setUser = (newUser: User) => {
        return set(() => {
            return { user: newUser }
        })
    };

    const changePassword = (newPassword: string) => {
        return set(state => ({ user: { ...state.user, password: newPassword + '👌👌👌' } }))
    }

    return { user, setUser, changePassword }
});

export default useAuthStore;