function reverseString(inputString){

    let response = [];

    for (let index = inputString.length-1; index >= 0; index--) {
        response.push(inputString[index]);
    }

    return response.toString().replaceAll(",", "");
}

console.log(reverseString("It's a string!"))