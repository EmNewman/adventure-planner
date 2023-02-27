import * as React from "react";
import CategorySelector from "../features/category/CategorySelector";
import BinSelector from "../features/bin-list/BinSelector";
import PackingList from "../features/packing-list/PackingList";
import { Box, Container, Grid } from "@mui/material";

export default function Home() {
  return (
    <Container>
      <Box>
        <CategorySelector />
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <PackingList />
          </Grid>
          <Grid item xs={4}>
            <BinSelector />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
