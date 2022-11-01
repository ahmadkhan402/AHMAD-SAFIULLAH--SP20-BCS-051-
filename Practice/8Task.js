/*Write program to print the kth digit from last. E.g. input 23617 and k=4 output */

function kthDigitFromLast(n, k)
{
    while ((k - 1) > 0 && n > 0)
	{
		n = n / 10;
		k--;
	}
	
	
	if (n == 0)
	{
		return -1;
	}
	
	// Print the right most digit
	else
	{
		console.log(parseInt(n % 10));
	}
}

// Driver code

// Given Input
var n = 23617;
var k = 4;

// Function call
kthDigitFromLast(n, k);

/* Problem 2:
Write program to find sum of all digits. Input 23617 output 2+3+6+1+8=20
(Hint: convert string to array and then use reduce function)
 */
// var a = "23618";
// let arr = [];
// for (let aa of a) {
//     arr.push(parseInt(aa));

//     console.log(arr);

//     var result = arr.reduce((prev, curr) => {
//         return prev + curr;
//     })

//     console.log(`total result=${result}`);
