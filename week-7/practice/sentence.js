//Create a class named Sentence
//Add a constructor that takes a parameter named data, which sets the this.data property for an instance of a sentence.
class Sentence {
    constructor(data) {
        this.data = data;
    }
    wordCount(){
        return this.data.split('').length
    }
    hasLetter(letter){
        return this.data.indexOf(letter) !== -1;
    }

    countLetter(letter) {
        let count = 0;
        for(i = 0; i < this.data.length; i++) {
            if(letter === this.data[i]){
                count ++;
            }
        } return count;
    }
    stats(){
        const obj = {};
        const words = this.data.split(' ');
        words.forEach( word => {
          if(obj[word] === undefined){
            obj[word]= 0;
          }
          obj[word]++;
        });
        return obj;
      }
    }

//Use the window.prompt to get some data that you can use to create a sentence.
const data = prompt('enter a sentence');
const s1 = new Sentence (data);
console.log(s1.wordCount());
console.log(s1.hasLetter('X'));
console.log(s1.hasLetter('q'));
console.log(s1.letterCount('e'));
console.log(s1.letterCount(' '));



//Add a method to the Sentence class that counts the number of words in your sentence
//Add a method to the Sentence class called hasLetter, which takes a letter and returns true or false if the letter is in your sentence.