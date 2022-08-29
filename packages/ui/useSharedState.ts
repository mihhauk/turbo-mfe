import create from "zustand";
import { persist } from "zustand/middleware"

type State = {
    count: number;
    increment: () => void
    decrement: () => void
}

export const useSharedState = create<State>(
    persist(
      (set) => ({
                count: 0,
                increment: () => set((state) => ({count: state.count +1})),
                decrement: () => set((state) => ({count: state.count -1}))
            }),
      {
        name: 'app-state',
      }
    )
)