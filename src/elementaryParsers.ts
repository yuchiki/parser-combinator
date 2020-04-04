import { char } from "./source";
import { Sat } from "./parserCombinators";
import { Parser } from "./parser";

export const CharParser = (c: char): Parser<char> => Sat(y => c === y);
