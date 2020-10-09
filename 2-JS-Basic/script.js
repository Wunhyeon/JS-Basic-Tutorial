var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

/*********************************
*Variable mutation and type coercion 
*/ 


var firstName = 'John';
var age = 28;

//Type coercion
console.log(firstName + ' ' + age);
//age는 number이지만 firstName(John)과 함께 String type으로 나온다. 이게 type coercion이다.
//this works thanks to something called type coercion.
//JavaScript automatically converts types one from another as it's needed.

var job, isMarried;
job = 'teacher';
//isMarried = false;

console.log(firstName + 'is a ' + age + ' year old ' + job + '. Is he married ? ' + isMarried);
//undefined도 string으로 type coercion된다.

//Variable mutation
age = 'twenty eight';
job = 'driver';

//alert(firstName + 'is a ' + age + ' year old ' + job + '. Is he married ? ' + isMarried);

//var lastName = prompt('What is his last name?');
//console.log(firstName + ' ' + lastName);

/***********************************
 * Basic operators
 */
 var now, yearJohn, yearMark;

 now = 2020;
 ageJohn = 28;
 ageMark = 33;

 //Math operators
 yearJohn = now - 28;
 yearMark = now - 33;
 
 console.log(yearJohn);

 console.log(now + 2);
 console.log(now * 2);
 console.log(now / 10);

//Logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

//typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than john');
var x;
console.log(typeof x);

/***********************
 * Operator precedence
 */

var now = 2020;
var yearJohn = 1989;
var fullAge = 18;

//Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;

//Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;// 8 * 4 -6 // 32 - 6 // 26 // 26 = y/ y=x
console.log(x, y);

//More operators
x = x*2;
x *= 2; //두개는 같은 의미

/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), 
which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). 
(mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. 
    (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

/*
var marksHeight, marksMass, johnsHeight, johnsMass, marksBMI, johnsBMI;

marksHeight = prompt(`Please input Marks's Height`);
marksMass = prompt(`Please input Mark's Mass`);
johnsHeight = prompt(`Please input John's height`);
johnsMass = prompt(`Please input John's Mass`);


marksBMI = marksMass/(marksHeight*marksHeight);
johnsBMI = johnsMass/(Math.pow(johnsHeight,2));

console.log("Mark's BMI : " + marksBMI);
console.log(`John's BMI : ${johnsBMI}`);

var isMarksBmiHigerThanJohn = marksBMI>johnsBMI;
console.log("Is Mark's BMI higher than John's ? " + isMarksBmiHigerThanJohn);
*/

/************************************
 * If / else statements
 */

var firstName = 'John';
var civilStatus = 'married';

if (civilStatus === 'married'){
    console.log(firstName + ' is married!');
} else{
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = false;
if (isMarried){
    console.log(firstName + ' is married!');
} else{
    console.log(firstName + ' will hopefully marry soon :)');
}

/******************************************
 * Boolean logic
 */

var firstName = 'John';
var age = 20;

if(age < 13){
    console.log(firstName + ' is a boy');
} else if(age >= 13 && age < 20){    //between 13 and 20
    console.log(firstName + ' is a teenager');
} else if(age >= 20 && age < 30){
    console.log(firstName + ' is a young man');
}else{
    console.log(firstName + ' is a man');
}

/***********************************
 * The Ternary Operator and Switch Statements
 */

var firstName = 'John';
var age = 16;

age >= 18 ? console.log(firstName + " drinks beer.") : console.log(firstName + " drinks juice");

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

//Switch statement
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor' : 
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon'); 
        break;
    case 'designer' : 
        console.log(firstName + ' designs beautiful websites');
        break;
    default:
        console.log(firstName + ' does something else');
        break;
}

age = 18;

switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager');
        break;
    case age >=20 && age < 30 : 
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man');
        break;
}

/************************************
 * Truthy and Falsy values and equality operators
 */
//falsy value is the value that is considered false when evaluated in an if/else statement condition. and the values that are falsy in JavaScript

//falsy values : undefined, null, 0, ''(빈 스트링), NaN
//truthy values : Not falsy values

var height;
height = 0;
if(height || height === 0){
    console.log('Variable is defined');
}else{
    console.log('Variable has Not been defined');
}

// Equality operators
height = 23;
if(height == '23'){
    console.log('The ==operator does type coercion!');
}

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. 
In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console.
 Also include the average score in the output.
3. Then change the scores to show different winners.
 Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points.
 Like before, log the average winner to the console.
  HINT: you will need the && operator to take the decision.
   If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

var johnTeamScore = [89, 120, 103];
var mikeTeamScore = [116, 94, 123];
var maryTeamScore = [97, 134, 105];

var average = (score) =>{
    var sum,average;
    sum = 0;
    score.forEach(element => {
        sum += element;
    });
    return average = sum/score.length;
}

var johnTeamAverage = average(johnTeamScore);
var mikeTeamAverage = average(mikeTeamScore);
var maryTeamAverage = average(maryTeamScore);
console.log(`johnTeamAverage : ${johnTeamAverage}`);
console.log(`mikeTeamAverage : ${mikeTeamAverage}`);
console.log(`maryTeamAverage : ${maryTeamAverage}`);

var winner,winnersScore;

if(johnTeamAverage > mikeTeamAverage && johnTeamAverage > maryTeamAverage){
    winner = 'john';
}else if(mikeTeamAverage > johnTeamAverage && mikeTeamAverage > maryTeamAverage){
    winner = 'mike';
}else if(maryTeamAverage > johnTeamAverage && maryTeamAverage > mikeTeamAverage){
    winner = 'mary';
}else if(johnTeamAverage === mikeTeamAverage && johnTeamAverage > maryTeamAverage){
    winner = 'john and mike';
}else if(johnTeamAverage === maryTeamAverage && johnTeamAverage > mikeTeamAverage){
    winner = 'john and mary';
}else if(mikeTeamAverage === maryTeamAverage && mikeTeamAverage > johnTeamAverage){
    winner = 'mike and mary';
}else{
    winner = 'draw'
}


switch(winner){
    case 'john':
    case 'john and mike':
    case 'john and mary':
    case 'draw' : 
        winnersScore = johnTeamAverage;
        break;
    case 'mike' :
    case 'mike and mary' :
        winnersScore = mikeTeamAverage;
        break;
    case 'mary' : 
        winnersScore = maryTeamAverage;
        break;
    default :
        winnersScore = johnTeamAverage
}

console.log(`Winner is ${winner} and average Score is ${winnersScore}`);

/***********************************
 * Functions
 */

 function calculateAge(birthYear){
     return 2020 - birthYear;
 }

 var ageJohn = calculateAge(1990);
 var ageMike = calculateAge(1978);
 var ageJane = calculateAge(1980);
 console.log(ageJohn, ageMike, ageJane);

 function yearsUntilRetirement(year, firstName){
     var age = calculateAge(year);
     var retirement = 65 - age;

     if(retirement > 0){
        console.log(firstName + ' retires in ' + retirement + ' years.');
     }else{
         console.log(firstName + ' is already retired.');
     }
 }

 yearsUntilRetirement(1990, 'John');
 yearsUntilRetirement(1945, 'Mike');
 yearsUntilRetirement(1979, 'Jane');

 /*********************************
  * Function Statements and Expressions
  */

  //Function declaration
//   function whatDoYouDo(job, firstName){

//   }

  //Function expression
  var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher' : 
            return firstName + ' is ' + job;  //return keyword do immediately exit the function.
        case 'driver' :
            return firstName + ' is ' + job;
        case 'designer' : 
            return firstName + ' is ' + job;
        default : 
            return firstName + ' does something else';
    }
  }

  console.log(whatDoYouDo('teacher', 'John'));
  console.log(whatDoYouDo('designer', 'Jane'));
  console.log(whatDoYouDo('retired', 'Mark'));

  function sayHi(name){
      return name + ' Hi!';
  }

  console.log(sayHi('JE'));