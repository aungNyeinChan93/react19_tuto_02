import { create } from 'zustand'

interface CounterStore {
    count: number,
    increment: () => void,
    decrement: () => void,
    reset: () => void,
};

const useCounterStore = create<CounterStore>((set) => ({
    count: 0,
    increment: () => set(state => {
        return { count: state.count + 1 }
    }),
    decrement: () => set(state => ({ count: state.count - 1 })),
    reset: () => set(() => ({ count: 0 }))
}));


export default useCounterStore;