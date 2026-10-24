// const add = (a: number, b: number) => {
//     return a + b;
// }
// // console.log(add(5, 10));

// //Pirmitive
// const student: string = "John";
// const age: number = 20;
// const isStudent: boolean = true;

// const coupon: null = null;
// const adress: undefined = undefined;

// // non Primitive
// //Object data type

// interface StudentObj {
//     id: number,
//     name: string,
//     age: number,
//     organization?: string, // This is optional
//     address?: string, // This is optional
// }

// // type StudentObj = {
// //     id: number,
// //     name: string,
// //     age: number,
// //     organization?: "programming Hero", // This is a string literal type, it can only have the value "programming Hero"
// //     address?: string, // This is optional
// // };

// const studentObj: StudentObj = {
//     id: 222,
//     name: "John",
//     age: 20,
//     address: "1123 dhaka street",
//     organization: "programming Hero",
// }
// // console.log("Student Object", studentObj.address);

// const studentObj2: StudentObj = {
//     id: 222,
//     age: 28,
//     name: "Spider Man",
//     organization: "programming Hero",
//     address: "1123 dhanmondi mortoja street",
// }

// // const studentObj: {
// //     id: number,
// //     name: string,
// //     age: number,
// //     organization: "programming Hero", // This is a string literal type, it can only have the value "programming Hero"
// //     address?: string, // This is optional
// // } = {
// //     id: 222,
// //     name: "John",
// //     age: 20,
// //     address: "1123 dahakd street",
// //     organization: "programming Hero",
// // }
// // console.log("Student Object", studentObj.address);

// // const studentObj2: {
// //     id: number,
// //     age: number,
// //     name:string,
// //     organization?: string
// // } ={
// //     id: 222,
// //     age: 20,
// //     name: "Spider Man",

// // }

// //Array


// const arr: number[] = [1, 2, 3, 4, 5];
// const foodNames: string[] = ["Pizza", "Burger", "Pasta"];

// //Function
// const sum = (a: number, b: number) => {
//     return a + b;
// }

// //tuple, fixed length array & fixed data type
// const myLocation: [number, number] = [40.7128, 74.0060]; // latitude and longitude
// const studentNameAndRoll: [string, number] = ["John", 34]; // Student Name & Roll

// studentNameAndRoll.push(200);


// type Food = {
//     name: string,
//     price: number
// }

// const food: Food = {
//     name: "Burger",
//     price: 250,
// }

// const getFoodPrice = (product: Food) => {
//     return product.price;
// };

// // rest operator, spread operator

// // spread operator

// type User = {
//     name: string,
//     profession: string
//     age: number,
//     address: {
//         city?: string,
//         postalCode?: number,
//     }
// }

// const user: User = {
//     name: "Mr. Ashik",
//     profession: "Software Engineer",
//     age: 30,
//     address: {
//         city: "Dhaka",
//     }
// };

// // console.log(user?.address?.postalCode)

// const updateUser = {
//     ...user,
//     age: 31,
// }

// // console.log(updateUser);

// // rest operator

// const sumation = (...numbers: number[]) => {
//     console.log(numbers);
//     const result = numbers.reduce((total, number) => total + number, 0);
//     return result;
// }

// // console.log(sumation(1, 2, 3, 4, 5));


// // const userName = user.name;
// // const userprofession = user.profession;

// const { name: userName } = user;

// // union tipe
// // intersecton type

// let userId: string | number;
// userId = "2233"

// type paymentMethod = "bkash" | "nagad" | "bank";

// const payment = (paymentGateway: paymentMethod) => {
//     console.log(`Payment method is ${paymentGateway}`);
// }
// // payment("bkash");

// // intersecton type
// type Profile = {
//     name: string,
//     profilePicture?: undefined,
//     nationalId: string,
// };

// type Employee = {
//     employeeId: number,
//     role: 'admin' | 'user',
// }

// type EmployeeProfile = Profile & Employee;

// const user2: EmployeeProfile = {
//     name: "mr. Ashik",
//     nationalId: "123456789",
//     employeeId: 1234,
//     role: "admin",
// }

// // smae same but different => ? ??
// const ashikVaierBoyosh = 20
// const nsg: string = ashikVaierBoyosh >= 21 ? "biye korte parbe" : "biye korte parbe na";
// // console.log(nsg);

// const userName1: string | null = "ashik";
// const displayName = userName1 ?? "Guest";
// console.log(displayName);