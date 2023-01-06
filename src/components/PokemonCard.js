import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const PokemonCard = ({ name }) => {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography align="center" variant="h6">
            <Link to={`/information/${name}`}>{name}</Link>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
