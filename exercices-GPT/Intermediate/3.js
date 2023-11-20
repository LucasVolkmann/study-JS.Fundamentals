function isPalindrome(string) {
    string = string.toLowerCase();
    for (let i = 0; i < string.length / 2; i++) {
        if(!(string[i] == string[(string.length-1) - i])) {
            return false;
        }
    }
    return true;
}

console.log(`'aRara: '${isPalindrome("aRara")}`)
console.log(`'lucas: '${isPalindrome("lucas")}`)
