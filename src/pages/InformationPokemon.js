import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { GetDataPokemonTypes } from "../components/GetDataPokemonTypes";
import { GetDataPokemon } from "../components/GetDataPokemon";
import { ImageModal } from "../components/ImageModal";

export const InformationPokemon = () => {
  const { id } = useParams();

  const [dataPokemon, setDataPokemon] = useState({});
  const [value, setValue] = useState("1");
  const [open, setOpen] = useState(false);

  const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const getData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setDataPokemon(data);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const elementos = [
    { type: "Fire", color: "red" },
    { type: "Water", color: "blue" },
    { type: "Electric", color: "yellow" },
  ];

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container style={{ background: "blue", padding: "0", maxWidth: "100%" }}>
      <Grid2 xs={12} display="flex" justifyContent="center" alignItems="center">
        <Card sx={{ maxWidth: 500 }} style={{ margin: "50px" }}>
          <CardContent>
            <Typography variant="h3">
              <b>{id.charAt(0).toUpperCase() + id.slice(1)}</b>
            </Typography>

            <GetDataPokemonTypes dataPokemon={dataPokemon} />

            <CardActionArea onClick={handleOpen}>
              <CardMedia
                component="img"
                width="300"
                height="300"
                image={dataPokemon.sprites && dataPokemon.sprites.front_default}
                alt="pokemonImage"
              />
            </CardActionArea>

            <ImageModal
              dataPokemon={dataPokemon}
              open={open}
              handleClose={handleClose}
            />

            {/* <div className="contenedor">
              <img
                src={dataPokemon.sprites && dataPokemon.sprites.front_shiny}
                className="img-thumbnail"
                alt="pokemonImage"
              />
            </div> */}
            <GetDataPokemon
              value={value}
              handleChange={handleChange}
              dataPokemon={dataPokemon}
            />
          </CardContent>
        </Card>
      </Grid2>
    </Container>
  );
};
