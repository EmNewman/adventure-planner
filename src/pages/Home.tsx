import * as React from "react";
import CategorySelector from "../components/CategorySelector";
import BinSelector from "../components/BinSelector";
import { Bin, Item } from "../types/types";
import PackingList from "../components/PackingList";
import { Box, Container, Grid } from "@mui/material";

// TODO get from backend
const tempBinList = [
  {
    name: "bin1",
    contents: ["test1", "2", "3", "4"],
  },
  {
    name: "bin2",
    contents: ["test1", "2", "3", "4"],
  },
  {
    name: "bin3",
    contents: ["test1", "2", "3", "4"],
  },
  {
    name: "bin4",
    contents: ["test1", "2", "3", "4"],
  },
  {
    name: "bin5",
    contents: ["test1", "2", "3", "4"],
  },
];

const tempItemList = [
  {
    name: "tent",
    tags: ["camping", "backpacking"],
  },
  {
    name: "skis",
    tags: ["skiing"],
  },
  {
    name: "hiking bag",
    tags: ["hiking"],
  },
  {
    name: "hiking pants",
    tags: ["backpacking", "hiking", "skiing"],
  },
];

export default function Home() {
  // TODO get category list from backend?
  const categories: Array<string> = [
    "skiing",
    "backpacking",
    "camping",
    "climbing",
  ];
  const [selectedCategories, setSelectedCategories] = React.useState<
    Array<string>
  >([]);
  const [binList, setBinList] = React.useState<Array<Bin>>(tempBinList);
  const [itemList, setItemList] = React.useState<Array<Item>>(tempItemList);
  const [checkedBins, setCheckedBins] = React.useState<Array<string>>([]);
  const [checkedPackingList, setCheckedPackingList] = React.useState<
    Array<string>
  >([]);

  return (
    <Container>
      <Box>
        <CategorySelector
          selected={selectedCategories}
          setSelected={setSelectedCategories}
          categories={categories}
          headerText="what will you be doing on this trip?"
        />
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <PackingList
              itemList={itemList}
              selectedCategories={selectedCategories}
              selectedBins={checkedBins}
              bins={binList}
              checked={checkedPackingList}
              setChecked={setCheckedPackingList}
            />
          </Grid>
          <Grid item xs={4}>
            <BinSelector
              binList={binList}
              checked={checkedBins}
              setChecked={setCheckedBins}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
