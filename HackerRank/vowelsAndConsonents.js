function vowelsAndConsonants(s) {
    let inputVowels = [];
    let inputConsonant = [];
    for (let elem of s) {
        if (elem === 'a' || elem === 'e' || elem === 'i') {
            inputVowels.push(elem);
        } else {
            inputConsonant.push(elem);
        }
    }
    for (let elem of inputVowels) {
        console.log(elem);
    }
    for (let elem of inputConsonant) {
        console.log(elem);
    }
  
}

vowelsAndConsonants('javascript');