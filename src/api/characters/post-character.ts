import type { Character } from "@/types";

type NewCharacter = Omit<Character, "id">;

export const postCharacter = async (newCharacter: NewCharacter): Promise<Character> => {
  const response = await fetch("/api/characters", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCharacter),
  });

  if (!response.ok) {
    throw new Error("Failed to create character");
  }

  return response.json();
};
