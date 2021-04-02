[JavascriptDecorators.org](https://JavascriptDecorators.org).


The tools are entirely experimental and evolving. There is no guarantee of they follow the proposed standard correctly.

## Supported functionality

### Class

```js
@decorator
class X {
}
```

The decorator function receives:

- `value` the class

- `context` with this object:

```js
{
  "kind": "class",
  "name": "X",
  "defineMetadata": (key, value) => { /* ... */ }
}
```

The decorator function can return:

- `undefined`, nothing is replaced

- a new class that replaces the previous class  passed as the first parameter

The metadata defined for the decorator with `context.defineMetadata()` is located on
`X[Symbol.metadata].constructor` where `X` is the class.


### Methods

#### public member method

```js
class X {
  @decorator
  m() {}
}
```

The decorator function receives:

- `value` with the method

- `context` with this object:

```js
{
  "kind": "method",
  "name": "m",
  "isStatic": false,
  "isPrivate": false,
  "defineMetadata": (key, value) => { /* ... */ }
}
```

The decorator function can return:

- `undefined`, nothing is replaced

- a new function that replaces the previous method  passed as the first parameter

The metadata defined for the decorator with `context.defineMetadata()` is located on
`X.prototype[Symbol.metadata].m` where `X` is the class, and `m` is the method name.

#### static methods

```js
class X {
  @decorator
  static M() {}
}
```

The decorator function receives:

- `value` the method

- `context` with this object:

```js
{
  "kind": "method",
  "name": "M",
  "isStatic": true,
  "isPrivate": false,
  "defineMetadata": (key, value) => { /* ... */ }
}
```

The decorator function can return:

- `undefined`, nothing is replaced

- a new function that replaces the previous method  passed as the first parameter

The metadata defined for the decorator with `context.defineMetadata()` is located on
`X[Symbol.metadata].m` where `X` is the class, and `m` is the static method name .


#### private member methods

```js
class X {
  @decorator
  #m() {}
}
```

The decorator function receives:

- `value` with the method

- `context` with this object:

```js
{
  "kind": "method",
  "name": "#m",
  "isStatic": false,
  "isPrivate": true,
  "defineMetadata": (key, value) => { /* ... */ }
}
```

The decorator function can return:

- `undefined`, nothing is replaced

- a new function that replaces the previous method  passed as the first parameter

The metadata defined for the decorator with `context.defineMetadata()` is located on
`X.prototype[Symbol.metadata]['#m']` where `X` is the class and `#m` is the private method name.


### Accessors

#### getter

```js
class X {
  @decorator
  get p() {}
}
```

The decorator function receives:

- `value` with the get method

- `context` with this object:

```js
{
  "kind": "getter",
  "name": "P",
  "isStatic": false,
  "isPrivate": false,
  "defineMetadata": (key, value) => { /* ... */ }
}
```

The decorator function can return:

- `undefined`, nothing is replaced

- a new function that replaces the previous get method  passed as the first parameter

The metadata defined for the decorator with `context.defineMetadata()` is located on
`X.prototype[Symbol.metadata].m` where `X` is the class, and `m` is the property name.


#### setter

```js
class X {
  @decorator
  set p(v) {}
}
```

The decorator function receives:

- `value` with the set method

- `context` with this object:

```js
{
  "kind": "setter",
  "name": "p",
  "isStatic": false,
  "isPrivate": false,
  "defineMetadata": (key, value) => { /* ... */ }
}
```

The decorator function can return:

- `undefined`, nothing is replaced

- a new function that replaces the previous set method  passed as the first parameter

The metadata defined for the decorator with `context.defineMetadata()` is located on
`X.prototype[Symbol.metadata].m` where `X` is the class, and `m` is the property name.


#### static getter

```js
class X {
  @decorator
  static get P() {}
}
```

The decorator function receives:

- `value` with the get method

- `context` with this object:

```js
{
  "kind": "getter",
  "name": "p",
  "isStatic": true,
  "isPrivate": false,
  "defineMetadata": (key, value) => { /* ... */ }
}
```

The decorator function can return:

- `undefined`, nothing is replaced

- a new function that replaces the previous get method  passed as the first parameter

The metadata defined for the decorator with `context.defineMetadata()` is located on
`X.prototype[Symbol.metadata].m` where `X` is the class, and `m` is the property name.

[JavascriptDecorators.org](https://JavascriptDecorators.org).


The tools are entirely experimental and evolving. There is no guarantee of they follow the proposed standard correctly.

## Supported functionality

### Class

```js
@decorator
class X {
}
```

The decorator function receives:

- `value` the class

- `context` with this object:

```js
{
  "kind": "class",
  "name": "X",
  "defineMetadata": (key, value) => { /* ... */ }
}
```

The decorator function can return:

- `undefined`, nothing is replaced

- a new class that replaces the previous class  passed as the first parameter

The metadata defined for the decorator with `context.defineMetadata()` is located on
`X[Symbol.metadata].constructor` where `X` is the class.


### Methods

#### public member method

```js
class X {
  @decorator
  m() {}
}
```

The decorator function receives:

- `value` with the method

- `context` with this object:

```js
{
  "kind": "method",
  "name": "m",
  "isStatic": false,
  "isPrivate": false,
  "defineMetadata": (key, value) => { /* ... */ }
}
```

The decorator function can return:

- `undefined`, nothing is replaced

- a new function that replaces the previous method  passed as the first parameter

The metadata defined for the decorator with `context.defineMetadata()` is located on
`X.prototype[Symbol.metadata].m` where `X` is the class, and `m` is the method name.

#### static methods

```js
class X {
  @decorator
  static M() {}
}
```

The decorator function receives:

- `value` the method

- `context` with this object:

```js
{
  "kind": "method",
  "name": "M",
  "isStatic": true,
  "isPrivate": false,
  "defineMetadata": (key, value) => { /* ... */ }
}
```

The decorator function can return:

- `undefined`, nothing is replaced

- a new function that replaces the previous method  passed as the first parameter

The metadata defined for the decorator with `context.defineMetadata()` is located on
`X[Symbol.metadata].m` where `X` is the class, and `m` is the static method name.


#### private member methods

```js
class X {
  @decorator
  #m() {}
}
```

The decorator function receives:

- `value` with the method

- `context` with this object:

```js
{
  "kind": "method",
  "name": "#m",
  "isStatic": false,
  "isPrivate": true,
  "defineMetadata": (key, value) => { /* ... */ }
}
```

The decorator function can return:

- `undefined`, nothing is replaced

- a new function that replaces the previous method  passed as the first parameter

The metadata defined for the decorator with `context.defineMetadata()` is located on
`X.prototype[Symbol.metadata]['#m']` where `X` is the class and `#m` is the private method name.


### Accessors

#### getter

```js
class X {
  @decorator
  get p() {}
}
```

The decorator function receives:

- `value` with the get method

- `context` with this object:

```js
{
  "kind": "getter",
  "name": "p",
  "isStatic": false,
  "isPrivate": false,
  "defineMetadata": (key, value) => { /* ... */ }
}
```

The decorator function can return:

- `undefined`, nothing is replaced

- a new function that replaces the previous get method  passed as the first parameter

The metadata defined for the decorator with `context.defineMetadata()` is located on
`X.prototype[Symbol.metadata].m` where `X` is the class, and `p` is the property name.


#### setter

```js
class X {
  @decorator
  set p(v) {}
}
```

The decorator function receives:

- `value` with the set method

- `context` with this object:

```js
{
  "kind": "setter",
  "name": "p",
  "isStatic": false,
  "isPrivate": false,
  "defineMetadata": (key, value) => { /* ... */ }
}
```

The decorator function can return:

- `undefined`, nothing is replaced

- a new function that replaces the previous set method  passed as the first parameter

The metadata defined for the decorator with `context.defineMetadata()` is located on
`X.prototype[Symbol.metadata].m` where `X` is the class, and `p` is the property name.


#### static getter

```js
class X {
  @decorator
  static get P() {}
}
```

The decorator function receives:

- `value` with the get method

- `context` with this object:

```js
{
  "kind": "getter",
  "name": "P",
  "isStatic": true,
  "isPrivate": false,
  "defineMetadata": (key, value) => { /* ... */ }
}
```

The decorator function can return:

- `undefined`, nothing is replaced

- a new function that replaces the previous get method passed as the first parameter

The metadata defined for the decorator with `context.defineMetadata()` is located on
`X[Symbol.metadata].P` where `X` is the class, and `P` is the property name.


#### static setter

```js
class X {
  @decorator
  static set P(v) {}
}
```

The decorator function receives:

- `value` with the set method

- `context` with this object:

```js
{
  "kind": "setter",
  "name": "P",
  "isStatic": true,
  "isPrivate": false,
  "defineMetadata": (key, value) => { /* ... */ }
}
```

The decorator function can return:

- `undefined`, nothing is replaced

- a new function that replaces the previous set method passed as the first parameter

The metadata defined for the decorator with `context.defineMetadata()` is located on
`X[Symbol.metadata].P` where `X` is the class, and `P` is the property name.


#### private getter

```js
class X {
  @decorator
  get #p() {}
}
```

The decorator function receives:

- `value` with the get method

- `context` with this object:

```js
{
  "kind": "getter",
  "name": "#p",
  "isStatic": false,
  "isPrivate": true,
  "defineMetadata": (key, value) => { /* ... */ }
}
```

The decorator function can return:

- `undefined`, nothing is replaced

- a new function that replaces the previous get method  passed as the first parameter

The metadata defined for the decorator with `context.defineMetadata()` is located on
`X.prototype[Symbol.metadata]['#p']` where `X` is the class, and `#p` is the private property name.


#### private setter

```js
class X {
  @decorator
  set #p(v) {}
}
```

The decorator function receives:

- `value` with the set method

- `context` with this object:

```js
{
  "kind": "setter",
  "name": "#p",
  "isStatic": false,
  "isPrivate": true,
  "defineMetadata": (key, value) => { /* ... */ }
}
```

The decorator function can return:

- `undefined`, nothing is replaced

- a new function that replaces the previous get method  passed as the first parameter

The metadata defined for the decorator with `context.defineMetadata()` is located on
`X.prototype[Symbol.metadata]['#p']` where `X` is the class, and `#p` is the private property name.


### Fields

```js
class X {
  @decorator
  p = 10;
}
```

The decorator function receives:

- `value` with the set method

- `context` with this object:

```js
{
kind: "field",
  name: "p",
  isStatic: false,
  isPrivate: false,
  "defineMetadata": (key, value) => { /* ... */ }
}
```

The decorator function can return:

- `undefined`, nothing is replaced

- a new function whose return will be used as the initial value of the property.

The metadata defined for the decorator with `context.defineMetadata()` is located on
`X.prototype[Symbol.metadata].p` where `X` is the class, and `p` is the property name.

#### static field

```js
class X {
  @decorator
  static P = 1;
}
```

The decorator function receives:

- `value` with the set method

- `context` with this object:

```js
{
kind: "field",
  name: "P",
  isStatic: true,
  isPrivate: false,
  "defineMetadata": (key, value) => { /* ... */ }
}
```

The decorator function can return:

- `undefined`, nothing is replaced

- a new function whose return will be used as the initial value of the property.

The metadata defined for the decorator with `context.defineMetadata()` is located on
`X[Symbol.metadata].P` where `X` is the class, and `P` is the static property name.

#### private field

```js
class A {
  @decorator
  #p = 1;
}
```

The decorator function receives:

- `value` with the set method

- `context` with this object:

```js
{
kind: "field",
  name: "#p",
  isStatic: true,
  isPrivate: false,
  "defineMetadata": (key, value) => { /* ... */ }
}
```

The decorator function can return:

- `undefined`, nothing is replaced

- a new function whose return will be used as the initial value of the property.

The metadata defined for the decorator with `context.defineMetadata()` is located on
`X.prototype[Symbol.metadata]['#p']` where `X` is the class, and `#p` is the private property name.


## Functionality not supported yet

- Private and Static members as `static #m() {}`
- `@init:` decorators.
- Keyword `accessor`.
- Export `export` or `export default`.
- Anonymous class.

#### static setter

```js
class X {
  @decorator
  static set P(v) {}
}
```

The decorator function receives:

- `value` with the set method

- `context` with this object:

```js
{
  "kind": "setter",
  "name": "P",
  "isStatic": true,
  "isPrivate": false,
  "defineMetadata": (key, value) => { /* ... */ }
}
```

The decorator function can return:

- `undefined`, nothing is replaced

- a new function that replaces the previous set method  passed as the first parameter

The metadata defined for the decorator with `context.defineMetadata()` is located on
`X.prototype[Symbol.metadata].m` where `X` is the class, and `m` is the property name.


#### private getter

```js
class X {
  @decorator
  get #p() {}
}
```

The decorator function receives:

- `value` with the get method

- `context` with this object:

```js
{
  "kind": "getter",
  "name": "#p",
  "isStatic": false,
  "isPrivate": true,
  "defineMetadata": (key, value) => { /* ... */ }
}
```

The decorator function can return:

- `undefined`, nothing is replaced

- a new function that replaces the previous get method  passed as the first parameter

The metadata defined for the decorator with `context.defineMetadata()` is located on
`X.prototype[Symbol.metadata]['#m']` where `X` is the class, and `#m` is the property name.


#### private setter

```js
class X {
  @decorator
  set #p(v) {}
}
```

The decorator function receives:

- `value` with the set method

- `context` with this object:

```js
{
  "kind": "setter",
  "name": "#p",
  "isStatic": false,
  "isPrivate": true,
  "defineMetadata": (key, value) => { /* ... */ }
}
```

The decorator function can return:

- `undefined`, nothing is replaced

- a new function that replaces the previous get method  passed as the first parameter

The metadata defined for the decorator with `context.defineMetadata()` is located on
`X.prototype[Symbol.metadata]['#m']` where `X` is the class, and `#m` is the property name.


### Fields

```js
class X {
  @decorator
  p = 10;
}
```

#### static field

```js
class X {
  @decorator
  static P = 1;
}
```

#### private field

```js
class A {
  @decorator
  #p = 1;
}
```

## Functionality not supported yet

- Private and Static members as `static #m() {}`
- `@init:` decorators.
- Keyword `accessor`.
- Export `export` or `export default`.
- Anonymous class.
