import { create } from "zustand"

interface CountState {
	count: number
	increaseCount: () => void
	decreaseCount: () => void
	removeAllCount: () => void
}

export const useCountStore = create<CountState>()((set) => ({
	count: 5,
	increaseCount: () => set((state) => ({ count: state.count + 1 })),
	decreaseCount: () => set((state) => ({ count: state.count - 1 })),
	removeAllCount: () => set({ count: 0 })
}))
