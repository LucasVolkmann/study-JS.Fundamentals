// [ var ] -> variável global
var height = 5;
var width = 7;
// Não é necessário a declaração explícita 'var'
// mas é uma boa prática fazer.
area = height * width;

console.log(area);

// Pode ser declarada em qualquer parte do código
// por ser global e porque é uma linguagem compilada (e interpretada)
var area;

console.log("-------------")

// [ let ] -> permite que você declare variáveis limitando seu escopo
let outside = "I'm outside of the block."
{
    outside += "[updated]";
    let inside = "I'm inside of the block.";
    console.log("Inside the block")
}
console.log(outside)
try{
    console.log(inside)
}catch {
    console.log("Error!!")
}

// [ const ] -> aponta sempre para o mesmo espaço na memória

const primitiveType = 10;
const referenceType = { 'name': 'Lucas'};

try {
    primitiveType = 5;
} catch {
    console.log("It's not possible change the value of a 'const' variable")
}
referenceType.name = "G. Cano";
console.log(referenceType)
