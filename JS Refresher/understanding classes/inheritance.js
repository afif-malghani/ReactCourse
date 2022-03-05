// define a base class human with basic human properties;
// Let's also define a function eat, just for fun


class human{
    constructor(){
        this.legs = 2;
        this.arms=2;
        this.feet =2;
        this.hands=2;
        this.head =1;
    }

    eat = ()=>console.log("yum");
}

// Let's define a derived class me.

class me extends human{
    constructor(name, age, profession){
        // Must use super here to import props of the base class
        // syntax is very strict regarding this and will return an error otherwise
        super();

        // if a prop from base class is changed after super, it will be overwritten for the
        // object of the derived class, and will be passed as set by the derived class to any
        // method, even those of the base class while being called form the derived object.
        this.name = name;
        this.age = age;
        this.profession = profession;
    }
    birthday = () => this.age+=1;
}

// creating objects :
hum = new human();
self_me = new me('afif', 24, 'Data Scientist');
console.log(self_me.name);
console.log(self_me.legs);
