// useSharedState.ts
import create from "zustand";
import { persist } from "zustand/middleware";
var useSharedState = create(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 }))
    }),
    {
      name: "app-state"
    }
  )
);

// Count.tsx
import { jsxs } from "react/jsx-runtime";
var Count = () => {
  const { count } = useSharedState();
  return /* @__PURE__ */ jsxs("h1", {
    children: [
      "Current Count: ",
      count
    ]
  });
};

// index.tsx
var lol = "LOL";
export {
  Count,
  lol,
  useSharedState
};
