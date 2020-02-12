import { Source } from "./source";

export type Parser<A> = (source: Source) => [A, Source][];
