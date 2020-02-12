import { Source } from "./source";

type Parser<A> = (source: Source) => [[A, Source]];
