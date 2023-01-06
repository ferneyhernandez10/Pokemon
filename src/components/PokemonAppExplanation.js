import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export const PokemonAppExplanation = () => {
  return (
    <Grid2 item xs={12} md={4} lg={5}>
      <Typography variant="h6" gutterBottom>
        - Explicacion de la pagina de pokemones
      </Typography>
      <Typography variant="body1" gutterBottom>
        Esta aplicación está diseñada para que encuentres en el inicio un
        listado de cien pokemon la cual tiene un buscador con funcionabilidad
        que dependiendo de lo que se escriba aparece un selecto listado de
        Pokemon , al darle click en el nombre del Pokemon que elija lo enviara a
        otra pestaña donde encontrara el nombre, la imagen, unas de las
        características que lo identifica entre ellas podemos encontrar:
        Habilidades, Movimientos, Estadísticas y Tipos.
      </Typography>
      <Typography variant="h6" gutterBottom>
        - Explicacion de las tecnologias que se ha aplicado en el proyecto
      </Typography>
      <Typography variant="body1">
        Las tecnologías que se han utilizado para crear este proyecto han sido
        React con la cual hemos traido la informacion de la appi de los cien
        pokemon y se ha puesto en funcionalidad y con Material UI nos hemos
        ayudado para el diseño.
      </Typography>
    </Grid2>
  );
};

//   const appExplanation = pokemonAppExplanation();
