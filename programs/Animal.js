class Dog{

    

    constructor(){

    age=25;
    name="Buddy";
    color="brown";
    breed="Golden Retriever";
        console.log("Dog object is created");
    }

    bark(){
        console.log("woof woof");
    }

    run(){
        console.log("Dog is running");
    }

    dance(){
        console.log("Dog is dancing");
    }

}
//Dog class is a blueprint for creating dog objects with properties like age, name, color, and breed, and methods like bark, run, and dance.
// tommy is an object of the Dog class, which means it is an instance of the Dog class and has access to all the properties and methods defined in the Dog class.

let tommy = new Dog();
tommy.bark();
tommy.run();
tommy.dance();

let scooby = new Dog();
scooby.bark();
scooby.run();
scooby.dance();

let rocky = new Dog();

