import { Parser } from "./parser";
import { char, Source } from "./source";

export const ResultParser = <A>(v: A): Parser<A> => (
  input: Source,
): [A, Source][] => [[v, input]];

export const ZeroParser = <A>(): Parser<A> => (_: Source): [A, Source][] => [];

export const ItemParser = (input: Source): [char, Source][] =>
  input.isEOF ? [] : [[input.head, input.tail]];

export const Plus = <A>(p1: Parser<A>, p2: Parser<A>): Parser<A> => (
  input,
): [A, Source][] => p1(input).concat(p2(input));
