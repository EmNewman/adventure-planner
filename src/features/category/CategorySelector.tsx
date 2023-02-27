import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import { Paper, Typography } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { toggleSelected } from "./categorySlice";
import { selectCategories } from "./categorySlice";
import { selectSelectedCategories } from "./categorySlice";


export default function CategorySelector() {
  // const { selected, setSelected, categories } = props;
    // Redux
    const dispatch = useDispatch();
    const categories = useSelector(selectCategories);
    const selected = useSelector(selectSelectedCategories);

  return (
    <Paper>
      <Typography>what will you be doing on this trip?</Typography>
      {categories.map((category: string) => (
        <ToggleButton
          value="check"
          selected={selected.includes(category)}
          key={"toggleButton" + category}
          onChange={() => dispatch(toggleSelected(category))}
        >
          {category}
        </ToggleButton>
      ))}
    </Paper>
  );
}
