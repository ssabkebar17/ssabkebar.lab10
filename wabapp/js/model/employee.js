"use strict";

import { Person } from "./person.js";

export class  Employee extends Person{
     constructor(name, dateOfBirth,salary, hireDate){
super(name,dateOfBirth)
this.salary =salary;
this.#hireDate =hireDate;
     }
     set salary( value){
this.#salary = value;
     }
     set hireDate (value){
          this.#hireDate =value;
     }
     get salary (){
          return this.#salary;
     }
     get hireDate (){
          return this.#hireDate;
     }
     doJob(jobTitle){
          console.log(`${this.name} is a ${jobTitle} who earns $${this.#salary}`  )
     }
     
#salary =0;
#hireDate =null;

}