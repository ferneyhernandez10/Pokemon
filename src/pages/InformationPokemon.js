import {
  Card,
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

export const InformationPokemon = () => {
  const { id } = useParams();

  const [dataPokemon, setDataPokemon] = useState({});
  const [value, setValue] = useState("1");

  const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const getData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setDataPokemon(data);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const abilities =
    dataPokemon.abilities &&
    dataPokemon.abilities.map((ability, index) => (
      <div key={index}>{`${index + 1}. ${ability.ability.name}`}</div>
    ));

  const moves =
    dataPokemon.moves &&
    dataPokemon.moves.map((move, index) => (
      <div key={index}>{`${index + 1}. ${move.move.name}`}</div>
    ));

  const stats =
    dataPokemon.stats &&
    dataPokemon.stats.map((stat, index) => (
      <div key={index}>
        {`${index + 1}. ${stat.stat.name} - ${stat.base_stat}`}
      </div>
    ));

  const types =
    dataPokemon.types &&
    dataPokemon.types.map((type, index) => (
      <div key={index}>{`${index + 1}. ${type.type.name}`}</div>
    ));

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

            <CardMedia
              component="img"
              width="300"
              height="300"
              image={dataPokemon.sprites && dataPokemon.sprites.front_default}
              alt="pokemonImage"
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
              abilities={abilities}
              moves={moves}
              stats={stats}
              types={types}
            />
          </CardContent>
        </Card>
      </Grid2>
    </Container>
  );
};
