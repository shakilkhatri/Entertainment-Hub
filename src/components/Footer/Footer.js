import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MovieIcon from "@mui/icons-material/Movie";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import "./Footer.css";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const [value, setValue] = React.useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) navigate("/");
    else if (value === 1) navigate("/movies");
    else if (value === 2) navigate("/series");
  }, [value]);

  return (
    <footer className="Footer">
      <Box>
        <BottomNavigation
          sx={{ backgroundColor: "#22043e" }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            style={{ color: value === 0 ? "yellowgreen" : "lightgray" }}
            label="Trending"
            className="Trending"
            icon={<TrendingUpIcon />}
          />
          <BottomNavigationAction
            style={{ color: value === 1 ? "yellowgreen" : "lightgray" }}
            label="Movies"
            className="Movies"
            icon={<MovieIcon />}
          />
          <BottomNavigationAction
            style={{ color: value === 2 ? "yellowgreen" : "lightgray" }}
            label="Series"
            className="Series"
            icon={<LiveTvIcon />}
          />
        </BottomNavigation>
      </Box>
    </footer>
  );
}
