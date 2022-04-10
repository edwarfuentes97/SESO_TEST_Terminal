"use strict";
// Print all entries, across all of the *async* sources, in chronological order.

const {BinarySearchTree: binarySearchTree} = require("./BinarySearchTree");
const getLogs = require("../lib/log-source")
module.exports = (logSources, printer) => {

  const gLog = new getLogs();
  return new Promise( (resolve, reject) => {


    /*TODO
    * The same that in the sync solution but whit a promise.
    * Subscribe to popAsync and await for every log, then print and finally do the print.done();
    * */

    const logSize = logSources.length;
    const bst = new binarySearchTree(); // instance the class
    let orderData = []; // create a tmp array
    logSources.forEach(  (demo, index) => {
      let last = false; // flag to now when the array its over (for implementation whit n logs)
      index + 1 >= logSize ? last = true : last = false;
      if (bst.insert(demo.last, last)) { // If we are in the last position of the array, we pass the flan to return the balanced array
        orderData = bst.insert(demo.last, last)
      }
    })


    // console.table(orderData) // show order data
    for (let i = 0; i < logSize; i++) { // We traverse the sorted array and paint it with the print method of printer
      printer.print(orderData[i])
    }
    printer.done();


    resolve(console.log("Async sort complete."));
  });
};
