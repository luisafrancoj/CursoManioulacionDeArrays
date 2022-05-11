const items = [1,3,2,3 ,3,3,2];

const rta = items.reduce((acumulador, item)=>{
  if (!acumulador[item]){
    acumulador[item] = 1;
  } else {
    acumulador[item] = acumulador[item] + 1;;
  }
  return acumulador;
}, {})

console.log(rta)

const data = [
  {
    name: "Nicolas",
    level: "low",
  },
  {
    name: "Andrea",
    level: "medium",
  },
  {
    name: "Zulema",
    level: "hight",
  },
  {
    name: "Santiago",
    level: "low",
  },
  {
    name: "Valentina",
    level: "medium",
  },
  {
    name: "Lucia",
    level: "hight",
  },
];

const rta2 = data
.map(item=> item.level)
.reduce((acumulador, item)=>{
  if (!acumulador[item]){
    acumulador[item] = 1;
  } else {
    acumulador[item] = acumulador[item] + 1;;
  }
  return acumulador;
}, {});

console.log(rta2);


const list = [1,2,10,3,4,5,6,7,8,9,9,8,7,7,6,5,5,4,4,3,3,2,1,5];

const agrupador = list.reduce((obj , item) => {
  if (item < 5) {
    obj['1-4'] +=1 ;
  }else if (item <9 && item >= 5){
    obj['5-9'] +=1 ;
  }else{
    obj['9-10'] +=1;
  }
  return obj
} , {
  '1-4' : 0,
  '5-9' : 0,
  '9-10' :0,
});

console.log(agrupador);