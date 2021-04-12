[JavascriptDecorators.org](https://JavascriptDecorators.org).


The tools are entirely experimental and evolving. There is no guarantee of they follow the proposed standard correctly.

- [Class decorators](#class-decorators)
- [Method decorators](#method-decorators)
  - [Public method](#public-method)
  - [Static methods](#static-methods)
  - [Private methods](#private-method)
  - [Static private member method](#static-private-method)
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
- [Functionality not supported yet](#functionality-not-supported-yet)


## Class decorators

```js
@decorator
class MyClass {}
```

#### decorator parameters

- `value` is the class itself

- `context` is this object:

```js
{
  kind: "class",
  name: "MyClass",
  defineMetadata(key, value) { /* ... */ },
}
```

#### if decorator return value is:

- `undefined`, nothing is replaced

- a new class, it replaces the previous class which was passed as the first parameter

#### if the decorator is called with `@init:`, it must return an object with this structure:

```js
{
  definition() {},  // replaces the previous class which was passed as the first parameter
  initialize() {},  // called after definition
}
```

#### metadata location

`MyClass[Symbol.metadata].constructor`


## Method decorators

### Public method

```js
class MyClass {
  @decorator
  someMethod() {}
}
```

##### decorator parameters

- `value` is the method itself

- `context` is this object:

```js
{
  kind: "method",
  name: "someMethod",
  isStatic: false,
  isPrivate: false,
  defineMetadata(key, value) { /* ... */ },
}
```

#### if decorator return value is:


- `undefined`, nothing is replaced

- a new function, it replaces the previous method which was passed as the first parameter

#### if the decorator is called with `@init:`, it must return an object with this structure:

```js
{
  method() {},      // replaces the previous method which was passed as the first parameter
  initialize() {},  // called in constructor
}
```

#### metadata location

`MyClass.prototype[Symbol.metadata].someMethod`


### Static methods

```js
class MyClass {
  @decorator
  static someMethod() {}
}
```

##### decorator parameters

- `value` is the method itself

- `context` is this object:

```js
{
  kind: "method",
  name: "someMethod",
  isStatic: true,
  isPrivate: false,
  defineMetadata(key, value) { /* ... */ },
}
```

##### if decorator return value is:

- `undefined`, nothing is replaced

- a new function, it replaces the previous method which was passed as the first parameter

#### if the decorator is called with `@init:`, it must return an object with this structure:

```js
{
  method() {},       // replaces the previous method which was passed as the first parameter
  initialize() {},   // called after definiton
}
```

##### metada location

`MyClass[Symbol.metadata].someMethod`


### Private method

```js
class MyClass {
  @decorator
  #someMethod() {}
}
```

##### decorator parameters

- `value` is the method itself

- `context` is this object:

```js
{
  kind: "method",
  name: "#someMethod",
  access: {
    get() { /* ... */ },
  },
  isStatic: false,
  isPrivate: true,
  defineMetadata(key, value) { /* ... */ },
}
```

##### if decorator return value is:

- `undefined`, nothing is replaced

- a new function, it replaces the previous method which was passed as the first parameter

#### if the decorator is called with `@init:`, it must return an object with this structure:

```js
{
  method() {},      // replaces the previous method which was passed as the first parameter
  initialize() {},   // called in constructor
}
```

##### metadata location

`MyClass.prototype[Symbol.metadata]['#someMethod']`


### Static private method

```js
class MyClass {
  @decorator
  static #someMethod() {}
}
```

##### decorator parameters

- `value` is the method itself

- `context` is this object:

```js
{
  kind: "method",
  name: "#someMethod",
  access: {
    get() { /* ... */ },
  },
  isStatic: true,
  isPrivate: true,
  defineMetadata(key, value) { /* ... */ },
}
```

##### if decorator return value is:

- `undefined`, nothing is replaced

- a new function, it replaces the previous method which was passed as the first parameter

#### if the decorator is called with `@init:`, it must return an object with this structure:

```js
{
  method() {},       // replaces the previous method which was passed as the first parameter
  initialize() {},   // called after definition
}
```

##### metadata location

`MyClass[Symbol.metadata]['#someMethod']`


## Getter and setter decorators

### Public getter

```js
class MyClass {
  @decorator
  get someGetter() {}
}
```

##### decorator parameters

- `value` is the getter itself

- `context` is this object:

```js
{
  kind: "getter",
  name: "someGetter",
  isStatic: false,
  isPrivate: false,
  defineMetadata(key, value) { /* ... */ },
}
```

##### if decorator return value is:

- `undefined`, nothing is replaced

- a new function, it replaces the previous getter which was passed as the first parameter

#### if the decorator is called with `@init:`, it must return an object with this structure:

```js
{
  get() {},          // replaces the previous getterwhich was passed as the first parameter
  initialize() {},   // called in constructor
}
```

##### metadata location

`MyClass.prototype[Symbol.metadata].someGetter`


### Public setter

```js
class MyClass {
  @decorator
  set someSetter(value) {}
}
```

##### decorator parameters

- `value` is the setter itself

- `context` is this object:

```js
{
  kind: "setter",
  name: "someSetter",
  isStatic: false,
  isPrivate: false,
  defineMetadata(key, value) { /* ... */ },
}
```

##### if decorator return value is:

- `undefined`, nothing is replaced

- a new function, it replaces the previous setter which was passed as the first parameter

#### if the decorator is called with `@init:`, it must return an object with this structure:

```js
{
  set(value) {},     // replaces the previous setter which was passed as the first parameter
  initialize() {},   // called in constructor
}
```

##### metadata location

`MyClass.prototype[Symbol.metadata].someSetter`


### Static getter

```js
class MyClass {
  @decorator
  static get someGetter() {}
}
```

##### decorator parameters

- `value` is the getter itself

- `context` is this object:

```js
{
  kind: "getter",
  name: "someGetter",
  isStatic: true,
  isPrivate: false,
  defineMetadata(key, value) { /* ... */ },
}
```

##### if decorator return value is:

- `undefined`, nothing is replaced

- a new function, it replaces the previous getter which was passed as the first parameter

#### if the decorator is called with `@init:` it must return an object with this structure:

```js
{
  get() {},          // replaces the previous getter which was passed as the first parameter
  initialize() {},   // called after definition
}
```

##### metadata location

`MyClass[Symbol.metadata].someGetter`


### Static setter

```js
class MyClass {
  @decorator
  static set someSetter(value) {}
}
```

##### decorator parameters

- `value` is the setter itself

- `context` is this object:

```js
{
  kind: "setter",
  name: "someSetter",
  isStatic: true,
  isPrivate: false,
  defineMetadata(key, value) { /* ... */ },
}
```

##### if decorator return value is:

- `undefined`, nothing is replaced

- a new function, it replaces the previous setter which was passed as the first parameter

#### if the decorator is called with `@init:`, it must return an object with this structure:

```js
{
  set(value) {},          // replaces the previous setter which was passed as the first parameter
  initialize() {},   // called after definition
}
```

##### metadata location

`MyClass[Symbol.metadata].someSetter`


### Private getter

```js
class MyClass {
  @decorator
  get #someGetter() {}
}
```

##### decorator parameters

- `value` is the getter itself

- `context` is this object:

```js
{
  kind: "getter",
  name: "#someGetter",
  access: {
    get() { /* ... */ },
  },
  isStatic: false,
  isPrivate: true,
  defineMetadata(key, value) { /* ... */ },
}
```

##### if decorator return value is:

- `undefined`, nothing is replaced

- a new function, it replaces the previous getter which was passed as the first parameter

#### if the decorator is called with `@init:`, it must return an object with this structure:

```js
{
  get() {},          // replaces the previous getter which was passed as the first parameter
  initialize() {},   // called in constructor
}
```

##### metadata location

`MyClass.prototype[Symbol.metadata]['#someGetter']`


### Private setter

```js
class MyClass {
  @decorator
  set #someSetter(value) {}
}
```

##### decorator parameters

- `value` is the setter itself

- `context` is this object:

```js
{
  kind: "setter",
  name: "#someSetter",
  access: {
    set(value) { /* ... */ },
  },
  isStatic: false,
  isPrivate: true,
  defineMetadata(key, value) { /* ... */ },
}
```

##### if decorator return value is:

- `undefined`, nothing is replaced

- a new function, it replaces the previous setter which was passed as the first parameter

#### if the decorator is called with `@init:`, it must return an object with this structure:

```js
{
  set(value) {},          // replaces the previous setter which was passed as the first parameter
  initialize() {},   // called in constructor
}
```

##### metadata location

`MyClass.prototype[Symbol.metadata]['#someSetter']`


### Static private getter

```js
class MyClass {
  @decorator
  static get #someGetter() {}
}
```

##### decorator parameters

- `value` is the getter itself

- `context` is this object:

```js
{
  kind: "getter",
  name: "#someGetter",
  access: {
    get() { /* ... */ },
  },
  isStatic: true,
  isPrivate: true,
  defineMetadata(key, value) { /* ... */ },
}
```

##### if decorator return value is:

- `undefined`, nothing is replaced

- a new function, it replaces the previous getter which was passed as the first parameter


#### if the decorator is called with `@init:` must be return an object with this structure:

```js
{
  get() {},          // replaces the previous getter which was passed as the first parameter
  initialize() {},   // called after definition
}
```

##### metadata location

`MyClass[Symbol.metadata]['#someGetter']`


### Static private setter

```js
class MyClass {
  @decorator
  static set #someSetter(value) {}
}
```

##### decorator parameters

- `value` is the setter itself

- `context` is this object:

```js
{
  kind: "setter",
  name: "#someSetter",
  access: {
    set(value) { /* ... */ },
  },
  isStatic: true,
  isPrivate: true,
  defineMetadata(key, value) { /* ... */ },
}
```

##### if decorator return value is:

- `undefined`, nothing is replaced

- a new function, it replaces the previous setter which was passed as the first parameter

#### if the decorator is called with `@init:` must be return an object with this structure:

```js
{
  set(value) {},          // replaces the previous setter which was passed as the first parameter
  initialize() {},   // called after definition
}
```

##### metadata location

`MyClass[Symbol.metadata]['#someSetter']`


## Field decorators

### Public field

```js
class MyClass {
  @decorator
  someField = 10;
}
```

##### decorator parameters

- `value` is field itself

- `context` with this object:

```js
{
  kind: "field",
  name: "someField",
  isStatic: false,
  isPrivate: false,
  defineMetadata(key, value) { /* ... */ },
}
```

##### if decorator return value is:

- `undefined`, nothing is replaced

- a new function, its return value will be used as the initial value of the field.

##### metadata location

`MyClass.prototype[Symbol.metadata].someField`


### Public field with accessor

```js
class MyClass {
  @decorator 
  accessor someField = 10;
}
```

##### decorator parameters

- `value` is the accessor field itself (a getter and setter pair)

- `context` is this object:

```js
{
  kind: "auto-accesor",
  name: "someField",
  isStatic: false,
  isPrivate: false,
  defineMetadata(key, value) { /* ... */ },
}
```

##### if decorator return value is:

- `undefined`, nothing is replaced

- an object with this structure:

```js
{
  get() {},                      // replaces previous getter which was passed in the first parameter
  set(value) {},                 // replaces previous setter which was passed in the first parameter
  initialize(initialValue) {},   // initializes accessor initial value
}
```

##### metadata location

`MyClass.prototype[Symbol.metadata].someField`

### Static field

```js
class MyClass {
  @decorator
  static someField = 1;
}
```

##### decorator parameters

- `value` is the field itself

- `context` is this object:

```js
{
  kind: "field",
  name: "someField",
  isStatic: true,
  isPrivate: false,
  defineMetadata(key, value) { /* ... */ },
}
```

##### if decorator return value is:

- `undefined`, nothing is replaced

- a new function, its return value will be used as the initial value of the field.

##### metadata location

`MyClass[Symbol.metadata].someField`


### Static field with accessor

```js
class MyClass {
  @decorator
  static accessor someField = 10;
}
```

##### decorator parameters

- `value` is the accessor field itself (a getter and setter pair)

- `context` is this object:

```js
{
  kind: "auto-accesor",
  name: "someField",
  isStatic: true,
  isPrivate: false,
  defineMetadata(key, value) { /* ... */ },
}
```

##### if decorator return value is:

- `undefined`, nothing is replaced

- an object with this structure:

```js
{
  get() {},                      // replaces previous getter which was passed in the first parameter
  set(value) {},                 // replaces previous setter which was passed in the first parameter
  initialize(initialValue) {},   // initializes accessor initial value
}
```

##### metadata location

`MyClass[Symbol.metadata].someField`


### private field

```js
class MyClass {
  @decorator
  #someField = 1;
}
```

##### decorator parameters

- `value` is the field itself

- `context` is this object:

```js
{
  kind: "field",
  name: "#someField",
  isStatic: true,
  isPrivate: false,
  defineMetadata(key, value) { /* ... */ },
}
```

##### if decorator return value is:

- `undefined`, nothing is replaced

- a new function, its return value will be used as the initial value of the field.

##### metadata location

`MyClass.prototype[Symbol.metadata]['#someField']`


### Static private field

```js
class MyClass {
  @decorator
  static #someField = 0;
}
```

##### decorator parameters

- `value` is the field itself

- `context` is this object:

```js
{
  kind: "setter",
  name: "#someField",
  access: {
    get() { /* ... */ },
    set(value) { /* ... */ },
  },
  isStatic: true,
  isPrivate: true,
  defineMetadata(key, value) { /* ... */ },
}
```

##### if decorator return value is:

- `undefined`, nothing is replaced

- a new function, its return value will be used as the initial value of the field.

##### metadata location

`MyClass[Symbol.metadata]['#someField']`


## Functionality not supported yet

- Keyword `accessor` with private fields.
- Export `export` or `export default`.
- Anonymous class.

