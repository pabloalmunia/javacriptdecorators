function tracer (value, context) {
  console.log("value", value);
  console.log("context", context);
}

@init:tracer
class C {
}

console.log(C);