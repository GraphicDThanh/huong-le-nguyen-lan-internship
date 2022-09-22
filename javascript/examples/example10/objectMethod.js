const car = {
  brand: 'Ford',
  model: 'Fiesta',
  start: function() {
    console.log('Started');
  }
}
car.start();

const student = {
  id: 3,
  name: 'Nam',
  start: function() {
    console.log(`Started ${this.id} ${this.name}`);
  }
}
student.start();

const employee = {
  id: 10,
  name: 'Hung',
  start: () => {
    console.log(`Started ${this.id} ${this.name}`);
  }
}
employee.start();

const family = {
  total: 10,
  name: "Huond",
  img: "huong.jpg",
  goTo: function(destination) {
    console.log(`going to ${destination}`);
  } 
}

family.goTo("Rome");
