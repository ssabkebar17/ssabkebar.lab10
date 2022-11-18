/**
 * main.js
 */
"use strict";

import { Person } from "./model/person.js";
import{Employee} from "./model/employee.js";
 
(function(){
let array =[
     new Person("Anna Smith" ,new Date(1998,12,15)),
     new Person("Bob Jone" ,new Date(1945,11,16)),
     new Person("Slim Helu" ,new Date(1976,9,24))];
     
     for(let key in array){
          array[key].toString()
     }
})();

console.log(".........Question 2....");
(function(){
     let emp1 = new Employee("Jim Hanson",new Date(1990,3,12), 245990.00,null);
     emp1.toString()
})()