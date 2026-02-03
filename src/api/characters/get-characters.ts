import type { Character } from "@/types";

export const getCharacters = async (): Promise<Character[]> => {
  const response = await fetch("/api/characters");

  if (!response.ok) {
    throw new Error("Failed to fetch characters");
  }

  return response.json();
};
