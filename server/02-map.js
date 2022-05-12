const letters = ['a', 'b', 'c'];

const newArray= [];
for (let index = 0 ;  index < letters.length; index ++) {
   const element  =letters[index];
   newArray.push(element + '++');
}

console.log('original' , letters);

console.log('new' , newArray);


//MAP

const newArrayMap = letters.map(item => item + '++');

console.log(newArrayMap);

const array = ['a', 'bb', 'ccc'];
const rtaX = array.map(item => item.length);

console.log(rtaX);

