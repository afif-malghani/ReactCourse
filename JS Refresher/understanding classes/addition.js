class add{
    // Constuctor syntax is strictly limited to the one below hence arrow fucntion can not be
    // declared as a constructor
    constructor(a, b){
        this.num1 = a;
        this.num2 =b;
    }

    // for class methods, function keyword is not required and similary for arrow fucntions
    // class methods do not have to be assigned to variables
    
    add_fn = () => this.num1+ this.num2;
}