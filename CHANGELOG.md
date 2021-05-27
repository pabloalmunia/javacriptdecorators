# JavascriptDecorators.org - CHANGELOG

## version 0.1.10 - 2021/05/28

- Include support to @init: with field decorators

## version 0.1.9 - 2021/05/27

- Included support to addInitializer()
- Improved transpiled process.
- Added Jest as testing engine.

## version 0.1.8 - 2021/04/20

- Included support to Symbol as member name.
- Made the transpiled code clearer.

## version 0.1.7 - 2021/04/16

- Added resize to left-right panels.
- Updated README
- Added and updated examples.

## version 0.1.6 - 2021/04/15

- Added support to `accessor` with private static field.
- Added support to `accessor` with private member field.
- Fixed a bug with `isStatic` as `undefined` instead of `false`.

## version 0.1.5 - 2021/04/13

- Throw an error when an accessor is applied over a private field. This combination is not
  supported by this tool.
- Fixed an error with accessor decorator when it isn't return a value
- Fixed an error with two or more decorators before `accessor` or `static` keyword: only the last
  decorator was defined as `auto-accessor` or `isStatic`.

## version 0.1.4 - 2021/02/12

- Fixed an error when a RegExp is included as parameter.

## version 0.1.3 - 2021/02/10

- Fixed errors with `this` of field initialize function.

## version 0.1.2 - 2021/02/06

- Fixed an error with accessor and static keywords. The previous version accept `accesor static`,
  and it is `static accessor`.

## version 0.1.1 - 2021/02/05

- Fixed an error with accessor transpilation when the decorator don't return an initialize function.

## version 0.1.0 - 2021/02/04

- Added support to `accessor`

## version 0.0.17 - 2021/02/04

- Added support to @init: decorators for class, method, setter and getter

## version 0.0.16 - 2021/04/02

- Added support to static private method decorator
- Added support to static private accessor decorator
- Added support to static private field decorator

## version 0.0.15 - 2021/04/01

- Added support to private field decorator

## version 0.0.14 - 2021/04/01

- Added direct execution from the UI

## version 0.0.13 - 2021/04/01

- Added support to private getter/setter decorator

## version 0.0.12 - 2021/03/31

- Fixed an error with link generation

## version 0.0.11 - 2021/03/31

- Refactorized defineMetadata
- Added support to private method decorator

## version 0.0.10 - 2021/03/30

- Added the button "send URL" for share examples
- Added static members transpiler
- Replaced `prop` with `accessor` and `prop-field` with `auto-accessor`.
  See https://github.com/tc39/proposal-decorators/pull/364

## version 0.0.9 - 2021/03/29

- Added share link to source code

## version 0.0.8 - 2021/03/29

- Fixed an error with getter/setter metadata (see:
https://github.com/tc39/proposal-decorators/issues/375)

## version 0.0.7 - 2021/03/29

- Fixed an error with the code editor
- Improved server code
- First Transpiler
  - Class
  - Public method
  - Public getter
  - Public setter
  - Public field
- Add transpiler to the UI
- Updated the README.md

## version 0.0.6 - 2021/03/26

- Fixed an error with code editor, as a result the AST is empty
- Improved and simplified the server code

## version 0.0.5 - 2021/03/26

- Added a rich code editor
- Colorized AST JSON
- Added link to https://github.com/tc39/proposal-decorators
- Added version label into the homepage
- Added favicon

## version 0.0.4 - 2021/03/26

- Removed static http server and delegated this feature to NGINX.

## version 0.0.3 - 2021/03/25

- Added support to `prop` keyword.
- Removed the spellcheck into the code textarea

## version 0.0.2 - 2021/03/25

- Published on Github
- Added the README.md
- Added a Github link into the index.html
- Defined monospace font for code and JSON sections.
- Improved error management

## version 0.0.1 - 2021/03/25

- Initial version.
