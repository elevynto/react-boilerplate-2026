import type { Character } from "@/types";

interface NewCharacter extends Omit<Character, "id"> {}

export const postCharacter = async (newCharacter: NewCharacter): Promise<Character> => {
  // Placeholder implementation
  window.alert(JSON.stringify(newCharacter, null, 2));
  return { id: Date.now(), ...newCharacter };
};
