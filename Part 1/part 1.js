//=============================================================================
/*                                  Part 1                                   */
//=============================================================================
/* (1) Think of some way to represent all of the students in RBK cohort2, if you know
		that each one have the following attributs:
		- name - age - education - nationality

	a- represent 2 of your frineds in rbk using the model that you have made and name them as your frineds name

	b- create a function called showFriend() that accepts one parameter, and output representation of your frined like the following
		showFriend(frinedData) // "Fatema with the age of 26 and with computer engineering education" 

	c- create a function called avergeStudents() to calculate the average age of your class students, is it possible to pass all your class students one by one ? think of a way to pass them in your function
*/
// write your code here ...
function makeclassmate(name,age,education,nationality){
	return {
		name:name,
		age:age,
		education:education,
		nationality:nationality
	}
}
var classmate1=makeclassmate("ahmad",22,"IT","syrian");
var classmate2=makeclassmate("montaser",24,"IT","syrian");

var frineds=[classmate1,classmate2];

function showFriend(calssmate){
	return "his name is : "+calssmate.name+ "his age is "+
	calssmate.age+ "he studied "+calssmate.education
	+ "he is "+calssmate.nationality
} 
function avgage(arr){
	var avg=0
	for (var i=0; i<arr.length;i++){
		avg+=(arr[i].age)/arr.length
	}
	return avg;
}



/*
 b-create a function called rangeSquared in which it will accept two parameters, and will output the squared numbers between these two parameter if the number is even 
	in order to square the numbers create a function called square and call it inside rangeSquared function
	rangeSquared(2)// [4];
	rangeSquared(3) // null
	rangeSquared(2,10)// [4,16,36,64,100];
*/
// write your code here ...
function range(num1,num2){
	
	if(num1% 2 === 1 && num2 === undefined){
		return null
	}
	if (num2 === undefined){
		return Math.pow(num1,2)
	}
	var arrrange=[];
	for (var i=num1;i<=num2;i++){
		if (i%2===0){
			arrrange.push(i)
		}
	}
	return arrrange.map(function(element,key){
		return Math.pow(element,2)
	})

}



/* c- Find all leaders in an array. A leader is an element larger than all elements to the right of it.
 	Example:
	leader([98, 20, 30, 5, 11, 27]) // output: [98, 30, 27]
*/

// write your code here ....
function findleader(arr){
	var leader=[];
	for (var i=0;i<arr.length;i++){
		if (arr[i]>arr[i+1]){
			leader.push(arr[i])
		}else {
			leader.push(arr[i+1])
		}
		i++;

	}
	return leader

}












