[JavascriptDecorators.org](https://JavascriptDecorators.org) content and tool.

The tools are entirely experimental and evolving. There is no guarantee of their follow correctly
the proposed standard.

## Supported functionality

### Class

```js
@decorator
class X {
}
```

### Methods

```js
class X {
  @decorator
  m() {}
}
```

#### static methods

```js
class C {
  @decorator
  static M() {}
}
```

### Getter/Setters

```js
class X {
  @decorator
  get p() {}
}
```

```js
class X {
  @decorator
  set p(v) {}
}
```

#### static getter/setter

```js
class A {
  @decorator
  static get P() {}
}
```

```js
class A {
  @decorator
  static set P(v) {}
}
```

### Fields

```js
class X {
  @decorator
  p = 10;
}
```

#### static field

```js
class A {
  @decorator
  static P = 1;
}
```


## Functionality not supported yet

- Decorate private members
- Decorators of type `@init:`.
- Field modifiers with the keyword `accesor`
- Export `export` or `export default`
- Anonymous class
