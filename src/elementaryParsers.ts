import { char } from "./source";
import { Sat } from "./parserCombinators";
import { Parser } from "./parser";

export const CharParser = (c: char): Parser<char> => Sat(y => c === y);

export const DigitParser: Parser<char> = Sat(x =>
  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(x),
);

export const LowerParser: Parser<char> = Sat(x => /[a-z]/.test(x));

export const UpperParser: Parser<char> = Sat(x => /[A-Z]/.test(x));
