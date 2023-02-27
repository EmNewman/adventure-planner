import * as React from "react";
import { Button, List, ListItem, Paper, Typography } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import { Bin, Item } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { selectCheckedItems, selectItemList, toggleCheckedItem } from "./packingListSlice";
import { selectSelectedCategories } from "../category/categorySlice";
import { selectBinList, selectCheckedBins } from "../bin-list/binListSlice";


export default function PackingList() {
  // Redux
  const dispatch = useDispatch();
  const itemList = useSelector(selectItemList);
  const checkedItems = useSelector(selectCheckedItems);
  const selectedCategories = useSelector(selectSelectedCategories);
  const binList: Array<Bin> = useSelector(selectBinList);
  const selectedBins = useSelector(selectCheckedBins);

  // filter displayed item list based on current selected category
  const filteredList = itemList.filter((item) =>
    item.tags.some((tag) => selectedCategories.includes(tag))
  );
  console.log(itemList);

  // TODO when a bin is added check off items in that list

  return (
    <Paper>
      <Typography variant="h2">packing list</Typography>
      <List>
        {filteredList.map((item: Item) => {
          // Check if item is in a bin
          
        return(
          <ListItem
            key={`packingListItem-${item.name}`}
            secondaryAction={
              <Typography sx={{ fontSize: 10 }}>(Covered by Bin)</Typography>
            }
            disablePadding
          >
            <ListItemButton
              role={undefined}
              onClick={() => dispatch(toggleCheckedItem(item))}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checkedItems.indexOf(item.name) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": `item-${item.name}` }}
                />
              </ListItemIcon>
              <ListItemText id={`item-${item.name}`} primary={item.name} />
            </ListItemButton>
          </ListItem>
        )})}
      </List>
      <Button></Button>
    </Paper>
  );
}
