class add{
    // Constuctor syntax is strictly limited to the one below hence arrow fucntion can not be
    // declared as a constructor
    constructor(a, b){
        this.num1 = a;
        this.num2 =b;
    }

    // for class methods, function keyword is not required and similary for arrow fucntions
    // class methods do not have to be assigned to variables, but this is only intorduced
    // in ES 6

    
    add_fn = () => this.num1+ this.num2;
}

// properites can also be assigned directly without usign constructor, though under the hood
// it also runs a constructor, but makes things easier for us to write. we also have to ignore
// "this" keyword while doing so.
