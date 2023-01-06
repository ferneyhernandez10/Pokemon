import { CardMedia } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import pokemonImage from "../picture/pokemonImage.jpg";

export const GetImage = () => {
  return (
    <Grid2 xs={12} md={8} lg={7}>
      <CardMedia
        component="img"
        height="450"
        image={pokemonImage}
        alt="pokemonImage"
      />
    </Grid2>
  );
};
