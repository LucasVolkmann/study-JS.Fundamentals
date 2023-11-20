function findLargest(array) {
    return array.reduce( (prev, current) => current>prev? current : prev);
}

console.log(findLargest([150,4,685,6,0]));