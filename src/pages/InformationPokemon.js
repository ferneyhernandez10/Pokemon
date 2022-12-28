import { Box, Chip, Paper, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <div>
      <h1 className="text-center">
        <b>{id.charAt(0).toUpperCase() + id.slice(1)}</b>
      </h1>

      <Paper sx={{ display: "flex", justifyContent: "center" }}>
        <Stack direction="row" spacing={1}>
          {dataPokemon.types &&
            dataPokemon.types.map((item, index) => (
              <Chip
                key={index}
                label={
                  item.type.name.charAt(0).toUpperCase() +
                  item.type.name.slice(1)
                }
              />
            ))}
        </Stack>
      </Paper>

      <div className="contenedor">
        <img
          src={dataPokemon.sprites && dataPokemon.sprites.front_shiny}
          className="img-thumbnail"
          alt="pokemonImage"
        />
      </div>

      <Box>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange}>
              <Tab label="Abilities" value="1" />
              <Tab label="Moves" value="2" />
              <Tab label="stats" value="3" />
              <Tab label="Types" value="4" />
            </TabList>
          </Box>
          <TabPanel value="1">{abilities}</TabPanel>
          <TabPanel value="2">{moves}</TabPanel>
          <TabPanel value="3">{stats}</TabPanel>
          <TabPanel value="4">{types}</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};
