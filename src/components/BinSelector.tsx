import * as React from "react";
import { Button, List, ListItem, Paper, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import { Bin } from "../types/types";

type Props = {
  binList: Array<Bin>;
  checked: Array<string>;
  setChecked: React.Dispatch<React.SetStateAction<string[]>>;
  // packingListSetChecked: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function BinSelector(props: Props) {
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

  return (
    <Paper>
      <Typography variant="h2">bins</Typography>
      <List>
        {props.binList.map((bin: Bin) => (
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
              onClick={handleToggle(bin.name)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={props.checked.indexOf(bin.name) !== -1}
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
