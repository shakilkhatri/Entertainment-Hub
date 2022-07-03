import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Badge, CardActionArea } from "@mui/material";
import { img_300, unavailable } from "../../config";
import "./Card.css";

export default function MovieCard({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
  overview,
}) {
  return (
    <Badge
      badgeContent={vote_average.toFixed(2)}
      color={vote_average > 6 ? "primary" : "secondary"}
    >
      <Card
        sx={{ boxShadow: "3px 3px 5px black", transition: "transform 0.25s" }}
        className="Card"
      >
        <CardActionArea>
          <CardMedia
            component="img"
            // height="auto"
            image={poster ? `${img_300}${poster}` : unavailable}
            alt={title}
            className="image"
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle2" component="div">
              {title}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {/* {overview} */}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Badge>
  );
}
