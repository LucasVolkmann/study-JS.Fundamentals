function avg(array) {
    return (array.reduce( (previous, current) => previous + current ) / array.length);
}

console.log(avg([5, 5, 6, 4, 5, 10, 0]))