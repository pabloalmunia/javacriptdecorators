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

const _symbol_rh1a6eno29o = Symbol();

const _symbol_r5c6eoqmek = Symbol();

class C {
  static _temp_miosl2gbsvg(v) {}
  static [_symbol_rh1a6eno29o] = meta("a", 1)(C._temp_miosl2gbsvg, {
    kind: "setter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_symbol_rh1a6eno29o]
    },
    defineMetadata: __DefineMetadata(C, "#p")
  }) ?? C._temp_miosl2gbsvg;
  static [_symbol_rh1a6eno29o] = meta("b", 2)(C[_symbol_rh1a6eno29o], {
    kind: "setter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C[_symbol_rh1a6eno29o]
    },
    defineMetadata: __DefineMetadata(C, "#p")
  }) ?? C[_symbol_rh1a6eno29o];
  static set #p(v) {
    return C[_symbol_rh1a6eno29o].bind(this)(v);
  }
  static [_symbol_rh1a6eno29o]() {
    return C[_symbol_rh1a6eno29o].bind(this);
  }
  static _temp_9ge58gvbjr8() {}
  static [_symbol_r5c6eoqmek] = meta("c", 3)(C._temp_9ge58gvbjr8, {
    kind: "getter",
    name: "#p",
    isStatic: true,
    isPrivate: true,
    access: {
      get: C[_symbol_r5c6eoqmek]
    },
    defineMetadata: __DefineMetadata(C, "#p")
  }) ?? C._temp_9ge58gvbjr8;
  static [_symbol_r5c6eoqmek] = meta("d", 3)(C[_symbol_r5c6eoqmek], {
    kind: "getter",
    name: "#p",
    isStatic: false,
    isPrivate: true,
    access: {
      get: C[_symbol_r5c6eoqmek]
    },
    defineMetadata: __DefineMetadata(C, "#p")
  }) ?? C[_symbol_r5c6eoqmek];
  static get #p() {
    return C[_symbol_r5c6eoqmek].bind(this)();
  }
  static [_symbol_r5c6eoqmek]() {
    return C[_symbol_r5c6eoqmek].bind(this);
  }
}

delete C._temp_9ge58gvbjr8;

delete C._temp_miosl2gbsvg;

console.log(C[Symbol.metadata]);