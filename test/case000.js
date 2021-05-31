// Class
class A {}

class C extends A {
 
  // Constructor
  constructor() {
    super();
  }
  
  /* Static */
  // Method
  static M() {}
  // Field
  static P = 1;
  // // Getter
  static get Q() {}
  // Setter
  static set Q(v) {}

  /* Static and private */
  // Method
  static #M() {}
  // Field
  static #P = 1;
  // Getter
  static get #Q() {}
  // Setter
  static set #Q(v) {}

  /* Member */
  // Method
  m() {}
  // Field
  p = 1;
  // Getter
  get q() {}
  // Setter
  set q(v) {}

  /* Member and private */
  // Method
  #m() {}
  // Field
  #p = 1;
  // Getter
  get #q() {}
  // Setter
  set #q(v) {}

}