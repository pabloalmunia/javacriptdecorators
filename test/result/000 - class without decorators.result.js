class A {}

class C extends A {
  constructor() {
    super();
  }
  static M() {}
  static get Q() {}
  static set Q(v) {}
  static #M() {}
  static #P = 1;
  static get #Q() {}
  static set #Q(v) {}
  m() {}
  p = 1;
  get q() {}
  set q(v) {}
  #m() {}
  #p = 1;
  get #q() {}
  set #q(v) {}
}