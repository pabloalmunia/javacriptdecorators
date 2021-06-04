class TestClass {
  p = 0;
  run() {
  }
  get g() {}
  set g(v) {}
}
const objs = [];
for (let n = 0; n < 1000000; n++) {
  objs.push (new TestClass());
}
// module.exports = () => {
//   const { performance } = require('perf_hooks');
//   const objs = [];
//   const start = performance.now();
//   for (let n = 0; n < 1000000; n++) {
//     objs.push (new TestClass());
//   }
//   const end = performance.now();
//   console.log('test01', end - start);
// }