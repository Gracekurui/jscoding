//find array method
// let people = [
//   { name: "grace", age: 29, profession: "teacher", gender: "female", id: 1 },
//   { name: "race", age: 27, profession: "sales", gender: "male", id: 2 },
//   { name: "mace", age: 24, profession: "police", gender: "female", id: 3 },
//   { name: "bace", age: 22, profession: "nurse", gender: "male", id: 4 },
//   { name: "pace", age: 98, profession: "driver", gender: "female", id: 5 },
// ];

// let nine = people.find(function (any) {
//   return any.id === 3;
// });
// console.log(nine);

//filter array method
// let people = [
//   { name: "grace", age: 29, profession: "teacher", gender: "female", id: 1 },
//   { name: "race", age: 27, profession: "sales", gender: "male", id: 2 },
//   { name: "mace", age: 24, profession: "police", gender: "female", id: 3 },
//   { name: "bace", age: 22, profession: "nurse", gender: "male", id: 4 },
//   { name: "pace", age: 98, profession: "driver", gender: "female", id: 5 },
// ];

// let nine = people.filter(function (any) {
//   return any.id === 3;
// });
// console.log(nine);

//  start of for each array method

let people = [
  { name: "grace", age: 29, profession: "teacher", gender: "female", id: 1 },
  { name: "race", age: 27, profession: "sales", gender: "male", id: 2 },
  { name: "mace", age: 24, profession: "police", gender: "female", id: 3 },
  { name: "bace", age: 22, profession: "nurse", gender: "male", id: 4 },
  { name: "pace", age: 98, profession: "driver", gender: "female", id: 5 },
];

people.forEach(function (any) {
  console.log(any.name);
});
//  end of for each array method
