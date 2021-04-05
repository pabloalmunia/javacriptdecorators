[JavascriptDecorators.org](https://JavascriptDecorators.org).


The tools are entirely experimental and evolving. There is no guarantee of they follow the proposed standard correctly.

- [Class decorators](#class-decorators)
- [Method decorators](#method-decorators)
  - [Public method](#public-method)
  - [Static methods](#static-methods)
  - [Private member methods](#private-member-methods)
  - [Static private member methods](#static-private-methods)
- [Getter and setter decorators](#getter-and-setter-decorators)
  - [Public getter](#public-getter)
  - [Public setter](#public-setter)
  - [Static getter](#static-getter)
  - [Static setter](#static-setter)
  - [Private getter](#private-getter)
  - [Private setter](#private-setter)
  - [Static private getter](#static-private-getter)
  - [Static private setter](#static-private-setter)
- [Field decorators](#field-decorators)
  - [public field](#public-field)
  - [public field with accessor](#public-field-with-accessor)
  - [static field](#static-field)
  - [static field with accessor](#static-field-with-accessor)
  - [private field](#private-field)
  - [static private field](#static-private-field)
- [Functionality not supported yet](functionality-not-supported-yet)


## Class decorators

```js
@decorator
class X {
}
```

#### decorator parameters

- `value` the class

- `context` with this object:

```js
{
  kind: "class",
  name: "X",
  defineMetadata: (key, value) => { /* ... */ }
}
```

#### decorator return

- `undefined`, nothing is replaced

- a new class that replaces the previous class  passed as the first parameter

- if the decorator is called with `@init:` must be return an object with this structure:

```js
{
  definition() {},  // a new class that replaces the previous class  passed as the first parameter
  initialize() {}   // a function to initialize the class after applying all decorators (`this` is the class)
}
```

#### metadata location

`X[Symbol.metadata].constructor` where `X` is the class.


## Method decorators

### Public method

```js
class X {
  @decorator
  m() {}
}
```

##### decorator parameters

- `value` with the method

- `context` with this object:

```js
{
  kind: "method",
  name: "m",
  isStatic: false,
  isPrivate: false,
  defineMetadata: (key, value) => { /* ... */ }
}
```

#### decorator return


- `undefined`, nothing is replaced

- a new function that replaces the previous method  passed as the first parameter

- if the decorator is called with `@init:` must be return an object with this structure:

```js
{
  method() {},      // a new function that replaces the previous method  passed as the first parameter
  initialize() {}   // a function to initialize the object after the constructor call (`this` is the object instance)
}
```

#### metadata location

`X.prototype[Symbol.metadata].m` where `X` is the class, and `m` is the method name.


### Static methods

```js
class X {
  @decorator
  static M() {}
}
```

##### decorator parameters

- `value` the method

- `context` with this object:

```js
{
  kind: "method",
  name: "M",
  isStatic: true,
  isPrivate: false,
  defineMetadata: (key, value) => { /* ... */ }
}
```

##### decorator return

- `undefined`, nothing is replaced

- a new function that replaces the previous method passed as the first parameter

- if the decorator is called with `@init:` must be return an object with this structure:

```js
{
  method() {},      // a new function that replaces the previous method  passed as the first parameter
  initialize() {}   // a function to initialize the class
}
```

##### metada location

`X[Symbol.metadata].m` where `X` is the class, and `m` is the static method name.


### Private method

```js
class X {
  @decorator
  #m() {}
}
```

##### decorator parameters

- `value` with the method

- `context` with this object:

```js
{
  kind: "method",
  name: "#m",
  isStatic: false,
  isPrivate: true,
  defineMetadata: (key, value) => { /* ... */ }
}
```

##### decorator return

- `undefined`, nothing is replaced

- a new function that replaces the previous method  passed as the first parameter

- if the decorator is called with `@init:` must be return an object with this structure:

```js
{
  method() {},      // a new function that replaces the previous method  passed as the first parameter
  initialize() {}   // a function to initialize the object after the constructor call (`this` is the object instance)
}
```

##### metadata location

`X.prototype[Symbol.metadata]['#m']` where `X` is the class and `#m` is the private method name.


### Static private method

```js
class X {
  @decorator
  static #m() {}
}
```

##### decorator parameters

- `value` with the method

- `context` with this object:

```js
{
  kind: "method",
  name: "#m",
  access: {
    get: () => { /* ... */ }, 
    set: (v) => { /* ... */ },
  }
  isStatic: true,
  isPrivate: true,
  defineMetadata: (key, value) => { /* ... */ }
}
```

##### decorator return

- `undefined`, nothing is replaced

- a new function that replaces the previous method  passed as the first parameter

- if the decorator is called with `@init:` must be return an object with this structure:

```js
{
  method() {},      // a new function that replaces the previous method  passed as the first parameter
  initialize() {}   // a function to initialize the class
}
```

##### metadata location

`X[Symbol.metadata]['#m']` where `X` is the class and `#m` is the private method name.


## Getter and setter decorators

### Public getter

```js
class X {
  @decorator
  get p() {}
}
```

##### decorator parameters

- `value` with the get method

- `context` with this object:

```js
{
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: (key, value) => { /* ... */ }
}
```

##### decorator return

- `undefined`, nothing is replaced

- a new function that replaces the previous get method  passed as the first parameter

- if the decorator is called with `@init:` must be return an object with this structure:

```js
{
  get() {},         // a new function that replaces the previous method  passed as the first parameter
  initialize() {}   // a function to initialize the object after the constructor call (`this` is the object instance)
}
```

##### metadata location

`X.prototype[Symbol.metadata].m` where `X` is the class, and `p` is the property name.


### Public setter

```js
class X {
  @decorator
  set p(v) {}
}
```

##### decorator parameters

- `value` with the set method

- `context` with this object:

```js
{
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: (key, value) => { /* ... */ }
}
```

##### decorator return

- `undefined`, nothing is replaced

- a new function that replaces the previous set method  passed as the first parameter

- if the decorator is called with `@init:` must be return an object with this structure:

```js
{
  set() {},         // a new function that replaces the previous method  passed as the first parameter
  initialize() {}   // a function to initialize the object after the constructor call (`this` is the object instance)
}
```

##### metadata location

`X.prototype[Symbol.metadata].m` where `X` is the class, and `p` is the property name.


### Static getter

```js
class X {
  @decorator
  static get P() {}
}
```

##### decorator parameters

- `value` with the get method

- `context` with this object:

```js
{
  kind: "getter",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: (key, value) => { /* ... */ }
}
```

##### decorator return

- `undefined`, nothing is replaced

- a new function that replaces the previous get method passed as the first parameter

- if the decorator is called with `@init:` must be return an object with this structure:

```js
{
  get() {},         // a new function that replaces the previous method  passed as the first parameter
  initialize() {}   // a function to initialize the class
}
```

##### metadata location

`X[Symbol.metadata].P` where `X` is the class, and `P` is the property name.


### Static setter

```js
class X {
  @decorator
  static set P(v) {}
}
```

##### decorator parameters

- `value` with the set method

- `context` with this object:

```js
{
  kind: "setter",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: (key, value) => { /* ... */ }
}
```

##### decorator return

- `undefined`, nothing is replaced

- a new function that replaces the previous set method passed as the first parameter

- if the decorator is called with `@init:` must be return an object with this structure:

```js
{
  set() {},         // a new function that replaces the previous method  passed as the first parameter
  initialize() {}   // a function to initialize the class
}
```

##### decorator parameters

`X[Symbol.metadata].P` where `X` is the class, and `P` is the property name.


### Private getter

```js
class X {
  @decorator
  get #p() {}
}
```

##### decorator parameters

- `value` with the get method

- `context` with this object:

```js
{
  kind: "getter",
  name: "#p",
  isStatic: false,
  isPrivate: true,
  defineMetadata: (key, value) => { /* ... */ }
}
```

##### decorator return

- `undefined`, nothing is replaced

- a new function that replaces the previous get method  passed as the first parameter

- if the decorator is called with `@init:` must be return an object with this structure:

```js
{
  get() {},         // a new function that replaces the previous method  passed as the first parameter
  initialize() {}   // a function to initialize the object after the constructor call (`this` is the object instance)
}
```

##### metadata location

`X.prototype[Symbol.metadata]['#p']` where `X` is the class, and `#p` is the private property name.


### Private setter

```js
class X {
  @decorator
  set #p(v) {}
}
```

##### decorator parameters

- `value` with the set method

- `context` with this object:

```js
{
  kind: "setter",
  name: "#p",
  isStatic: false,
  isPrivate: true,
  defineMetadata: (key, value) => { /* ... */ }
}
```

##### decorator return

- `undefined`, nothing is replaced

- a new function that replaces the previous get method  passed as the first parameter

- if the decorator is called with `@init:` must be return an object with this structure:

```js
{
  set() {},         // a new function that replaces the previous method  passed as the first parameter
  initialize() {}   // a function to initialize the object after the constructor call (`this` is the object instance)
}
```

##### metadata location

`X.prototype[Symbol.metadata]['#p']` where `X` is the class, and `#p` is the private property name.


### Static private getter

```js
class X {
  @decorator
  static #get P() {}
}
```

##### decorator parameters

- `value` with the method

- `context` with this object:

```js
{
  kind: "getter",
  name: "#P",
  access: {
    get: () => { /* ... */ }, 
    set: (v) => { /* ... */ },
  }
  isStatic: true,
  isPrivate: true,
  defineMetadata: (key, value) => { /* ... */ }
}
```

##### decorator return

- `undefined`, nothing is replaced

- a new function that replaces the previous method  passed as the first parameter


- if the decorator is called with `@init:` must be return an object with this structure:

```js
{
  get() {},         // a new function that replaces the previous method  passed as the first parameter
  initialize() {}   // a function to initialize the class
}
```

##### metadata location

`X[Symbol.metadata]['#P']` where `X` is the class and `#P` is the private method name.


### Static private setter

```js
class X {
  @decorator
  static #set P() {}
}
```

##### decorator parameters

- `value` with the method

- `context` with this object:

```js
{
  kind: "setter",
  name: "#P",
  access: {
    get: () => { /* ... */ }, 
    set: (v) => { /* ... */ },
  }
  isStatic: true,
  isPrivate: true,
  defineMetadata: (key, value) => { /* ... */ }
}
```

##### decorator return

- `undefined`, nothing is replaced

- a new function that replaces the previous method  passed as the first parameter

- if the decorator is called with `@init:` must be return an object with this structure:

```js
{
  set() {},         // a new function that replaces the previous method  passed as the first parameter
  initialize() {}   // a function to initialize the class
}
```

##### metadata location

`X[Symbol.metadata]['#P']` where `X` is the class and `#P` is the private method name.


## Field decorators

### Public field

```js
class X {
  @decorator
  p = 10;
}
```

##### decorator parameters

- `value` with the set method

- `context` with this object:

```js
{
  kind: "field",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: (key, value) => { /* ... */ }
}
```

##### decorator return

- `undefined`, nothing is replaced

- a new function whose return will be used as the initial value of the property.

##### metadata location

`X.prototype[Symbol.metadata].p` where `X` is the class, and `p` is the property name.


### Public field with accessor

```js
class X {
  @decorator accessor
  p = 10;
}
```

##### decorator parameters

- `value` is an object with a method `get()` and other method `set()` over the original property.

```js
{ get: <function>, set: <function> }
```

- `context` with this object:

```js
{
  kind: "auto-accesor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: (key, value) => { /* ... */ }
}
```

##### decorator return

- `undefined`, nothing is replaced

- an object with this structure:

```js
{
  get() {},         // a new get that replaces the previous get passed into the first parameter
  set(v) {},        // a new get that replaces the previous set passed into the first parameter
  initialize() {}   // a function to initialize the propety value
}
```

##### metadata location

`X.prototype[Symbol.metadata].p` where `X` is the class, and `p` is the property name.

### Static field

```js
class X {
  @decorator
  static P = 1;
}
```

##### decorator parameters

- `value` with the set method

- `context` with this object:

```js
{
  kind: "field",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: (key, value) => { /* ... */ }
}
```

##### decorator return

- `undefined`, nothing is replaced

- a new function whose return will be used as the initial value of the property.

##### metadata location

`X[Symbol.metadata].P` where `X` is the class, and `P` is the static property name.


### Static field with accessor

```js
class X {
  @decorator accessor
  static p = 10;
}
```

##### decorator parameters

- `value` is an object with a method `get()` and other method `set()` over the original property:

```js
{ get: <function>, set: <function> }
```

- `context` with this object:

```js
{
  kind: "auto-accesor",
  name: "p",
  isStatic: true,
  isPrivate: false,
  defineMetadata: (key, value) => { /* ... */ }
}
```

##### decorator return

- `undefined`, nothing is replaced

- an object with this structure:

```js
{
  get() {},         // a new get that replaces the previous get passed into the first parameter
  set(v) {},        // a new get that replaces the previous set passed into the first parameter
  initialize() {}   // a function to initialize the static property value
}
```

##### metadata location

`X[Symbol.metadata].P` where `X` is the class, and `P` is the static property name.


### private field

```js
class A {
  @decorator
  #p = 1;
}
```

##### decorator parameters

- `value` with the set method

- `context` with this object:

```js
{
  kind: "field",
  name: "#p",
  isStatic: true,
  isPrivate: false,
  defineMetadata: (key, value) => { /* ... */ }
}
```

##### decorator return

- `undefined`, nothing is replaced

- a new function whose return will be used as the initial value of the property.

##### metadata location

`X.prototype[Symbol.metadata]['#p']` where `X` is the class, and `#p` is the private property name.


### Static private field

```js
class X {
  @decorator
  static #set P = 0;
}
```

##### decorator parameters

- `value` with the method

- `context` with this object:

```js
{
  kind: "setter",
  name: "#P",
  access: {
    get: () => { /* ... */ }, 
    set: (v) => { /* ... */ },
  }
  isStatic: true,
  isPrivate: true,
  defineMetadata: (key, value) => { /* ... */ }
}
```

##### decorator return

- `undefined`, nothing is replaced

- a new function whose return will be used as the initial value of the property.

##### metadata location

`X[Symbol.metadata]['#P']` where `X` is the class and `#P` is the private method name.


## Functionality not supported yet

- Keyword `accessor` with private fields.
- Export `export` or `export default`.
- Anonymous class.

