const words = ['spray', 'limit', 'elite', 'exuberant'];

// const newArray = [];
// for (var i = 0; i <  words.length; i++) {
//   const item = words[i];
//   if(item.length >= 6) {
//     newArray.push(item);
//   }
// }

// console.log(newArray);

const metodoFilter = words.filter(item => item.length >= 6)

console.log(metodoFilter);


//Otro ejemplo

const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
  {
    customerName: "Nicole",
    total: 140,
    delivered: true,
  },
];

const rta3 = orders.filter(item => item.delivered && item.total >=100);
console.log(rta3)

const search = (query) =>{
  return orders.filter(item => {
    return item.customerName.includes(query);
  })
}

console.log(search('Nico'));