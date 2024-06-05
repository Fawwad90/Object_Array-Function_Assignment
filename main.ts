
// Assignment 01: Building your friend list

// Learning Objective: Practice working with objects and arrays in TypeScript to craete a data
// structure
// Task: Create a program that manages a simple friend list.
// 1. Define an object named people containing an empty array called friends.
// 2. Create three seperate objects , each representing a friend , with properties like firstName,
// lastName, and optionally id.
// 3. Add these friend objects to the friends array within the people object.
// 4. Output the entire people object to the console, displaying your information and your
// friend list.

// type Friend = {
//      firstName: string;
//      lastName: string;
//      id?: number;
// }
// let friend1: Friend = {
//       firstName: "Fawad",
//       lastName: "khan",
//       id: 187,
// }
// let friend2: Friend ={

//     firstName: "Farhat",
//     lastName: "khan",
//     id: 113,

// }
// let friend3: Friend = {

//     firstName: "Hasan",
//     lastName: "khan",
//     id: 136,
// }
// let people = {
//     friends: [friend1, friend2, friend3]}
// console.log(people);



// Assingment 02: Manipulating an array: Rearranging Words
// Objective:
// Rearrange an array using array mrthods to form the sentence "I am a student of GIAIC".
// Steps:
// 1. Scrambled Array:
// o Start with an array of elements in a scrambled order, like:
// const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC","I"];
// . Modify the Array:
// . Use methods like split(), join(), push(), (), shift(), and unshift() to:
// o Convert non-strings (booleans, numbers) to strings if needed.
// o Split elements into character arrays (optional).
// o Rearrange characters or elements in the desired order (modify original array or
// create temporary arrays).
// .Output the Result:
// . Use join() to combine elements back into a single string: "I am a student of GIAIC "

// const scrambledArray =["student", "of", true, 123, "am", "a", "GIAIC","I"]
// scrambledArray.splice(2,2)
// scrambledArray.pop()
// scrambledArray.unshift("I")
// scrambledArray[1] = "am";
// scrambledArray[2] = "a";
// scrambledArray[3] = "student";
// scrambledArray[4] = "of";
// scrambledArray[5] = "GIAIC";
// console.log(scrambledArray.join(" "));


// Assignment 03
// Assignment 3: Company Product Catalog
// Learning Objective: Implement data structures in TypeScript to represent and manage product
// information.
// Task: Create a program to represent a product catalog using an array and perform basic queries.
// 1. Define an array named inventory to store product information.
// 2. Create three separate objects, each representing a product, with properties like name,
// model, cost and quantity.
// 3. Add these objects to the inventory array using an sppropriate array method.
// 4. Access and log the quantity property of a specific product (e.g., third product) in the
// inventory array.
// 5. Explore adding and accessing more elements within the inventory array to understand
// how to manage product data.

// type products = {
//     name: string;
//     model: number;
//     cost:  number;
//     quantity: number;
// }
// let product: products={
//     name: "Khadi",
//     model:2024,
//     cost: 5500,
//     quantity: 200,
// }
// let product1: products = {
//     name: "Maria B",
//     model:2024,
//     cost: 4000,
//     quantity: 100,
// }
// let product2:products = {
//     name: "Nishat",
//     model:2023,
//     cost: 5500,
//     quantity: 250,
// }
// let inventory = {
//     product : [product , product1 , product2]
// }
// console.log("Quantity of third product:", inventory.product[2].quantity);

// let product3: products = {
//     name:"GulAhmad",
//     model:2022,
//     cost: 3500,
//     quantity:50,
    
// }
// inventory.product.push(product3)
// console.log("Name of the fourth product:", inventory.product[3].name);
// console.log("Cost of the first product:", inventory.product[0].cost); 

// Assingment 4:
// Student List Organizer
// Learning Objective: Get Comfortable with data structures (objects and arrays) and basic
// function in TypeScript.
// Tasks:
// 1. Student Data: The provided cade defines an interface named Student that describes
// student information like name, senior status (true/false), and whether they have completed
// their assignments (trur/false).
// o. Imagine this as a template for organizing student details.
// 2. Student List:
// o. An array named students stores information about several students using the
// student template. Think of this array as your slass list!
// 3. Find Senior students with Assignments (optional):
// o The code (not shown here) has a function that might find students who are seniors
// and have completed their addignments.
// o Can you guess why this information might be helpful?
// 4. Class List update:
// o Imagine you need to update your class list! The cade (not shown here) might have
// a function that removes students who haven't completed their assignments
// (assuming only seniors are responsible).
// o Can you think of any reason why this might be useful (consider limitations)

// interface Student {
//     name: string;
//     isSenior : boolean;
//     hasCompletedAssignment: boolean;
// }
// const students : Student[] = [
//     {
//         name:"Fawad",
//         isSenior : true,
//         hasCompletedAssignment: true,
//     },
//     {
//         name: "Hasan",
//         isSenior: false,
//         hasCompletedAssignment: true,
//     },
//     {
//         name: "Farhat",
//         isSenior: true,
//         hasCompletedAssignment: false,
//     },
//     {
//         name: "Alvina",
//         isSenior: false,
//         hasCompletedAssignment: true,
//     },
//     {
//         name: "Ali",
//         isSenior: true,
//         hasCompletedAssignment: false,
//     }
// ]
// console.log(students);


// // 3. Senior Students with assignment
// const findSenior = (students: Student[]) => {
//     return students.filter(student => student.isSenior && student.hasCompletedAssignment === true)
// }
// console.log(findSenior(students));

// // 4. Class list update
// const removeStudent = (students : Student[]) =>{
//     return students.filter(student => student.hasCompletedAssignment === false)
// }
// console.log(removeStudent(students));

