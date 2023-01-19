import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Modal,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export const ImageModal = ({ dataPokemon, open, handleClose }) => {
  const pokemonImages = {
    back_default: dataPokemon?.sprites?.back_default,
    back_female: dataPokemon?.sprites?.back_female,
    back_shiny: dataPokemon?.sprites?.back_shiny,
    back_shiny_female: dataPokemon?.sprites?.back_shiny_female,
    front_default: dataPokemon?.sprites?.front_default,
    front_female: dataPokemon?.sprites?.front_female,
    front_shiny: dataPokemon?.sprites?.front_shiny,
    front_shiny_female: dataPokemon?.sprites?.front_shiny_female,
    other_dream_world_front_default:
      dataPokemon?.sprites?.other.dream_world.front_default,
    other_dream_world_front_female:
      dataPokemon?.sprites?.other.dream_world.front_female,
    other_home_front_default: dataPokemon?.sprites?.other.home.front_default,
    other_home_front_female: dataPokemon?.sprites?.other.home.front_female,
    other_home_front_shiny: dataPokemon?.sprites?.other.home.front_shiny,
    other_home_front_shiny_female:
      dataPokemon?.sprites?.other.home.front_shiny_female,
    other_official_artwork_front_default:
      dataPokemon?.sprites?.other["official-artwork"].front_default,
    other_official_artwork_front_shiny:
      dataPokemon?.sprites?.other["official-artwork"].front_shiny,
  };

  const arrayPokemonImages = Object.entries(pokemonImages);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 2,
  };

  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <ImageList
          sx={{
            height: 560,
          }}
          cols={matchDownMd ? 1 : 2}
          gap={3}
        >
          {arrayPokemonImages
            .filter((image) => image[1] !== null)
            .map((image, index) => (
              <ImageListItem key={index}>
                <img src={image[1]} alt="spriteImages" loading="Loading" />
                <ImageListItemBar title={image[0]} />
              </ImageListItem>
            ))}
        </ImageList>
      </Box>
    </Modal>
  );
};
