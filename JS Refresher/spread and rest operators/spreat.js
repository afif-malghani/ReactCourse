const oldArr =[1, 2, 3];
// Here ... is used as spread operator which serves the purpose of spreading out the array
// thus assigning all it's elements to the new array:
const newArr = [...oldArr, elem_new]; 

// same can be used for objects as:
// const newObj = [...oldObj, newProp:5]

const sortArgs = (...args) => args.sort();
// In the line above the ... is used as rest operator, serving the purpose of creating a
// list of all input arguments tis allowing arbitrary number of arguments and making them
// accessable with one alias
