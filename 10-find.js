const numbers = [1,30,49,29,10,13];

let rta= undefined;
for (var i = 0; i <  numbers.length; i++) {
   const element = numbers[i];
   if (element ===30) {
    rta = element;
    break;
   }
}

console.log(rta)

const rta2= numbers.find(item => item ===2030239)
console.log(rta2)

const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

const rta3= products.find(item => item.id=== '🍔');
const rta4= products.findIndex(item => item.id=== '🍔');
console.log(rta3);
console.log(rta4);

