//find array method
let people = [
  { name: "grace", age: 29, profession: "teacher", gender: "female", id: 1 },
  { name: "race", age: 27, profession: "sales", gender: "male", id: 2 },
  { name: "mace", age: 24, profession: "police", gender: "female", id: 3 },
  { name: "bace", age: 22, profession: "nurse", gender: "male", id: 4 },
  { name: "pace", age: 98, profession: "driver", gender: "female", id: 5 },
];

let nine = people.find(function (any) {
  return any.id === 3;
});
console.log(nine);
