import { Chip } from "@mui/material";
import { Stack } from "@mui/system";

export const GetDataPokemonTypes = ({ dataPokemon }) => {
  return (
    <Stack direction="row" spacing={1}>
      {dataPokemon.types &&
        dataPokemon.types.map((item, index) => (
          <Chip
            key={index}
            label={
              item.type.name.charAt(0).toUpperCase() + item.type.name.slice(1)
            }
          />
        ))}
    </Stack>
  );
};
