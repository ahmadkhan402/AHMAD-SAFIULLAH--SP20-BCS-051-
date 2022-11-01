/Task 0: Print hello world on console./
let v = "hello world";
console.log(v)
/*Task 1:
Create a variable of each datatype and print the data type on console */
var x = 25 
var y = "Itx String"
var z = 3.14
console.log(typeof (x), typeof (y), typeof (z));
/**
 * Task 2:
 Create a function that accepts 2 arguments and return the sum.
 */
function myarg(x, y) {
    var res = x + y;
    console.log("the sum of these 2 number is: ", res)
}
myarg(5, 4)
/**
  *Task 3:
  Create a function that accepts a number and print the table 
  of that number.
  */
function mytable(number) {
    for (var i = 1; i <= 10; i++) {
        var result = number * i;
        console.log(result);
    }
}
mytable(5);
/** Task 4:
  * Create an array that contains your information like name,regno.
  * Address and program. and print all these info on screen.
  */
let mydata = ["Ahmad Safiullah", "sp20-bcs-051", "Mianwali", "Computer Science"];
console.log("My array data is Shown: ", mydata);
/**Task1: 
 * Create a function named Student with properties name and class 
 * and gpa.
 *Create another function that creates and return the array of 3 
 students.
 Display the name of each student on screen.
*/
/Part 1/
function student(name, stu_class, gpa) {
    return `"Ahmad khan","BCS-3",2.65`;
}
console.log(student());

/Part 2/
var stu1 = [{ name: "Ahmad", stu_class: "BCS-6", gpa: 2.3 }];
var stu2 = [{ name: "usman", stu_clas: "BCS-5", gpa: 3.4 }];
var stu3 = [{ name: "ehsan", stu_clas: "BCS-2", gpa: 4 }];

function stu_funtion(name, stu_class, gpa) {
    return [stu1, stu2, stu3];
}
console.log(stu_funtion());

/**Task 2
 * Use filter function to separate students with gpa above 3.
 */
let stu = stu_funtion();
let filterstu = stu.filter(myresult);

function myresult(gpa) {
    gpa >= 3;
}
console.log(filterstu);

/* Task 1:
 * Create an arrow function that accepts your name and display on
 * console*/
let myfun = () => {
 return  "Ahmad Khan";
}

console.log(myfun());
/*Task2:
 * Create an arrow function that accepts any number of args.
 * Separate even and odd numbers from those.
 * and return an object with properties {odd:[],even[]}
 * before returning multiply odd numbers by 2, and divide even by 2.
 *
 */

var arrowfun = (numb) => { 
    
        let result = (numb % 2 == 0) ? "even" : "odd";
        console.log(`this number is ${result}`);
       if(result=="odd") {
        var results = numb*2;
        console.log(results);
    }
        else if(result=="even"){
            console.log(results);
        }
}
arrowfun(4);