[JavascriptDecorators.org](https://JavascriptDecorators.org).


The tools are entirely experimental and evolving. There is no guarantee of they follow the proposed standard correctly.

## Table of Content

- [Class decorators](#class-decorators)

- [Method decorators](#method-decorators)

|          | public                          | private                                         |
|:---------|:--------------------------------|:------------------------------------------------|
| instance | [public method](#public-method) | [private method](#private-method)               |
| static   | [static method](#static-method) | [static private method](#static-private-method) |

- [Getter and setter decorators](#getter-and-setter-decorators)

|          | public                                                              | private                                                                                             |
|:---------|:--------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------|
| instance | [public getter](#public-getter)<br/>[public setter](#public-setter) | [private getter](#private-getter)<br/>[private setter](#private-setter)                             |
| static   | [static getter](#static-getter)<br/>[static setter](#static-setter) | [static private getter](#static-private-getter)<br/>[static private setter](#static-private-setter) |

- [Field decorators](#field-decorators)

|          | public                                                                                      | private                                                                                                                     |
|:---------|:--------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------|
| instance | [public field](#public-field)<br/>[public field with accessor](#public-field-with-accessor) | [private field](#private-field)<br/>[private field with accessor](#private-field-with-accessor)                             |
| static   | [static field](#static-field)<br/>[static field with accessor](#static-field-with-accessor) | [static private field](#static-private-field)<br/>[static private field with accessor](#static-private-field-with-accessor) |

- [Functionality not supported yet](#functionality-not-supported-yet)


## Class decorators

```js
@decorator
class MyClass {}
```

#### decorator parameters

- `value` is the class itself

- `context` is an object with this content:

```js
{
  kind: "class",
  name: "MyClass",
  defineMetadata(key, value) { /* ... */ },
  addInitializer(initalizer) { /* ... */ }
}
```

#### if the decorator is called with `@init:`

The `context` object includes the `addInitializer()` method that receives as a parameter a function
that will be executed when the class has been constructed. This function will receive as `this` the
class.

#### values returned by the decorator

- `undefined`, nothing is replaced

- a new class, it replaces the previous class which was passed as the first parameter


#### metadata location

`MyClass[Symbol.metadata].constructor`


---

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

- `context` is an object with this content:

```js
{
  kind: "method",
  name: "someMethod",
  isStatic: false,
  isPrivate: false,
  defineMetadata(key, value) { /* ... */ },
  addInitializer(initalizer) { /* ... */ }
}
```

#### if the decorator is called with `@init:`

The `context` object includes the `addInitializer()` method that receives as a parameter a function
that will be executed when the class is instantiated. This function will receive as `this` the new
object.


#### values returned by the decorator

- `undefined`, nothing is replaced

- a new function, it replaces the previous method which was passed as the first parameter


#### metadata location

`MyClass.prototype[Symbol.metadata].someMethod`


### Static method

```js
class MyClass {
  @decorator
  static someMethod() {}
}
```

##### decorator parameters

- `value` is the method itself

- `context` is an object with this content:

```js
{
  kind: "method",
  name: "someMethod",
  isStatic: true,
  isPrivate: false,
  defineMetadata(key, value) { /* ... */ },
  addInitializer(initalizer) { /* ... */ }
}
```

#### if the decorator is called with `@init:`

The `context` object includes the `addInitializer()` method that receives as a parameter a function
that will be executed when the class has been constructed. This function will receive as `this` the
class.

##### values returned by the decorator

- `undefined`, nothing is replaced

- a new function, it replaces the previous method which was passed as the first parameter

##### metadata location

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

- `context` is an object with this content:

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
  addInitializer(initalizer) { /* ... */ }
}
```

#### if the decorator is called with `@init:`

The `context` object includes the `addInitializer()` method that receives as a parameter a function
that will be executed when the class is instantiated. This function will receive as `this` the new
object.

##### values returned by the decorator

- `undefined`, nothing is replaced

- a new function, it replaces the previous method which was passed as the first parameter


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

- `context` is an object with this content:

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
  addInitializer(initalizer) { /* ... */ }
}
```

#### if the decorator is called with `@init:`

The `context` object includes the `addInitializer()` method that receives as a parameter a function
that will be executed when the class has been constructed. This function will receive as `this` the
class.

##### values returned by the decorator

- `undefined`, nothing is replaced

- a new function, it replaces the previous method which was passed as the first parameter

##### metadata location

`MyClass[Symbol.metadata]['#someMethod']`



---

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

- `context` is an object with this content:

```js
{
  kind: "getter",
  name: "someGetter",
  isStatic: false,
  isPrivate: false,
  defineMetadata(key, value) { /* ... */ },
  addInitializer(initalizer) { /* ... */ }
}
```
#### if the decorator is called with `@init:`

The `context` object includes the `addInitializer()` method that receives as a parameter a function
that will be executed when the class is instantiated. This function will receive as `this` the new
object.

##### values returned by the decorator

- `undefined`, nothing is replaced

- a new function, it replaces the previous getter which was passed as the first parameter

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

- `context` is an object with this content:

```js
{
  kind: "setter",
  name: "someSetter",
  isStatic: false,
  isPrivate: false,
  defineMetadata(key, value) { /* ... */ },
  addInitializer(initalizer) { /* ... */ }
}
```
#### if the decorator is called with `@init:`

The `context` object includes the `addInitializer()` method that receives as a parameter a function
that will be executed when the class is instantiated. This function will receive as `this` the new
object.

##### values returned by the decorator

- `undefined`, nothing is replaced

- a new function, it replaces the previous setter which was passed as the first parameter

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

- `context` is an object with this content:

```js
{
  kind: "getter",
  name: "someGetter",
  isStatic: true,
  isPrivate: false,
  defineMetadata(key, value) { /* ... */ },
  addInitializer(initalizer) { /* ... */ }
}
```
#### if the decorator is called with `@init:`

The `context` object includes the `addInitializer()` method that receives as a parameter a function
that will be executed when the class has been constructed. This function will receive as `this` the
class.

##### values returned by the decorator

- `undefined`, nothing is replaced

- a new function, it replaces the previous getter which was passed as the first parameter


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

- `context` is an object with this content:

```js
{
  kind: "setter",
  name: "someSetter",
  isStatic: true,
  isPrivate: false,
  defineMetadata(key, value) { /* ... */ },
  addInitializer(initalizer) { /* ... */ }
}
```

#### if the decorator is called with `@init:`

The `context` object includes the `addInitializer()` method that receives as a parameter a function
that will be executed when the class has been constructed. This function will receive as `this` the
class.

##### values returned by the decorator

- `undefined`, nothing is replaced

- a new function, it replaces the previous setter which was passed as the first parameter

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

- `context` is an object with this content:

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
  addInitializer(initalizer) { /* ... */ }
}
```

#### if the decorator is called with `@init:`

The `context` object includes the `addInitializer()` method that receives as a parameter a function
that will be executed when the class is instantiated. This function will receive as `this` the new
object.

##### values returned by the decorator

- `undefined`, nothing is replaced

- a new function, it replaces the previous getter which was passed as the first parameter


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

- `context` is an object with this content:

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
  addInitializer(initalizer) { /* ... */ }
}
```

#### if the decorator is called with `@init:`

The `context` object includes the `addInitializer()` method that receives as a parameter a function
that will be executed when the class is instantiated. This function will receive as `this` the new
object.

##### values returned by the decorator

- `undefined`, nothing is replaced

- a new function, it replaces the previous setter which was passed as the first parameter
- 

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

- `context` is an object with this content:

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
  addInitializer(initalizer) { /* ... */ }
}
```

#### if the decorator is called with `@init:`

The `context` object includes the `addInitializer()` method that receives as a parameter a function
that will be executed when the class has been constructed. This function will receive as `this` the
class.

##### values returned by the decorator

- `undefined`, nothing is replaced

- a new function, it replaces the previous getter which was passed as the first parameter



##### metadata location

`MyClass[Symbol.metadata]['#someGetter']`


### Static private setter

```js
class MyClass {
  @decorator
  static set #someSetter(value) {}
}
```
#### if the decorator is called with `@init:`

The `context` object includes the `addInitializer()` method that receives as a parameter a function
that will be executed when the class has been constructed. This function will receive as `this` the
class.

##### decorator parameters

- `value` is the setter itself

- `context` is an object with this content:

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
  addInitializer(initalizer) { /* ... */ }
}
```

##### values returned by the decorator

- `undefined`, nothing is replaced

- a new function, it replaces the previous setter which was passed as the first parameter


##### metadata location

`MyClass[Symbol.metadata]['#someSetter']`


---

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
  defineMetadata(key, value) { /* ... */ }
}
```

##### values returned by the decorator

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

- `context` is an object with this content:

```js
{
  kind: "auto-accesor",
  name: "someField",
  isStatic: false,
  isPrivate: false,
  defineMetadata(key, value) { /* ... */ }
}
```

##### values returned by the decorator

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

- `context` is an object with this content:

```js
{
  kind: "field",
  name: "someField",
  isStatic: true,
  isPrivate: false,
  defineMetadata(key, value) { /* ... */ }
}
```

##### values returned by the decorator

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

- `context` is an object with this content:

```js
{
  kind: "auto-accesor",
  name: "someField",
  isStatic: true,
  isPrivate: false,
  defineMetadata(key, value) { /* ... */ }
}
```

##### values returned by the decorator

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


### Private field

```js
class MyClass {
  @decorator
  #someField = 1;
}
```

##### decorator parameters

- `value` is the field itself

- `context` is an object with this content:

```js
{
  kind: "field",
  name: "#someField",
  isStatic: true,
  isPrivate: false,
  defineMetadata(key, value) { /* ... */ }
}
```

##### values returned by the decorator

- `undefined`, nothing is replaced

- a new function, its return value will be used as the initial value of the field.

##### metadata location

`MyClass.prototype[Symbol.metadata]['#someField']`


### Private field with accessor

```js
class MyClass {
  @decorator 
  accessor #someField = 10;
}
```

##### decorator parameters

- `value` is the accessor field itself (a getter and setter pair)

- `context` is an object with this content:

```js
{
  kind: "auto-accesor",
  name: "someField",
  accessor: {
    get() { /* ... */ },
    set() { /* ... */ }
  },
  isStatic: false,
  isPrivate: true,
  defineMetadata(key, value) { /* ... */ }
}
```

##### values returned by the decorator

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


### Static private field

```js
class MyClass {
  @decorator
  static #someField = 0;
}
```

##### decorator parameters

- `value` is the field itself

- `context` is an object with this content:

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
  defineMetadata(key, value) { /* ... */ }
}
```

##### values returned by the decorator

- `undefined`, nothing is replaced

- a new function, its return value will be used as the initial value of the field.

##### metadata location

`MyClass[Symbol.metadata]['#someField']`


### Static private field with accessor

```js
class MyClass {
  @decorator
  static accessor #someField = 10;
}
```

##### decorator parameters

- `value` is the accessor field itself (a getter and setter pair)

- `context` is an object with this content:

```js
{
  kind: "auto-accesor",
  name: "someField",
  access: {
    get() { /* ... */ },
    set(v) { /* ... */ }
  },
  isStatic: true,
  isPrivate: true,
  defineMetadata(key, value) { /* ... */ }
}
```

##### values returned by the decorator

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


---

---

## Functionality not supported yet

- Export `export` or `export default`.
- Anonymous class.

