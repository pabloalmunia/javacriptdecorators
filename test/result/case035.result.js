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

const _descriptor_5al236a8588 = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_5al236a8588.get = meta("d", 3)(_descriptor_5al236a8588.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? _descriptor_5al236a8588.get;

Object.defineProperty(C.prototype, "p", _descriptor_5al236a8588);

const _descriptor_cloha62fveg = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_cloha62fveg.get = meta("c", 3)(_descriptor_cloha62fveg.get, {
  kind: "getter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? _descriptor_cloha62fveg.get;

Object.defineProperty(C.prototype, "p", _descriptor_cloha62fveg);

const _descriptor_gdvl54jtrr = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_gdvl54jtrr.set = meta("b", 2)(_descriptor_gdvl54jtrr.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? _descriptor_gdvl54jtrr.set;

Object.defineProperty(C.prototype, "p", _descriptor_gdvl54jtrr);

const _descriptor_d8kstkk22hg = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_d8kstkk22hg.set = meta("a", 1)(_descriptor_d8kstkk22hg.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? _descriptor_d8kstkk22hg.set;

Object.defineProperty(C.prototype, "p", _descriptor_d8kstkk22hg);

console.log(C.prototype[Symbol.metadata]);