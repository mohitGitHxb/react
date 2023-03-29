import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Feeds = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: "auto", md: 2 },
        }}
      >
        Sidebar
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "white" }}
        >
          Copyright 2023 Ecam Resources
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feeds;
