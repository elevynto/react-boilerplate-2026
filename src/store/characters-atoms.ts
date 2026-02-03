import { atom } from "jotai";
import type { Character } from "@/types";

export const charactersAtom = atom<Character[] | null>(null);
export const selectedCharacterAtom = atom<Character | null>(null);
