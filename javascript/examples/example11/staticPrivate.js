// private static properties
class staticPrivate {
  static #number;

  //public static method
  static publicStaticMethod() {
    staticPrivate.#number = 42;
    return staticPrivate.#number; 
  }

  publicMethod() {
    staticPrivate.#number = 42;
    return staticPrivate.#number;
  }
}

console.log(staticPrivate.publicStaticMethod());
let publicMethod = new staticPrivate();
console.log(publicMethod.publicMethod());

// private static method
class staticPrivateMethod {
  //private static method
  static #staticPrivateNumber() {
    return 50;
  }

  //public static method
  static publicMethod1() {
    return staticPrivateMethod.#staticPrivateNumber();
  }

  //public static method
  static publicMethod2() {
    return this.#staticPrivateNumber();
  }
}

console.log(staticPrivateMethod.publicMethod1());
console.log(staticPrivateMethod.publicMethod2());

class Base {
  static #privateStaticMethod() {
    return 42;
  }
  static publicStaticMethod1() {
    return Base.#privateStaticMethod();
  }
  static publicStaticMethod2() {
    return this.#privateStaticMethod();
  }
}

class Derived extends Base {}

console.log(Derived.publicStaticMethod1());
// 42
console.log(Derived.publicStaticMethod2());
// TypeError: Cannot read private member #privateStaticMethod
// from an object whose class did not declare it
