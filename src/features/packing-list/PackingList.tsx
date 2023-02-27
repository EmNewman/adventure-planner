import * as React from "react";
import { Button, List, ListItem, Paper, Typography } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import { BinDict, Item } from "../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { selectCheckedItems, selectItemList, toggleCheckedItem } from "./packingListSlice";
import { selectSelectedCategories } from "../category/categorySlice";
import { selectBinList, selectCheckedBins } from "../bin-list/binListSlice";

export default function PackingList() {
  // Redux
  const dispatch = useDispatch();
  const itemList: Array<Item> = useSelector(selectItemList);
  const checkedItems: Array<string> = useSelector(selectCheckedItems);
  const selectedCategories: Array<string> = useSelector(selectSelectedCategories);
  const binList: BinDict = useSelector(selectBinList);
  const selectedBins: Array<string> = useSelector(selectCheckedBins);

  // filter displayed item list based on current selected category
  const filteredList = itemList.filter((item) => item.tags.some((tag) => selectedCategories.includes(tag)));

  return (
    <Paper sx={{ padding: "10px" }}>
      <Typography variant="h4" sx={{ padding: "10px" }}>
        packing list
      </Typography>
      <List>
        {filteredList.map((item: Item) => {
          // Check if item is in a selected bin
          // TODO assumption here is that item is in only 1 bin, is this valid
          let binName: string = "";
          selectedBins.forEach((bin: string) => {
            if (binList[bin].contents.includes(item.name)) {
              binName = `(${bin})`;
            }
          });

          return (
            <ListItem
              key={`packingListItem-${item.name}`}
              secondaryAction={<Typography sx={{ fontSize: 10 }}>{binName}</Typography>}
              disablePadding
            >
              <ListItemButton
                role={undefined}
                onClick={() => dispatch(toggleCheckedItem(item))}
                dense
                disabled={binName !== ""}
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={binName !== "" || checkedItems.indexOf(item.name) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": `item-${item.name}` }}
                  />
                </ListItemIcon>
                <ListItemText id={`item-${item.name}`} primary={item.name} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Button></Button>
    </Paper>
  );
}
