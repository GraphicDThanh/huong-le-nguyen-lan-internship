class MyClass {
  static #privateStaticMethod() {
    console.log("hello");
  }
}

class MyClasses {
  #field;

  get #myField() {
    return this.#field;
  }

  set #myField(value){
    this.#field = value;
  }
}
