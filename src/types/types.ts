export type Bin = {
  name: string;
  contents: Array<string>;
};

export type Item = {
  name: string;
  tags: Array<string>;
}

export type BinDict = {
  [name: string]: Bin
};