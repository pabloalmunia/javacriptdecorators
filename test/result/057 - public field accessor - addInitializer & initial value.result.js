function decorator(value, context) {
  context.addInitializer(function() {
    this.test = 10;
  });
  return {
    initialize(v) {
      return v * 2;
    },
    set(v) {
      value.set.call(this, v * 2);
    }
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

let _C_p_initializer_6e71;

const _C_member_initializers_178rp8 = [];

class __C_vtt8vo {
  constructor() {
    _C_member_initializers_178rp8.forEach(initialize => initialize.call(this));
  }
  #_p_private_property_78voho = _C_p_initializer_6e71.call(this, 10);
  get p() {
    return this.#_p_private_property_78voho;
  }
  set p(v) {
    this.#_p_private_property_78voho = v;
  }
}

const ___C_vtt8vo_p_descriptor_9dme8g = Object.getOwnPropertyDescriptor(__C_vtt8vo.prototype, "p");

const ___C_vtt8vo_p_result_26b7cg = decorator({
  get: ___C_vtt8vo_p_descriptor_9dme8g.get,
  set: ___C_vtt8vo_p_descriptor_9dme8g.set
}, {
  kind: "auto-accessor",
  name: "p",
  isStatic: false,
  isPrivate: false,
  ...__PrepareMetadata(__C_vtt8vo.prototype, "public", "p"),
  addInitializer: initializer => _C_member_initializers_178rp8.push(initializer)
}) || {};

_C_p_initializer_6e71 = ___C_vtt8vo_p_result_26b7cg.initialize || (v => v);

Object.defineProperty(__C_vtt8vo.prototype, "p", {
  get: ___C_vtt8vo_p_result_26b7cg.get || ___C_vtt8vo_p_descriptor_9dme8g.get,
  set: ___C_vtt8vo_p_result_26b7cg.set || ___C_vtt8vo_p_descriptor_9dme8g.set
});

let C = __C_vtt8vo;

Object.defineProperty(C, "name", {
  value: "C"
});

console.assert(new C().test === 10);

const c = new C();

console.assert(c.p === 20);

c.p = 20;

console.assert(c.p === 40);