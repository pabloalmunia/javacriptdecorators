class C {
  static set P(v) {}
}

const _descriptor_ef2fbpms4u8 = Object.getOwnPropertyDescriptor(C, "P");

_descriptor_ef2fbpms4u8.set = decorator2(_descriptor_ef2fbpms4u8.set, {
  kind: "setter",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: function(key, value) {
    if (!Symbol.metadata) {
      Symbol.metadata = Symbol();
    }
    if (!C[Symbol.metadata]) {
      C[Symbol.metadata] = Object.create(null);
    }
    if (!C[Symbol.metadata].P) {
      C[Symbol.metadata].P = {};
    }
    const db = C[Symbol.metadata].P;
    if (key in db) {
      if (!Array.isArray(db[key])) {
        return db[key] = [db[key], value];
      }
      return db[key].push(value);
    }
    return db[key] = value;
  }
}) ?? _descriptor_ef2fbpms4u8.set;

Object.defineProperty(C, "P", _descriptor_ef2fbpms4u8);

const _descriptor_7vk2ahm43og = Object.getOwnPropertyDescriptor(C, "P");

_descriptor_7vk2ahm43og.set = decorator1(_descriptor_7vk2ahm43og.set, {
  kind: "setter",
  name: "P",
  isStatic: true,
  isPrivate: false,
  defineMetadata: function(key, value) {
    if (!Symbol.metadata) {
      Symbol.metadata = Symbol();
    }
    if (!C[Symbol.metadata]) {
      C[Symbol.metadata] = Object.create(null);
    }
    if (!C[Symbol.metadata].P) {
      C[Symbol.metadata].P = {};
    }
    const db = C[Symbol.metadata].P;
    if (key in db) {
      if (!Array.isArray(db[key])) {
        return db[key] = [db[key], value];
      }
      return db[key].push(value);
    }
    return db[key] = value;
  }
}) ?? _descriptor_7vk2ahm43og.set;

Object.defineProperty(C, "P", _descriptor_7vk2ahm43og);