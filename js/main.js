const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true
  },
  {
    id: 2,
    text: "Meet the boss",
    isCompleted: true
  },
  {
    id: 3,
    text: "See the dentist",
    isCompleted: false
  },
]

//for loop
for(let i = 0; i < todos.length; i++){
  console.log("for: ", todos[i].text)
}

//while loop
let i = 0;
while(i < todos.length){
  console.log("while: ", todos[i].text)
  i++
}

//forEach
todos.forEach(function(todo) {
  console.log("foreach: ", todo.id)
})

//map - returns an array
const todoText = todos.map(function(todo) {
  return todo.text;
})
console.log("map: ", todoText)

//filter - returns an array
const todoFilter = todos.filter(function(todo) {
  return todo.isCompleted === true;
})
console.log("filter: ", todoFilter)

//filter and map - returns an array
const todoFilterMap = todos.filter(function(todo) {
  return todo.isCompleted === true;
}).map(function(todo) {
  return todo.text;
})
console.log("filter & map: ", todoFilterMap)


let contactArr = ["hac", "hackrank"];
const contactFilter = contactArr.filter(function(contact) {
  return contact.includes("hak");
})
console.log("contactFilter: ", contactFilter)
// function contacts(queries) {
//     /*
//      * Write your code here.
//      */
//     if(queries[0] === 'add') {
//        contactArr.push(queries[1]);
//     } else if (queries[0] === 'find'){
//         const contactFilter = contactArr.filter(function(contact) {
//             return contact.includes(queries[1]);
//         })
//         return contactFilter.length;
//     }

// }