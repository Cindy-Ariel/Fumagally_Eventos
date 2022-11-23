import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export const ImgMediaCard = () => {
  return (
    <Card sx={{ maxWidth: 450, maxHeight: 500 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="190"
        image="/images/barraca2x2.jpg"
      />
      <CardContent>
        Lizard Lizards are a widespread group of squamate reptiles.
      </CardContent>
      <CardActions>
       
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
