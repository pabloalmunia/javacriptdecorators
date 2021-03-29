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

### Fields

```js
class X {
  @decorator
  p = 10;
}
```


## Functionality not supported

- Decorate private members
- Decorate static members
- Decorators of type `@init:`.
- Field modifiers of type `prop`
- Export `export` or `export default`
- Anonymous class