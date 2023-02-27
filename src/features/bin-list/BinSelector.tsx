import * as React from "react";
import { Button, List, ListItem, Paper, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import { Bin } from "../../types/types";
import { selectBinList, selectCheckedBins, toggleCheckedBin } from "./binListSlice";
import { useDispatch, useSelector } from "react-redux";


export default function BinSelector() {
  // Redux 
  const dispatch = useDispatch();
  const binList = useSelector(selectBinList);
  const checked = useSelector(selectCheckedBins);

  return (
    <Paper>
      <Typography variant="h2">bins</Typography>
      <List>
        {binList.map((bin: Bin) => (
          <ListItem
            key={`binListItem-${bin.name}`}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton
              role={undefined}
              onClick={() => dispatch(toggleCheckedBin(bin))}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(bin.name) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": `bin-${bin.name}` }}
                />
              </ListItemIcon>
              <ListItemText id={`bin-${bin.name}`} primary={bin.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button></Button>
    </Paper>
  );
}
