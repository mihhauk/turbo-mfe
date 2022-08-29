import * as zustand from 'zustand';
import * as React from 'react';

declare type State = {
    count: number;
    increment: () => void;
    decrement: () => void;
};
declare const useSharedState: zustand.UseBoundStore<State, zustand.StoreApi<State>>;

declare const Count: React.FC;

declare const lol = "LOL";

export { Count, lol, useSharedState };
