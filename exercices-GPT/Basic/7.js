function sum(array){
    return array.reduce( (acm, crr) => acm + crr, 0);
}

console.log(sum([1,2,3,4]));