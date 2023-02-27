import * as React from "react";
import { Box, Container, List, ListItem, ListItemText, Paper, Tab, Tabs, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectCategories } from "../features/category/categorySlice";
import { Item } from "../types/types";
import { selectItemList } from "../features/packing-list/packingListSlice";

export default function Configure() {
  // Redux
  const categories: Array<string> = useSelector(selectCategories);
  const itemList: Array<Item> = useSelector(selectItemList);

  const [value, setValue] = React.useState<string>(categories[0]);

  const filteredList = itemList.filter((item) => item.tags.includes(value));

  // TODO add action button with inputs for name, tag, and bins it belongs to (dropdown)

  // TODO bin constructor page?

  return (
    <Container>
      <Paper sx={{ maxWidth: "500px" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={(event, newValue) => setValue(newValue)} aria-label="basic tabs example">
            {categories.map((category: string) => (
              <Tab value={category} label={category} />
            ))}
          </Tabs>
        </Box>
        <Box>
          <List>
            {filteredList.map((item: Item) => {
              return (
                <ListItem secondaryAction={<Typography sx={{ fontSize: 10 }}>{item.tags.toString()}</Typography>}>
                  <ListItemText primary={item.name} />
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Paper>
    </Container>
  );
}
