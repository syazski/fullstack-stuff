function convertToMeters(yards) {
    return yards * 0.9144;
}

function createMessage(yards,meters) {
    let message = "";
    const numYards = yards * 1;

if (numYards === 1760) {
    message = "That is a long mile";
    console.log(message)
} else if (numYards === 100) {
    message = "That is as long as a football field";
    console.log(message)
} else if (numYards === 26) {
    message = "That is as long as a tennis court";
    console.log(message)
}

}

return ${yard} yards is ${message}

let inputYards = prompt("Input yard amount to convert")
console.log(inputYards)

let convertedNum = convertToMeters(inputYards)
console.log ("Converted Meters:", convertedNum)


    
