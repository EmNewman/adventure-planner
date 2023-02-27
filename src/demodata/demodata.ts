import { Item, Bin } from "../types/types";

// TODO get from backend
export const tempBinList: Array<Bin> = [
    {
      name: "bin1",
      contents: ["test1", "2", "3", "4"],
    },
    {
      name: "bin2",
      contents: ["test1", "2", "3", "4"],
    },
    {
      name: "bin3",
      contents: ["test1", "2", "3", "4"],
    },
    {
      name: "bin4",
      contents: ["test1", "2", "3", "4"],
    },
    {
      name: "bin5",
      contents: ["test1", "2", "3", "4"],
    },
  ];

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
      tags: ["hiking"],
    },
    {
      name: "hiking pants",
      tags: ["backpacking", "hiking", "skiing"],
    },
  ];

export const categories: Array<string> = [
    "skiing",
    "backpacking",
    "camping",
    "climbing",
  ];