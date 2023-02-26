import * as React from "react";
import { Button, List, ListItem, Paper, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import { Bin, Item } from "../types/types";

type Props = {
  itemList: Array<Item>;
  selectedCategories: Array<string>;
  selectedBins: Array<string>;
  bins: Array<Bin>;
  checked: Array<string>;
  setChecked: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function PackingList(props: Props) {
  // filter item list based on current selected category
  const itemList = props.itemList.filter((item) =>
    item.tags.some((tag) => props.selectedCategories.includes(tag))
  );
  console.log(itemList);

  const handleToggle = (value: string) => () => {
    const currentIndex = props.checked.indexOf(value);
    const newChecked = [...props.checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    props.setChecked(newChecked);
  };

  // TODO when a bin is added check off items in that list

  return (
    <Paper>
      <Typography variant="h2">packing list</Typography>
      <List>
        {itemList.map((item: Item) => (
          <ListItem
            key={`packingListItem-${item.name}`}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton
              role={undefined}
              onClick={handleToggle(item.name)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={props.checked.indexOf(item.name) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": `item-${item.name}` }}
                />
              </ListItemIcon>
              <ListItemText id={`item-${item.name}`} primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button></Button>
    </Paper>
  );
}
