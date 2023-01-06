import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab } from "@mui/material";
import { Box } from "@mui/system";

export const GetDataPokemon = ({
  value,
  handleChange,
  abilities,
  moves,
  stats,
  types,
}) => {
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
    </TabContext>
  );
};
