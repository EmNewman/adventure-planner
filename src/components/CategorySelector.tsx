import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import { Paper, Typography } from "@mui/material";

type Props = {
  selected: Array<string>;
  setSelected: React.Dispatch<React.SetStateAction<Array<string>>>;
  categories: Array<string>;
  headerText: string;
};

export default function CategorySelector(props: Props) {
  const { selected, setSelected, categories } = props;

  return (
    <Paper>
      <Typography>{props.headerText}</Typography>
      {categories.map((category: string) => (
        <ToggleButton
          value="check"
          selected={selected.includes(category)}
          key={"toggleButton" + category}
          onChange={() => {
            // Remove if it's in the selected array, and add if it's not
            if (selected.includes(category)) {
              setSelected(selected.filter((x) => x !== category));
            } else {
              setSelected(selected.concat([category]));
            }
          }}
        >
          {category}
        </ToggleButton>
      ))}
    </Paper>
  );
}
