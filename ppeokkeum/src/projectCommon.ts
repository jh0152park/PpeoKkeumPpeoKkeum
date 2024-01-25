import { atom } from "recoil";

export interface ISmokingArea {
    id?: string;
    address: string;
    location: string;
    latitude: string | number;
    longitude: string | number;
    isGovernmentData: boolean;
}

export const SCREEN_WIDTH = atom({
    default: window.document.documentElement.clientWidth,
    key: "SCREEN_WIDTH",
});

export const SCREEN_HEIGHT = atom({
    default: window.document.documentElement.clientHeight,
    key: "SCREEN_HEIGHT",
});

export const MAP_LEVEL = atom({
    default: 3,
    key: "MAP_LEVEL",
});

export const CURRENT_LATITUDE = atom({
    default: 37.5710015,
    key: "CURRENT_LATITUDE",
});

export const CURRENT_LONGITUDE = atom({
    default: 126.9769419,
    key: "CURRENT_LONGITUDE",
});
