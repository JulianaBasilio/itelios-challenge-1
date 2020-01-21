function isMultipleOf3And5(num) {
    return isMultipleOf3(num) && isMultipleOf5(num);
}

function isMultipleOf3(num) {
    return num % 3 === 0;
}

function isMultipleOf5(num) {
    return num % 5 === 0;
}

function isPrimeNumber(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0){
            return false;
        }
    }

    return true;
}

function main () {
    const company = "Itelios";
    const group = "Capgemini";
    const phrase = `${company}, part of ${group}`;
    const prime = "Número primo";

    for (let n = 1; n <= 100; n++) {
        if (isMultipleOf3And5(n)) {
            console.log(n + " - " + phrase);
        }
    
        else if (isMultipleOf3(n)) {
            console.log(n + " - " + company);
        }
    
        else if (isMultipleOf5(n)) {
            console.log(n + " - " + group);
        }
    
        if (n >= 2 && isPrimeNumber(n)) {
            console.log(n + " - " + prime);
        }
    }
}

main();
