//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// Template literal
const personalName = "Lucas";
console.log(`Hello, ${personalName}!`);

// Tagged Template: Uma Tagged Template é 
// uma chamada de função onde os argumentos 
// são derivados de uma Template Literal.

minhaFunction = (arrayOfStrings, city, since) =>{
    console.log(`${arrayOfStrings[0]}${city}${arrayOfStrings[1]}${since}`);
}

const city = 'Blumenau';
const since = '2001';

minhaFunction`I have lived in ${city} since ${since}.`;

// A chamada acime é equivalente a:
// minhaFunction(['I have lived in ' ,' since '], city, since);

// EXEMPLO REAL:
// destaca em negrito as palavras marcadas

function negrito(arrayStrings, ...valores) {

    return arrayStrings.reduce((acumulador, string, i) => {
     return `${acumulador}${string}${valores[i] ? `<strong>${valores[i]}</strong>` : ''}`;
    }, '');
}

const nome = 'Lucas Volkmann';
const redeSocial = '@lucasvolkmann2';

console.log(negrito`Me chamo ${nome} e minhas redes sociais são ${redeSocial}`);
