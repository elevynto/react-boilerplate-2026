import { getCharacters, postCharacter } from "@/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components";

export const Characters = () => {
  // Access the client
  const queryClient = useQueryClient();

  // Queries
  const query = useQuery({ queryKey: ["characters"], queryFn: getCharacters });

  // Mutations
  const createCharacterMutation = useMutation({
    mutationFn: postCharacter,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["characters"] });
    },
  });

  return (
    <div>
      <h1 className="my-4 scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl">Characters</h1>
      <ul>
        {query.data?.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>

      <Button
        className="mt-4"
        onClick={() => {
          createCharacterMutation.mutate({
            name: "Debrah’s Partner",
            image: "https://rickandmortyapi.com/api/character/avatar/566.jpeg",
          });
        }}
      >
        Add Character
      </Button>
    </div>
  );
};
