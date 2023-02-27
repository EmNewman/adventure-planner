import * as React from "react";
import { Button, List, ListItem, Paper, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import { BinDict } from "../../types/types";
import { selectBinList, selectCheckedBins, toggleCheckedBin } from "./binListSlice";
import { useDispatch, useSelector } from "react-redux";


export default function BinSelector() {
  // Redux 
  const dispatch = useDispatch();
  const binList: BinDict = useSelector(selectBinList);
  const checked = useSelector(selectCheckedBins);

  return (
    <Paper>
      <Typography variant="h2">bins</Typography>
      <List>
        {Object.keys(binList).map((bin: string) => (
          <ListItem
            key={`binListItem-${bin}`}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <CommentIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton
              role={undefined}
              onClick={() => dispatch(toggleCheckedBin(binList[bin]))}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(bin) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": `bin-${bin}` }}
                />
              </ListItemIcon>
              <ListItemText id={`bin-${bin}`} primary={bin} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button></Button>
    </Paper>
  );
}
