# JavascriptDecorators.org - CHANGELOG

## version 0.1.7 - 16/04/2021

- Added resize to left-right panels.
- Updated README
- Added and updated examples.

## version 0.1.6 - 15/04/2021

- Added support to `accessor` with private static field.
- Added support to `accessor` with private member field.
- Fixed a bug with `isStatic` as `undefined` instead of `false`.

## version 0.1.5 - 13/04/2021

- Throw an error when an accessor is applied over a private field. This combination is not
  supported by this tool.
- Fixed an error with accessor decorator when it isn't return a value
- Fixed an error with two or more decorators before `accessor` or `static` keyword: only the last
  decorator was defined as `auto-accessor` or `isStatic`.

## version 0.1.4 - 12/02/2021

- Fixed an error when a RegExp is included as parameter.

## version 0.1.3 - 10/02/2021

- Fixed errors with `this` of field initialize function.

## version 0.1.2 - 06/02/2021

- Fixed an error with accessor and static keywords. The previous version accept `accesor static`,
  and it is `static accessor`.

## version 0.1.1 - 05/02/2021

- Fixed an error with accessor transpilation when the decorator don't return an initialize function.

## version 0.1.0 - 04/02/2021

- Added support to `accessor`

## version 0.0.17 - 04/02/2021

- Added support to @init: decorators for class, method, setter and getter

## version 0.0.16 - 02/04/2021

- Added support to static private method decorator
- Added support to static private accessor decorator
- Added support to static private field decorator

## version 0.0.15 - 01/04/2021

- Added support to private field decorator

## version 0.0.14 - 01/04/2021

- Added direct execution from the UI

## version 0.0.13 - 01/04/2021

- Added support to private getter/setter decorator

## version 0.0.12 - 31/03/2021

- Fixed an error with link generation

## version 0.0.11 - 31/03/2021

- Refactorized defineMetadata
- Added support to private method decorator

## version 0.0.10 - 30/03/2021

- Added the button "send URL" for share examples
- Added static members transpiler
- Replaced `prop` with `accessor` and `prop-field` with `auto-accessor`.
  See https://github.com/tc39/proposal-decorators/pull/364

## version 0.0.9 - 29/03/2021

- Added share link to source code

## version 0.0.8 - 29/03/2021

- Fixed an error with getter/setter metadata (see:
https://github.com/tc39/proposal-decorators/issues/375)

## version 0.0.7 - 29/03/2021

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

## version 0.0.6 - 26/03/2021

- Fixed an error with code editor, as a result the AST is empty
- Improved and simplified the server code

## version 0.0.5 - 26/03/2021

- Added a rich code editor
- Colorized AST JSON
- Added link to https://github.com/tc39/proposal-decorators
- Added version label into the homepage
- Added favicon

## version 0.0.4 - 26/03/2021

- Removed static http server and delegated this feature to NGINX.

## version 0.0.3 - 25/03/2021

- Added support to `prop` keyword.
- Removed the spellcheck into the code textarea

## version 0.0.2 - 25/03/2021

- Published on Github
- Added the README.md
- Added a Github link into the index.html
- Defined monospace font for code and JSON sections.
- Improved error management

## version 0.0.1 - 25/03/2021

- Initial version.
