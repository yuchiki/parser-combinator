import { Parser } from "./parser";
import { char, Source } from "./source";

export const ResultParser = <A>(v: A): Parser<A> => (
  input: Source,
): [A, Source][] => [[v, input]];

export const ZeroParser = <A>(): Parser<A> => (_: Source): [A, Source][] => [];

export const ItemParser = (input: Source): [char, Source][] =>
  input.isEOF ? [] : [[input.head, input.tail]];
