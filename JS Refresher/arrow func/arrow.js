const add = (a, b) => {
    return a+b;
}

// Benifits:
    // Helps with context resolution issues that usually occour with "this"
//  For exactly one argument omit the paranthesis
// for a one line body we can also ommit the curly braces and the return keyword thus the
// function above can also be written as :

const add_one_liner = (a, b) => a+b;