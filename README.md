master: [![Build Status](https://travis-ci.com/yuchiki/parser-combinator.svg?branch=master)](https://travis-ci.com/yuchiki/parser-combinator)

# parser-combinator

TypeScriptの練習 & Parser Combinatorの習作


[Monadic parser combinators](http://www.cs.nott.ac.uk//~pszgmh/monparsing.pdf)というテクニカルレポートを参考に実装しています。

## 確認方法
- make test-all
  - lint, test, buildが通るかをチェックします。


## 目指す所

- Parser Combinatorとしての機能を果たす
- OCamlの簡単なサブセットをパースできる
- ドキュメントがある
- CIがある


## 当面のロードマップ

- [x] READMEがある
- [x] linter設定がある
- [x] linting　のテストがある
- [x] テストがある
- [x] lintとtestとbuildが通るかどうかのCIがある
- [ ] （Monadic Parser Combinatorを読んで必要な機能を洗い出す）
- [ ] Sourceが定義されている
- [ ] サンプルとして数式パーサがある
- [ ] サンプルとしてMLのサブセットのパーサががある

## 参考文献
- Graham Hutton and Erik Meijer. Monadic parser combinators. Technical Report NOTTCS-TR-96-4, Department of Computer Science, University of Nottingham, 1996
