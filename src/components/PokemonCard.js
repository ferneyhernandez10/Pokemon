import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const PokemonCard = ({ name }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/information/${name}`);
  };
  return (
    <Card>
      <CardActionArea onClick={handleOnClick}>
        <CardContent>
          <Typography variant="h4" align="center" textTransform="capitalize">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
