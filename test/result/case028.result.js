function addProperty(key, value) {
  return (klass, context) => {
    if (context.kind === "init-method" || context.kind === "init-getter" || context.kind === "init-setter") {
      return {
        initialize() {
          this[key] = value;
        }
      };
    }
  };
}

if (!Symbol.metadata) {
  Symbol.metadata = Symbol();
}

function __DefineMetadata(base, name) {
  return function(key, value) {
    if (!base[Symbol.metadata]) {
      base[Symbol.metadata] = Object.create(null);
    }
    if (!base[Symbol.metadata][name]) {
      base[Symbol.metadata][name] = {};
    }
    const db = base[Symbol.metadata][name];
    if (key in db) {
      if (!Array.isArray(db[key])) {
        return db[key] = [db[key], value];
      }
      return db[key].push(value);
    }
    return db[key] = value;
  };
}

function __applyDecorator(result, origin, collection) {
  if (typeof result === "undefined") {
    return origin;
  }
  if (typeof result === "function") {
    return result;
  }
  if (typeof result === "object") {
    if (typeof result.initialize === "function") {
      collection.push(result.initialize);
    }
    return result.method || result.get || result.set || result.definition || origin;
  }
  throw new TypeError("invalid decorator return");
}

const _member_initializers_uibt8vafm6g = [];

class C {
  constructor() {
    this.z = 100;
    _member_initializers_uibt8vafm6g.forEach(initialize => initialize.call(this));
  }
  get p() {}
}

const _descriptor_80eclc9cph8 = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_80eclc9cph8.get = __applyDecorator(addProperty("a", 1)(_descriptor_80eclc9cph8.get, {
  kind: "init-getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}), _descriptor_80eclc9cph8.get, _member_initializers_uibt8vafm6g);

Object.defineProperty(C.prototype, "p", _descriptor_80eclc9cph8);

const _descriptor_ba32fm1qbv8 = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_ba32fm1qbv8.get = __applyDecorator(addProperty("b", 2)(_descriptor_ba32fm1qbv8.get, {
  kind: "init-getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}), _descriptor_ba32fm1qbv8.get, _member_initializers_uibt8vafm6g);

Object.defineProperty(C.prototype, "p", _descriptor_ba32fm1qbv8);

const _member_initializers_olpkpo1taoo = [];

class D extends C {
  constructor() {
    super();
    _member_initializers_olpkpo1taoo.forEach(initialize => initialize.call(this));
  }
  get p() {}
}

const _descriptor_a3vetvjvcg8 = Object.getOwnPropertyDescriptor(D.prototype, "p");

_descriptor_a3vetvjvcg8.get = __applyDecorator(addProperty("c", 3)(_descriptor_a3vetvjvcg8.get, {
  kind: "init-getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(D.prototype, "p")
}), _descriptor_a3vetvjvcg8.get, _member_initializers_olpkpo1taoo);

Object.defineProperty(D.prototype, "p", _descriptor_a3vetvjvcg8);

const _descriptor_h26o7lb4dn = Object.getOwnPropertyDescriptor(D.prototype, "p");

_descriptor_h26o7lb4dn.get = __applyDecorator(addProperty("d", 4)(_descriptor_h26o7lb4dn.get, {
  kind: "init-getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(D.prototype, "p")
}), _descriptor_h26o7lb4dn.get, _member_initializers_olpkpo1taoo);

Object.defineProperty(D.prototype, "p", _descriptor_h26o7lb4dn);

const c = new C();

console.assert(c.a === 1);

console.assert(c.b === 2);

console.assert(c.c === undefined);

console.assert(c.d === undefined);

const d = new D();

console.assert(d.a === 1);

console.assert(d.b === 2);

console.assert(d.c === 3);

console.assert(d.d === 4);