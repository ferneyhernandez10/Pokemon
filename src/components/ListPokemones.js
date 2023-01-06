import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { SearchPokemon } from "./SearchPokemon";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { PokemonAppExplanation } from "./PokemonAppExplanation";
import { GetImage } from "./GetImage";
import { PokemonCard } from "./PokemonCard";

export const ListPokemones = () => {
  const [pokemones, setPokemones] = useState([]);
  const [search, setSearch] = useState("");

  const URL = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";

  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setPokemones(data.results);
  };

  const onSearcher = ({ target }) => {
    setSearch(target.value);
  };

  let pokemonResult = [];
  if (!search) {
    pokemonResult = pokemones;
  } else {
    pokemonResult = pokemones.filter((element) =>
      element.name.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }

  useEffect(() => {
    showData();
  }, []);

  return (
    <Container>
      <Grid2 container spacing={2}>
        <GetImage />
        <PokemonAppExplanation />
        <Grid2 xs={12} md={12} lg={12}>
          <SearchPokemon searchTerm={onSearcher} search={search} />
        </Grid2>
        <Box sx={{ flexGrow: 1 }}>
          <Grid2 container spacing={2} columns={{ xs: 1, sm: 8, md: 12 }}>
            {pokemonResult.map((pokemon, index) => (
              <Grid2 key={index} xs={4} md={4} lg={4}>
                <PokemonCard name={pokemon.name} />
              </Grid2>
            ))}
          </Grid2>
        </Box>
      </Grid2>
    </Container>
  );
};
