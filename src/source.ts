import { IndexedStringSource } from "../src/indexedStringSource";

export type char = string;

export interface Location {
  row: number;
  col: number;
}

export interface Source {
  wholeString: string;
  currentString: string;
  location: Location; // This function is used for debug print
  head: char;
  tail: Source;
  isEOF: boolean;
}

export const NewSource = (str: string): Source => new IndexedStringSource(str);
