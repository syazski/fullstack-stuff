// 1. Create an array named myInstruments that contains the following instruments: flute, clarinet, saxophone, trumpet, and trombone.

let myInstruments = ["flute", "clarinet", "saxophone", "trumpet", "trombone"];

// 2. Write code to transform it into ["saxophone", "flute", "clarinet", "trumpet", "trombone", "tuba", "bassoon"].
// Hint: You can directly modify an index or use methods like push and unshift!
myInstruments.push("tuba","bassoon");
myInstruments.splice(2, 1);
myInstruments.unshift("saxophone");



/* 3. For the following prompts, write a function according to the description. Test your code as you write it by calling the function in the browser console.
    getFirstInstruments(instruments: string[]) returns the first instrument.
   Example: getFirstInstrument(myInstruments) >>> "saxophone" */

   function getFirstInstrument(instruments) {
    return instruments[0];
   }


// getLastInstrument(instruments: string[]) returns the last instrument.
// Example: getLastInstrument(myInstruments) >>> "bassoon"

   function getLastInstrument(instruments) {
    return instruments[instruments.length - 1];
   }


// getFirstAndLastInstruments(instruments: string[]) returns a new array containing the first and last instruments without modifying the original array.
// Example: getFirstAndLastInstruments(myInstruments) >>> ["saxophone", "bassoon"]
   function getFirstAndLastInstruments(instruments){
    return [getFirstInstrument(instruments), getLastInstrument(instruments)];
   }


// getFirstThreeInstruments(instruments: string[]) returns the first three instruments without modifying the original array.
// Example: getFirstThreeInstruments(myInstruments) >>> ["saxophone", "flute", "clarinet"]
// Hint: Use a loop to push items into a new array.

function getFirstThreeInstruments(instruments) {
    return [instruments[0],instruments[1],instruments[2]];
}
//console.log(getFirstThreeInstruments(myInstruments));

// getTInstruments(instruments: string[]) returns all instruments that start with the letter "t" without modifying the original array.
// Example: getTInstruments(myInstruments) >>> ["trumpet", "trombone", "tuba"]
// Hint: As you are iterating through the array, what do you need to check for before adding to the output array?

function getTInstruments(array) {
   let instruments = [];
   for (let i=0; i < array; i++){
      if (array[i][0] === "t") {
         return instruments.push(array[i]);
      }
      return instruments;
   }

   //console.log(getTInstruments(myInstruments));
   }

// (Challenge) getLongestNamedInstrument(instruments: string[]) returns the instrument with the longest name.
// Example: getLongestNamedInstrument(myInstruments) >>> "saxophone"
// Hint: Keep track of the instrument with the longest name you have seen so far as you iterate through the array. When should that information be updated?

function getLongestNamedInstrument (array) {
   for (i=0; i < array.length; i++) {
      if (array[i].length > array.length) {
         array = array[i];
      }
      return array;
   }
};

console.log(getLongestNamedInstrument(myInstruments));
