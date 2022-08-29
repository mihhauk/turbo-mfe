"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.tsx
var ui_exports = {};
__export(ui_exports, {
  Count: () => Count,
  lol: () => lol,
  useSharedState: () => useSharedState
});
module.exports = __toCommonJS(ui_exports);

// useSharedState.ts
var import_zustand = __toESM(require("zustand"));
var import_middleware = require("zustand/middleware");
var useSharedState = (0, import_zustand.default)(
  (0, import_middleware.persist)(
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
var import_jsx_runtime = require("react/jsx-runtime");
var Count = () => {
  const { count } = useSharedState();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
    children: [
      "Current Count: ",
      count
    ]
  });
};

// index.tsx
var lol = "LOL";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Count,
  lol,
  useSharedState
});
