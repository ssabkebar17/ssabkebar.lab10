/**
 * person.js
 */
"use strict";
 export class Person{
     name="";
     dateOfBirth=null;
     constructor(name,dateOfBirth){
     this.name =name;
     this.dateOfBirth=dateOfBirth;
     }
     getName(){

          return this.name
     }
     setName(value){
this.name =value;
     }
     getDateOfBirth(){
  return this.dateOfBirth;
     }
     setDateOfBirth(dateOfBirth){
          this.dateOfBirth =dateOfBirth
     }
     toString=()=>{
          let birthdate =this.dateOfBirth;
          let year = birthdate.getFullYear();
          let month = birthdate.getMonth()+1;
          let date = birthdate.getDate();
         console.log(`Name: ${this.name}, DateOfBirth: ${year} -${month} -${date} `)
     }

}
//let p1 = new Person("sol", new Date(1990,2,24))
// console.log(p1.dateOfBirth)
// console.log(p1.name)
//p1.setName("baba")
//p1.setDateOfBirth(new Date(200,12,16))
// console.log(p1.dateOfBirth)
// console.log(p1.name)
//p1.toString()
