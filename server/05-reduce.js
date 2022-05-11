const totals = [1,2,3,4]

let  sum = 0;

for (var i = 0; i <  totals.length; i++) {
   const element = totals[i];
   sum= sum + element;
}

console.log(sum);

let sum2 = totals.reduce((valorAcumulado,nuevoElemento)=>
 valorAcumulado + nuevoElemento, 0
)

console.log(sum2);

const rta = totals.reduce((sum,element) => sum + element , 0);
console.log(rta)