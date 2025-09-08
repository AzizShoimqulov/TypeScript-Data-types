"use strict";
//string. number. boolean. null. undefined. symbol. bigint
//Object -> array, function, object
Object.defineProperty(exports, "__esModule", { value: true });
// let title: string = 'Webbrain Academy';
// let num = 1234
// title = 'Webbrain IT Center';
// num = 123
// console.log(title);
// let big: BigInt = 2134n;
// big = 1234n;
// console.log(big);
// let obj = {};
// obj = { name: 'Webbrain' };
// let arr = [1,2,3,4];
// console.log(obj);
// function getData(name: String, age: Number){
//     return name;
// }
// console.log(getData("webbrain",123).toUpperCase());
// let language: "uzbek" | "english" |"rus";
// const data:{id?:number, value:"uzbek" | "english" |"rus"}[] =[
//     { id:1, value:"uzbek" },
//     { id:2, value:"english" },
//     { id:3, value:"rus" },
// ]
// data.map((lang) => {
//     language = lang.value;
// })
// let arrNum:( string | number )[] = [1,2,3,4,5 ,"sdfghj"];
// let arrStr: string [] = ['webbrain', 'it center'];
// let arr: Array < string| number > = ['fghj', 12]
// let arrN: (string | number )[] = [1,2,3]
// arrN.push(2131) 
// arrN.push("dfghjkl")
// console.log(arrN);
// let arrNum: (number | string)[] = [1, 2, '34', 3];
// for (let i of arrNum){
//     console.log(i);
// }
// interface user {
//     id: number,
//     name: string,
//     age: number
// }
// type Data = string[]
// let data = [
//     { id: 1, name: 'webbrain', age: 8},
//     { id: 2, name: 'it center', age: 7},     
// ]
// for (let i of data){
//     console.log(i.name.toUpperCase());
// }
//<<<<<<<<<<<<<<<<<<<< TUPLE>>>>>>>>>>>>>>>>>>>>>>>
// let ar: [string, number] = ['webbrain', 1234]
// ar.push(213121)
// ar.push("dfghjkl")
// console.log(ar);
//<<<<<<<<<<<<<<<<<<<<< ENUM >>>>>>>>>>>>>>>>>>>>>>>>>
// enum languages {
//     english,
//     uzbek,
//     rus,
// }
// console.log(languages);
// enum Role {
//   User,
//   Admin,
//   SuperAdmin
// }
// let myRole: Role = Role.Admin;
// console.log(myRole); 
// enum Status {
//   Active = "ACTIVE",
//   Inactive = "INACTIVE",
//   Pending = "PENDING"
// }
// let current: Status = Status.Active
// console.log(current);
function crash() {
    throw new Error("Xato bo'ldi!");
}
crash(); // bu funksiya hech qachon qiymat qaytarmaydi
//# sourceMappingURL=index.js.map