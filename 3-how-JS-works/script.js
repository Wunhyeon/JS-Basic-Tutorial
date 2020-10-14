// var name = 'John';

// function first(){
//     var a = 'Hello';
//     second();
//     var x = a + name;
// }

// function second(){
//     var b = 'Hi!';
//     third();
//     var z = b + name;
// }

// function third(){
//     var c = 'Hey!';
//     var z = c + name;
// }

// first();


/**
 * Hoisting
 */

 //functions
// calculateAge(1990); //function을 정의하기 전에 function 을 실행했지만, 정상적으로 실행된다. 이것이 hoisting
// //function declaration만 hoisting된다. function expression은 hoisting안됨.

// function calculateAge(year){
//     console.log(2020 - year);
// }


// //retirement(1990);   //오류 발생. function expression에서는 hoisting이 안된다. hoisting은 function declaration에서만 된다. 

// var retirement = function(year){
//     console.log(65-(2020-year));
// }

// retirement(1990);

// //variables

// console.log(age);   //변수를 선언하기 전에 변수를 불러오면 undefined
//     //만약 아래에서 age라는 변수를 선언하지도 않았다면 age가 undefined가 아니라 에러가 발생한다.
// var age = 23;

// console.log(age);

// console.log("-------------------------------");

// function foo(){
//     console.log(age);   //undefined
//     var age = 65;       //만약 이 function foo()안에 age라는 변수를 선언을 안했다면 console.log(age)를 했을 때, 모두 밖에서 선언한(global variable) age인 23을 출력한다.
//     console.log(age);   //65
// }

// foo();
// console.log(age);   //23

/**
 * Scoping and the Scope Chain
 */

//  var a = 'Hello!';
//  first();

//  function first(){
//      var b = 'Hi!';
//      second();

//      function second(){
//          var c = 'Hey!';
//          console.log(a + b+ c);
//      }
//  }
//function second에서 b를 못찾으면 그위 부모 scope로 가서 b가 있으면 b를 넣어준다. 즉, 자식 스코프에서는 부모 스코프에 접근 가능하다. 하지만 부모스코프에서는 자식스코프에 접근이 불가능하다.
 //Only if the Javascript engine does not find a variable anywhere it throws an error and stops execution.


//  var a = 'Hello!';
//  first();
 
//  function first(){
//      var b = 'Hi!';
//      second();

//      function second(){
//          var c = 'Hey!';
//          third();
//      }
//  }

//  function third(){
//      var d = 'John';
//      //console.log(a + b + c +d);//error
//      //third에서 접근가능한 변수 : a,d 
//  }

 console.log("-------------------------------");

 /**
  * The this keyword
  */

console.log(this);  //window

calculateAge(1985);  

function calculateAge(year){
    console.log(2016 - year);
    console.log(this);  //In a regular function code, the this keyword always points to the window object.
    //because the object that this function is attached to is the global object. Because the object that this function is attached to is the global object.
}

console.log("-----------------------");

var john = {
    name : 'John',
    yearOfBirth : 1990,
    calculateAge : function(){
        console.log(this);  //this : John. because this keyword refers to the object that called the method.
        console.log(2020 - this.yearOfBirth);

        function innerFunction(){
            console.log(this);  //this : window. the rule is that when a regular function code happens, then the default object is the window object, at least that's how it happens in the browser. 
        }
        innerFunction();
    }
}

john.calculateAge();

var mike = {
    name : 'Mike',
    yearOfBirth : 1984
}

mike.calculateAge = john.calculateAge;
mike.calculateAge(); 


