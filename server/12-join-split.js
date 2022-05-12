const elements = ['Fire', 'Air', 'Water'];

let rtaFinal = '';
const separator = '--';
for (var i = 0; i <  elements.length; i++) {
   const element = elements[i];
   rtaFinal =  rtaFinal + element + separator;
}

console.log(rtaFinal);


const rta2 = elements.join('//');

console.log(rta2);

const tittle = 'Curso de Manipulacion de Arrays'

const splitString = tittle.split(' ');

const urlFinal = splitString.join('-').toLowerCase();

console.log(splitString);
console.log(urlFinal);

