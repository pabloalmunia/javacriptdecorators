function meta(key, value) {
  return function decorator1(element, context) {
    context.defineMetadata(key, value);
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

class C {
  set p(v) {}
  get p() {}
}

const _descriptor_aiv5dg8uhro = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_aiv5dg8uhro.get = meta("c", 3)(_descriptor_aiv5dg8uhro.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? _descriptor_aiv5dg8uhro.get;

Object.defineProperty(C.prototype, "p", _descriptor_aiv5dg8uhro);

const _descriptor_4rbcovgc30o = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_4rbcovgc30o.get = meta("d", 3)(_descriptor_4rbcovgc30o.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? _descriptor_4rbcovgc30o.get;

Object.defineProperty(C.prototype, "p", _descriptor_4rbcovgc30o);

const _descriptor_2bjsfkigfdg = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_2bjsfkigfdg.set = meta("a", 1)(_descriptor_2bjsfkigfdg.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? _descriptor_2bjsfkigfdg.set;

Object.defineProperty(C.prototype, "p", _descriptor_2bjsfkigfdg);

const _descriptor_1crgmm57k6o = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_1crgmm57k6o.set = meta("b", 2)(_descriptor_1crgmm57k6o.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? _descriptor_1crgmm57k6o.set;

Object.defineProperty(C.prototype, "p", _descriptor_1crgmm57k6o);

console.log(C.prototype[Symbol.metadata]);