import { atom } from "recoil";

export const SCREEN_WIDTH = atom({
    default: window.document.documentElement.clientWidth,
    key: "SCREEN_WIDTH",
});

export const SCREEN_HEIGHT = atom({
    default: window.document.documentElement.clientHeight,
    key: "SCREEN_WIDTH",
});

export const MAP_LEVEL = atom({
    default: 3,
    key: "MAP_LEVEL",
});
