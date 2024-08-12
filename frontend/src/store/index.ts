import { atom } from "recoil";

export const authorName = atom({
    key: 'authorName', 
    default: 'Anonymous',
  });