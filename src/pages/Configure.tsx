import * as React from "react";
import { Container } from "@mui/material";
import CategorySelector from "../features/category/CategorySelector";

export function Configure() {
  const categories: Array<string> = [
    "skiing",
    "backpacking",
    "camping",
    "climbing",
  ];
  const [selectedCategories, setSelectedCategories] = React.useState<
    Array<string>
  >([]);

  return (
    <Container>

    </Container>
  );
}
