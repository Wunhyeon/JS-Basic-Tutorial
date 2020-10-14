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

  /*******************************************
   * Arrays
   */

   //Initialize new array
   var names= ['John', 'Mark', 'Jane'];
   var years = new Array(1990, 1969, 1948);
   
   console.log(names[2]);
   console.log(names.length);

   //Mutate array data
   names[1] = 'Ben';
   names[5] = 'Mary';
   console.log(names);

   names[names.length] = 'Jay';
   console.log(names);

   //Different data types
   var john = ['John', 'Smith', 1990, 'designer', false];
   console.log(john);

   john.push('blue');
   console.log(john);

   john.unshift('Mr.');
   console.log(john);

   john.pop();
   console.log(john);

   john.pop();
   console.log(john);

   john.shift();
   console.log(john);

   
   console.log(john.indexOf(1990));
   console.log(john.indexOf(23));

  var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
  console.log(isDesigner);
  console.log(john.indexOf('designer'));
  
/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). 
He likes to tip 20% of the bill when the bill is less than $50, 
15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

var johnsBillArray = [124, 48, 268];

var tipCalculator = (bill) => {
    var tip = 0;
    switch (true) {
        case bill < 50:
            tip = bill * 0.2;
            return tip;
        
        case bill >= 50 && bill < 200 : 
            tip = bill * 0.15;
            return tip;
        
        case bill > 200 : 
            tip = bill * 0.1;
            return tip;

        default:
            break;
    }
}

var makeTipArray = (billArray) => {
    var tipArray = [];
    var tip = 0;
    billArray.forEach(function(element){
        tip = tipCalculator(element);
        tipArray.push(tip);
    })
    return tipArray;
}

var makeTotalBill = (billArray) => {
    var tipArray = makeTipArray(billArray);
    var totalBillArray = [];
    billArray.forEach((element,index) => {
        var total = element + tipArray[index];
        totalBillArray.push(total);
    })

    // billArray.forEach(function(element, index){
    //     var total = element + tipArray[index];
    //     totalBillArray.push(total);
    // })

    return totalBillArray;
}

var johnsTipArray = makeTipArray(johnsBillArray);
var johnsTotalBillArray = makeTotalBill(johnsBillArray);

console.log(johnsBillArray);
console.log(johnsTipArray);
console.log(johnsTotalBillArray);

/***********************************
 * Objects and properties
 */

 //Object literal
var john = {
    firstName : 'John',
    lastName : 'Smith',
    birthYear : 1990,
    family : ['Jane', 'Mark', 'Bob', 'Emily'],
    job : 'teacher',
    isMarried : false
};

console.log(john);
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);


//mutate
john.job = 'designer';
john['isMarried'] = true;


console.log(john);

//new Object syntax
var jane = new Object();
jane.name = 'Jane';
jane['birthYear'] = 1998;
jane['lastName'] = 'Smith';


console.log(jane);

/*************************************8
 * Objects and methods
 */

var john = {
    firstName : 'John',
    lastName : 'Smith',
    birthYear : 1990,
    family : ['Jane', 'Mark', 'Bob', 'Emily'],
    job : 'teacher',
    isMarried : false,
    calcAge : function(){
        //return 2020 - this.birthYear;   //여기서 this는 john 오브젝트. 즉, 현재의 오브젝트를 이야기한다.
        this.age = 2020 - this.birthYear;   //여기서 바로  this(john오브젝트)의 새로운 프로퍼티(age)를 set 해주었다.
    }
};

console.log(john);

john.calcAge();

console.log(john);


/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. 
Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. 
Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

var john = {
    firstName : 'John',
    lastName : 'Smith',
    mass : 78,
    height : 178,
    calcBmi : function(){
        this.bmi = this.mass/Math.pow(this.height,2);
        return this.bmi;
    }
}

var mike = {
    firstName : 'Mike',
    lastName : 'Tyson',
    mass : 120,
    height : 175,
    calcBmi : function(){
        this.bmi = this.mass/(this.height * this.height);
        return this.bmi;
    }
}


var mary = {
    firstName : 'Mary',
    lastName : 'Sarah',
    mass : 56,
    height : 165,
    calcBmi : function(){
        this.bmi = this.mass/Math.pow(this.height,2);
        return this.bmi;
    }
}

var johnBmi = john.calcBmi();
var mikeBmi = mike.calcBmi();
var maryBmi = mary.calcBmi();

var winner = '';

if(johnBmi > mikeBmi && johnBmi > maryBmi){
    winner = 'john';
}else if(mikeBmi > johnBmi && mikeBmi > maryBmi){
    winner = 'mike';
}else if(maryBmi > johnBmi && maryBmi > mikeBmi){
    winner = 'mary';
}else if(johnBmi === mikeBmi && johnBmi > maryBmi){
    winner = 'john and mike';
}else if(johnBmi === maryBmi && johnBmi > mikeBmi){
    winner = 'john and mary';
}else if(mikeBmi === maryBmi && mikeBmi > johnBmi){
    winner = 'mike and mary';
}else{
    winner = 'draw'
}

if(winner === 'john'){
    console.log(`Winner is ${winner} and Bmi is ${john.calcBmi()}`);
}else if (winner === 'mike'){
    console.log(`Winner is ${winner} and Bmi is ${mike.calcBmi()}`);
}else{
    console.log(`Winner is ${winner} and Bmi is ${mary.calcBmi()}`);
}

//continue and break statements
var jin = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for(var i = 0; i < jin.length; i++){
    if(typeof jin[i] !== 'string') continue;
    console.log(jin[i]);
}

for(var i = 0; i < jin.length; i++){
    if(typeof jin[i] !== 'string') break;
    console.log(jin[i]);
}
console.log("------------");
//Looping backwards
for(var i = jin.length -1; i >=0; i--){
    console.log(jin[i]);
}

/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50,
 15% when the bill is between $50 and $200,
 and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 
    1) a new array containing all tips, and 
    2) an array containing final paid amounts (bill + tip). 
    HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. 
    The bills were $77, $375, $110, and $45.
    Mark likes to tip 20% of the bill when the bill is less than $100, 
    10% when the bill is between $100 and $300, 
    and 25% if the bill is more than $300 
    (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. 
    HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). 
    After you have the sum of the array, divide it by the number of elements in it 
    (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

var john = {
    billArray : [124, 48, 268, 180, 42],
    tipArray : [],
    totalArray : [],
    tipPercent : function(bill){
        var tipPercent = 0; 
        if(bill < 50){
            tipPercent = .2;
        }else if (bill >= 50 && bill < 200){
            tipPercent = .15;
        }else if(bill >= 200){
            tipPercent = .1;
        }
        return tipPercent;
    },
    calcTip : function(){
        var tipPercent = 0;
        for(var i = 0; i < this.billArray.length; i++){
            var tip = 0;
            tipPercent = this.tipPercent(this.billArray[i]);
            tip = this.billArray[i] * tipPercent;
            this.tipArray.push(tip);
        }
    },
    calcTotal : function(){
        var total = 0;
        for(var i = 0; i < this.billArray.length; i++){
            total = this.billArray[i] + this.tipArray[i];
            this.totalArray.push(total);
        }
    }
}

john.calcTip();
john.calcTotal();
console.log(john);


var mark = {
    billArray : [77, 375, 110,45],
    tipArray : [],
    totalArray : [],
    tipPercent : function(bill){
        var tipPercent = 0; 
        if(bill < 100){
            tipPercent = .2;
        }else if (bill >= 100 && bill < 300){
            tipPercent = .1;
        }else if(bill >= 300){
            tipPercent = .25;
        }
        return tipPercent;
    },
    calcTip : function(){
        var tipPercent = 0;
        for(var i = 0; i < this.billArray.length; i++){
            var tip = 0;
            tipPercent = this.tipPercent(this.billArray[i]);
            tip = this.billArray[i] * tipPercent;
            this.tipArray.push(tip);
        }
    },
    calcTotal : function(){
        var total = 0;
        for(var i = 0; i < this.billArray.length; i++){
            total = this.billArray[i] + this.tipArray[i];
            this.totalArray.push(total);
        }
    }
}

mark.calcTip();
mark.calcTotal();
console.log(mark);

var calcAvgTip = function(tipArray){
    var sum = 0;
    var avg = 0;
    for(var i = 0; i < tipArray.length; i++){
        sum += tipArray[i];
    }
    avg = sum/tipArray.length;
    return avg;
}

var johnAvgTip = calcAvgTip(john.tipArray);
var markAvgTip = calcAvgTip(mark.tipArray);

console.log(johnAvgTip);
console.log(markAvgTip);