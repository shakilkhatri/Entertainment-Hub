import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
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
  const fetchTrailer = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    // setContent(data.results);
    let videoKey = data.results[0].key;
    // console.log(videoKey);
    window.open(`https://www.youtube.com/watch?v=${videoKey}`, "_blank");
  };
  useEffect(() => {
    // fetchTrailer();
  }, []);

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
            onClick={fetchTrailer}
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
