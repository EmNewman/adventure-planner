import { Item, BinDict } from "../types/types";

// TODO get from backend
export const tempBinList: BinDict = {
  sleeping: {
    name: "sleeping",
    contents: ["tent", "2", "3", "4"],
  },
  winter: {
    name: "winter",
    contents: ["skis", "2", "3", "4"],
  },
  "hiking stuff": {
    name: "hiking stuff",
    contents: ["hiking bag", "hiking pants", "3", "4"],
  },
  bin4: {
    name: "bin4",
    contents: ["test1", "2", "3", "4"],
  },
  bin5: {
    name: "bin5",
    contents: ["test1", "2", "3", "4"],
  },
};

export const tempItemList: Array<Item> = [
  {
    name: "tent",
    tags: ["camping", "backpacking"],
  },
  {
    name: "skis",
    tags: ["skiing"],
  },
  {
    name: "hiking bag",
    tags: ["backpacking"],
  },
  {
    name: "hiking pants",
    tags: ["backpacking", "skiing"],
  },
];

export const categories: Array<string> = ["skiing", "backpacking", "camping", "climbing"];
