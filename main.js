// class Animals {
//     constructor(name, type) {
//         this.name = name;
//         this.type = type;
//     }
// }
// const animal = new Animals('Busya', 'quineaPig');
// console.log(animal);

// class User {
//     name;
//     constructor(name) {
//         this.name = name;
//     }
//  getName() {
//     return this.name;
//  }
//  changeName(newName) {
//     this.name = newName;
//  }
// }
// const names = new User({
//     name: 'Oleh'
// })
// names.changeName('Vlad');
// console.log(names.getName());
//DZ//
/ function Account(login, email) {
    //     this.login = login;
    //     this.email = email;
    //   }
      
    //   Account.prototype.getInfo = function() {
    //     console.log(`Login: ${this.login}, Email: ${this.email}`);
    //   };
      
    //   const user1 = new Account("user123", "user123@example.com");
    //   user1.getInfo();
    
    // // ex 2
    // class User {
    //   constructor({name, age, followers}){
    //     this.name = name;
    //     this.age = age;
    //     this.followers = followers;
    //   }
    //   getInfo(){
    //     console.log(`User: ${this.name} is ${this.age} years old and has ${this.followers} followers`)
    //   }
    // }
    // const mango = new User({
    //   name: 'Mango',
    //   age: 2,
    //   followers: 20,
    // });
    
    // mango.getInfo();
    
    // // ex 3
    // class Storage {
    //   constructor(initialItems) {
    //     this.items = initialItems || [];
    //   }
    
    //   getItems() {
    //     return this.items;
    //   }
    
    //   addItem(item) {
    //     this.items.push(item);
    //   }
    
    //   removeItem(item) {
    //     const index = this.items.indexOf(item);
    //     if (index !== -1) {
    //       this.items.splice(index, 1);
    //     }
    //   }
    // }
    
    // const storage = new Storage([
    //   'Нанітоіди',
    //   'Пролонгер',
    //   'Залізні жупи',
    //   'Антигравітатор',
    // ])
    
    // const items = storage.getItems();
    // console.table(items); 
    
    // storage.addItem('Дроїд');
    // console.table(storage.items);
    
    // storage.removeItem('Пролонгер');
    // console.table(storage.items);
    
    // // ex 4
    
    // class StringBuilder {
    //   constructor(initialValue) {
    //     this._value = initialValue;
    //   }
    
    //   get value() {
    //     return this._value;
    //   }
    
    //   append(str) {
    //     this._value += str;
    //   }
    
    //   prepend(str) {
    //     this._value = str + this._value;
    //   }
    
    //   pad(str) {
    //     this.prepend(str);
    //     this.append(str);
    //   }
    // }
    
    // const builder = new StringBuilder('.');
    
    // builder.append('^');
    // console.log(builder.value); // '.^'
    
    // builder.prepend('^');
    // console.log(builder.value); // '^.^'
    
    // builder.pad('=');
    // console.log(builder.value);
    
    // // ex 5
    
    // class Car {
    //   static getSpecs(car) {
    //     console.log(
    //       `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`
    //     );
    //   }
    
    //   constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
    //     this.speed = speed;
    //     this.price = price;
    //     this.maxSpeed = maxSpeed;
    //     this.isOn = isOn;
    //     this.distance = distance;
    //   }
    
    //   get price() {
    //     return this._price;
    //   }
    
    //   set price(value) {
    //     this._price = value;
    //   }
    
    //   turnOn() {
    //     this.isOn = true;
    //   }
    
    //   turnOff() {
    //     this.isOn = false;
    //     this.speed = 0;
    //   }
    
    //   accelerate(value) {
    //     if (this.speed + value <= this.maxSpeed) {
    //       this.speed += value;
    //     }
    //   }
    
    //   decelerate(value) {
    //     if (this.speed - value >= 0) {
    //       this.speed -= value;
    //     }
    //   }
    
    //   drive(hours) {
    //     if (this.isOn) {
    //       this.distance += hours * this.speed;
    //     }
    //   }
    // }
    
    // const mustang = new Car({ maxSpeed: 200, price: 2000 });
    
    // mustang.turnOn();
    // mustang.accelerate(50);
    // mustang.drive(2);
    
    // Car.getSpecs(mustang);
    // console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000
