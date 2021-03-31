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
}

const _descriptor_1onn7nf2asg = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_1onn7nf2asg.set = decorator2(_descriptor_1onn7nf2asg.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? _descriptor_1onn7nf2asg.set;

Object.defineProperty(C.prototype, "p", _descriptor_1onn7nf2asg);

const _descriptor_3kh7gr44md = Object.getOwnPropertyDescriptor(C.prototype, "p");

_descriptor_3kh7gr44md.set = decorator1(_descriptor_3kh7gr44md.set, {
  kind: "setter",
  name: "p",
  isStatic: false,
  isPrivate: false,
  defineMetadata: __DefineMetadata(C.prototype, "p")
}) ?? _descriptor_3kh7gr44md.set;

Object.defineProperty(C.prototype, "p", _descriptor_3kh7gr44md);

const a = new C();