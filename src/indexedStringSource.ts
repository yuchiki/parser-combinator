import { char, Location, Source } from "./source";

export class IndexedStringSource {
  private readonly _originalString: string;
  private _index = 0;

  // TODO: 入力値バリデーション
  constructor(str: string, index = 0) {
    this._index = index;
    this._originalString = str;
  }

  get wholeString(): string {
    return this._originalString;
  }

  get currentString(): string {
    return this._originalString.substr(this._index);
  }

  get location(): Location {
    throw "not implemented";
  }

  // TODO: 値がとれないときに空白を返すかエラーを返すか検討
  get head(): char {
    return this._originalString.substr(this._index, 1);
  }

  // TODO: 値がとれなとときに空白を返すかエラーを返すか検討
  get tail(): Source {
    return new IndexedStringSource(this._originalString, this._index + 1);
  }

  get isEOF(): boolean {
    return this._originalString.length <= this._index;
  }
}
