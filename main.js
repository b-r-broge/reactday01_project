//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (color, hungry) {
  this.status = 'normal',
  this.color = color,
  this.hungry = hungry
}

// Instances of Dog
// Needed: sadie, moonshine, atticus
let sadie = new Dog('black', false);
let moonshine = new Dog('tricolor', true);
let atticus = new Dog();

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (isCool) {
  this.pet = function (dog) {
    dog.status = 'happy'
  },
  this.feed = function (dog) {
    dog.hungry = false
  }
  this.cool = isCool
}

// Instances of Human
// Needed: mason, julia
let mason = new Human(false);
let julia = new Human(true);
