const numbers = [1, 30, 49, 29,10,13];

let rta = true
for (var i = 0; i <  numbers.length; i++) {
   const element = numbers[i];
   if (element >= 40) {
    rta = false
   }
}

console.log(rta)

const rta2 = numbers.every(item => item <=40);

console.log(rta2)