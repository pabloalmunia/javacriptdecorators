const KEY = Symbol();

function metadata(data) {
  return function(value, context) {
    context.setMetadata(KEY, data);
  };
}

if (!Symbol.metadata) {
  Symbol.metadata = Symbol("Symbol.metadata");
}

const __metadataPrivate = new WeakMap();

function __PrepareMetadata(base, kind, property) {
  const createObjectWithPrototype = (obj, key) => Object.hasOwnProperty.call(obj, key) ? obj[key] : Object.create(obj[key] || Object.prototype);
  return {
    getMetadata(key) {
      if (base[Symbol.metadata] && base[Symbol.metadata][key] && typeof base[Symbol.metadata][key][kind] !== "undefined") {
        return kind === "public" ? base[Symbol.metadata][key].public[property] : kind === "private" ? __metadataPrivate.has(base[Symbol.metadata][key]) ? __metadataPrivate.get(base[Symbol.metadata][key])[property] : undefined : base[Symbol.metadata][key][kind];
      }
    },
    setMetadata(key, value) {
      if (typeof key !== "symbol") {
        throw new TypeError("the key must be a Symbol");
      }
      base[Symbol.metadata] = createObjectWithPrototype(base, Symbol.metadata);
      base[Symbol.metadata][key] = createObjectWithPrototype(base[Symbol.metadata], key);
      base[Symbol.metadata][key].public = createObjectWithPrototype(base[Symbol.metadata][key], "public");
      if (!Object.hasOwnProperty.call(base[Symbol.metadata][key], "private")) {
        Object.defineProperty(base[Symbol.metadata][key], "private", {
          get() {
            return Object.values(__metadataPrivate.get(base[Symbol.metadata][key]) || {}).concat(Object.getPrototypeOf(base[Symbol.metadata][key])?.private || []);
          }
        });
      }
      if (kind === "public") {
        base[Symbol.metadata][key].public[property] = value;
      } else if (kind === "private") {
        if (!__metadataPrivate.has(base[Symbol.metadata][key])) {
          __metadataPrivate.set(base[Symbol.metadata][key], {});
        }
        __metadataPrivate.get(base[Symbol.metadata][key])[property] = value;
      } else if (kind === "constructor") {
        base[Symbol.metadata][key].constructor = value;
      }
    }
  };
}

class __A_9v4lpo {
  a() {}
}

__A_9v4lpo.prototype.a = metadata(10)(__A_9v4lpo.prototype.a, {
  kind: "method",
  name: "a",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__A_9v4lpo.prototype, "public", "a")
}) ?? __A_9v4lpo.prototype.a;

let A = __A_9v4lpo;

Object.defineProperty(A, "name", {
  value: "A"
});

console.assert(A.prototype[Symbol.metadata][KEY].public.a === 10);

class __B_uqqmcg extends A {
  b() {}
}

let B = __B_uqqmcg;

Object.defineProperty(B, "name", {
  value: "B"
});

console.assert(B.prototype[Symbol.metadata][KEY].public.a === 10);

class __C_696n58 extends B {
  c() {}
}

__C_696n58.prototype.c = metadata(30)(__C_696n58.prototype.c, {
  kind: "method",
  name: "c",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__C_696n58.prototype, "public", "c")
}) ?? __C_696n58.prototype.c;

let C = __C_696n58;

Object.defineProperty(C, "name", {
  value: "C"
});

console.log(C.prototype[Symbol.metadata][KEY]);

console.assert(C.prototype[Symbol.metadata][KEY].public.a === 10);

console.assert(C.prototype[Symbol.metadata][KEY].public.c === 30);

console.assert(A.prototype[Symbol.metadata][KEY].public.c !== 30);