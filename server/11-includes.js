const pets = ['cat', 'dog', 'bat'];

let includeInArray= false;
for (var i = 0; i <  pets.length; i++) {
   const element = pets[i]
  if(element === 'dog'){
    includeInArray= true;
    break;
  }
}

console.log(includeInArray);


const method = pets.includes('dog')

console.log(method);