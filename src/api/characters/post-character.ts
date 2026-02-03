export const postCharacter = async (newCharacter: { name: string; image: string }) => {
  // Placeholder implementation
  window.alert(JSON.stringify(newCharacter, null, 2));
  return { id: Date.now(), ...newCharacter };
};
