import { Parser } from "./parser";
import { Source } from "./source";

export const Seq = <A, B>(
  parserA: Parser<A>,
  parserB: Parser<B>,
): Parser<[A, B]> => (input: Source): [[A, B], Source][] =>
  parserA(input).flatMap(([resA, restA]: [A, Source]) =>
    parserB(restA).map(([resB, restB]: [B, Source]): [[A, B], Source] => [
      [resA, resB],
      restB,
    ]),
  );

export const Bind = <A, B>(
  parser: Parser<A>,
  f: (v: A) => Parser<B>,
): Parser<B> => (input: Source): [B, Source][] =>
  parser(input).flatMap(([v, rest]: [A, Source]): [B, Source][] => f(v)(rest));
