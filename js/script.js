/**
 * Average Shopping Bill created by Phirom Yim on 5/15/14.
 */
var grocery = [20, 6, 42, 119, 74]; //declare list of grocery cost
grocery[0] = 20; //first item in list always starts with 0
grocery[1] = 6;// second item in list
grocery[2] = 42;// third item in list
grocery[3] = 119;//fourth item in list
grocery[4] = 74;//fifth item in list
//total of grocery bill is [0-4]
var total= grocery[0]+grocery[1]+grocery[2]+grocery[3]+grocery[4]; //declaring array list
console.log(total);//print
//total of grocery bill divided by the number of items in the list is equal to the average
var average = total/5;//declaring expression
console.log(average);//print

alert("You have spent a $" + total + " on groceries over 5 weeks \nThat is an average of $" + average + " per week");