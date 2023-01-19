import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Link, Tab } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { TabsModal } from "./TabsModal";

export const GetDataPokemon = ({ value, handleChange, dataPokemon }) => {
  const [open, setOpen] = useState(false);
  const [urlModal, setUrlModal] = useState("");

  const handleOpen = (url) => {
    setUrlModal(url);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const abilities =
    dataPokemon.abilities &&
    dataPokemon.abilities.map((ability, index) => (
      <div key={index}>
        <Link
          component="button"
          variant="body1"
          underline="hover"
          onClick={() => handleOpen(ability.ability.url)}
        >
          {`${index + 1}. ${ability.ability.name}`}
        </Link>
      </div>
    ));

  const moves =
    dataPokemon.moves &&
    dataPokemon.moves.map((move, index) => (
      <div key={index}>
        <Link
          component="button"
          variant="body1"
          underline="hover"
          onClick={() => handleOpen(move.move.url)}
        >
          {`${index + 1}. ${move.move.name}`}
        </Link>
      </div>
    ));

  const stats =
    dataPokemon.stats &&
    dataPokemon.stats.map((stat, index) => (
      <div key={index}>
        {`${index + 1}. ${stat.stat.name} - ${stat.base_stat}`}
      </div>
    ));

  const types = dataPokemon?.types?.map((type, index) => (
    <div key={index}>{`${index + 1}. ${type.type.name}`}</div>
  ));

  return (
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
      <TabsModal open={open} handleClose={handleClose} urlModal={urlModal} />
    </TabContext>
  );
};
