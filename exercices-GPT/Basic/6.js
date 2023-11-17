function multiplicationTable(number){
    let response = "";
    for( i = 1 ; i <= 10; i++){
        response += `${i} x ${number} = ${i*number}\n`
    }
    return response;
}

console.log(multiplicationTable(5))