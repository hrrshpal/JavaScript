function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');

// eat(); //  undefined

// nemo.eat = eat;
// nemo.eat(); // nemo eats fish food

// nemo.eat = eat;
// eat(); // undefined

// nemo.swim(); // Nemo swimming in the water

// const swim = nemo.swim;
// swim(); // error, bec this is undefined and it cant read properties of undef
