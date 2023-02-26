import * as React from "react";
import { Container } from "@mui/material";
import CategorySelector from "../components/CategorySelector";

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
      <CategorySelector
        selected={selectedCategories}
        setSelected={setSelectedCategories}
        categories={categories}
        headerText="what list would you like to update?"
      />
    </Container>
  );
}
