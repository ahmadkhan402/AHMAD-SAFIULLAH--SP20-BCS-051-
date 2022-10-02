//**problem no 1. Write a function called sandwich calculator. This should accept one value: bread**/
function sandwich_calculator(value) {
    return value;
}
console.log(sandwich_calculator("bread"));

/*2*/
function sandwich_calculator(bread) {
    if (bread < 0) {
        return "We have't any sanwich available";
    }
    else if (bread % 2 == 0) {
        return "We have " + bread / 2 + " sanwich available";
    }
    else {
        const result = bread - 1
        return "We have " + (result / 2) + " sanwich and 1 Bread Available";
    }
}
console.log(sandwich_calculator(10));

/* 3. */
function sandwich_calculator(bread, chees) {
    return "Total breads " + (bread) + "\nTotal Chees " + chees;
}
console.log(sandwich_calculator(3, 3));

/* 4.It takes two breads and one cheese to make a sandwich. The function should return the total number of possible sandwiches, so if there are breads, but only 1 cheese, it should return 1.
*/ function sandwich_calculator(bread, chees) {
    let sum = 0
    while (chees == 1) {
        return console.log("1");
        break;
    }
    if (bread <= 0 || chees <= 0) {
        return "We have'nt any Sandwich available";
    }
    for (let index = 0; index < 100; index++) {
        if (bread > 1 && chees >= 1) {
            sum = sum + 1
            bread = bread - 2;
            chees -= 1;
        }
    }

    return "Number of sandwichs available " + sum;
}
console.log(sandwich_calculator(5, 0));

//* Problem :2
// Write a JavaScript program to list the properties of a JavaScript object. Go to the editor */
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};


//  //*Problem :3*/
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
console.log("\nObject before Deleted roll number Property:\n\n", student);

delete student.rollno

console.log("\nObject After Deleted roll number Property:\n\n", student);