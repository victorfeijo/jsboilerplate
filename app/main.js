class Foo {
  constructor(some) {
    this.some = some;
  }

  log() {
    console.log(this.some);
  }

  alert() {
    alert(`alert ${this.some}`);
  }
}

const foo = new Foo('Foo');
document.getElementById('alert').addEventListener('click', foo.alert.bind(foo));
document.getElementById('log').addEventListener('click', foo.log.bind(foo));

