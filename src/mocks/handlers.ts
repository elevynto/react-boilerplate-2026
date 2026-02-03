import { http, HttpResponse } from "msw";
import type { Character } from "@/types";

type NewCharacter = Omit<Character, "id">;

const seedCharacters: Character[] = [
  { id: 1770121791892, name: "Million Ants", image: "https://rickandmortyapi.com/api/character/avatar/226.jpeg" },
  { id: 1770121804131, name: "Zeta Alpha Rick", image: "https://rickandmortyapi.com/api/character/avatar/389.jpeg" },
];

let characters = [...seedCharacters];

export const handlers = [
  http.get("/api/characters", () => {
    return HttpResponse.json(characters);
  }),

  http.post("/api/characters", async ({ request }) => {
    const body = (await request.json()) as NewCharacter;

    if (!body?.name || !body?.image) {
      return HttpResponse.json({ message: "Missing name or image" }, { status: 400 });
    }

    const created: Character = {
      id: Date.now(),
      ...body,
    };

    characters = [created, ...characters];

    return HttpResponse.json(created, { status: 201 });
  }),
];
