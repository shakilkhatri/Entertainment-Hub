import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationRounded({ setPage }) {
  const handlePageChange = (Page) => {
    setPage(Page);
    window.scroll(0, 0);
  };
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <Stack spacing={2}>
        <Pagination
          onChange={(e) => handlePageChange(e.target.textContent)}
          count={10}
          variant="outlined"
          shape="rounded"
        />
      </Stack>
    </div>
  );
}
