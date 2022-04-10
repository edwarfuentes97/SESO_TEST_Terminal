"use strict";
// Print all entries, across all of the sources, in chronological order.
const binarySearchTree = require("./BinarySearchTree").BinarySearchTree


module.exports = (logSources, printer) => {

  const logSize = logSources.length;
  const bst = new binarySearchTree(); // instance the class
  let orderData = []; // create a tmp array
  logSources.forEach( (demo, index) => {
    let last = false; // flag to now when the array its over (for implementation whit n logs)
    index + 1 >= logSize ? last = true : last = false;
    if (bst.insert(demo.last , last)){ // If we are in the last position of the array, we pass the flan to return the balanced array
      orderData =  bst.insert(demo.last , last)
    }
  })



  // console.table(orderData) // show order data
  for (let i = 0; i < logSize; i++) { // We traverse the sorted array and paint it with the print method of printer
    printer.print(orderData[i])
  }
  printer.done();
  return console.log("Sync sort complete.");
};
