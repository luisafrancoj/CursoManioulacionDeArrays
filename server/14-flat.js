const matriz = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];

const newArray = [];
for (var i = 0; i <  matriz.length; i++) {
   const array = matriz[i];
   for (var j = 0; j <  array.length; j++) {
      const element = matriz[i][j];
      newArray.push(element);
   }
}

const flatMethod =  matriz.flat(3)

console.log(newArray)
console.log(flatMethod)