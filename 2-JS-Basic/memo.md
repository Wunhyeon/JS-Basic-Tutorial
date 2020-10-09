2-JS-Basic
================

## Primitive JavaScript Data Types
    1.Number : Floating point numbers, for decimals and integers
    2.Sequence of characters, used for text
    3.Boolean : Logical data type that can only be true or false
    4.Undefined : Data type of a variable that does not have a value yet
    5.Null Also means 'non-existent'

* Undefined : 밸류를 아직 가지고 있지 않은 데이터 타입. 변수는 선언했지만 값은 지정해 주지 않은 것.

* Null : 의도적으로 null 선언을 해준다.

**JavaScript has dynamic typing**: data types are **automatically** assigned to variables


자바스크립트에서는 자동으로 데이터 타입을 설정해준다. 이것은 코딩시간을 줄여주는 등 장점이 될 수 있지만 버그를 잡기 어렵다는 단점이 될 수도 있다.



변수를 선언할 때는 변수이름 맨 앞에 숫자나 (_와$를제외한)특수문자가 올 수 없다.  또 자바스크립트 키워드가 오면 안된다. 

------------------------
* 연산자 우선순위
연산자 우선순위 : [MDN](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/%EC%97%B0%EC%82%B0%EC%9E%90_%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84)   
우선순위가 높을수록 먼저 실행된다. (우선순위 21이 우선순위 1보다 먼저 실행된다.)

--------------------------------
### Switch
스위치문을 쓸 때 
```
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
```
이런식으로 조건당 케이스가 걸리게 사용할 수도 있지만, 
```
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
```
이런식으로 범위를 지정해 사용할 수도 있다.

----------------------------------------
### Truthy and Falsy values and equality operators

* falsy value is the value that is considered false when evaluated in an if/else statement condition. and the values that are falsy in JavaScript

* falsy values : undefined, null, 0, ''(빈 스트링), NaN
* truthy values : Not falsy values

if/else에서는 값이 0일 때, false로 판단하는데,     
값이 0일 때, false로 판단하면 안될 때가 있다. 그럴 때,
```
if(height || height === 0){     //height === 0를 추가해준다
    console.log('Variable is defined');
}else{
    console.log('Variable has Not been defined');
}
```
이런식으로 조건을 추가해주면 false로 안들어간다.

#### equality operators
```
var height;
height = 23;

if (height == '23'){
    console.log('The == operator does type correction!'); 
}
```
위 코드를 실행하면 조건이 true가 되어 콘솔에 결과가 찍힐까?      

정답은 그렇다 이다. ==연산자를 쓰게 되면 자바스크립트가 자동으로 문자열 '23'을 숫자 23으로 바꿔서 height값과 비교하기 때문에 true 조건이 된다.     

그렇다면,
```
var height;
height = 23;

if (height === '23'){
    console.log('The == operator does type correction!'); 
}
```
 ===연산자를 썼을 때는 결과가 어떻게 될까?

정답은 height === '23'은 false가 되어 콘솔에 값이 찍히지 않는다.

===연산자는 타입까지 비교하기 때문에 숫자23과 문자열23이 다르다고 판단해 값이 false가 되는 것이다.    
[내 블로그](https://xhwogusxh.tistory.com/46?category=868400) 에도 정리해 두었다.

-----------------------

### Function Statements(Declarations) and Expressions

* Function Declarations     
    ```
    function whatDoyouDo(){

    }
    ```
    함수를 이런식으로 선언하는게 Function Statements(Declarations)

* Function Expressions
    ```
    var whatDoyouDo = function(){

    }
    ```
    이런식으로 선언하는게 Function Expressions이다.    

이 둘의 차이는,        
JavaScript expressions are pieces of code that always produce value, and it doesn't matter how long they are as long as the code results in a single value, and then it is an expression.

statments, they do just perform actions.So, they do things but they do not produce immediate results. They don't produce any immediate value, and so they are called statements.

function expressions produce an immediate result, while function declarations do not.


라고 설명했는데, Statements의 경우 리턴값을 받아줄 변수가 없기 때문에 즉각적인 result를 못만드는 차이 같다.(내생각)    
이 외에도, 클로저나 다른함수의 인자값으로 쓰일때, IIFE방식으로 쓰일 수 있냐 없냐의 차이같다.(위의 3개 전부 Expression방식일 때 사용가능)
함수 선언식보다는 함수 표현식을 지향하는 듯 하다. result와 관련된 부분은 아직 잘 모르겠으나, 확실히 함수 선언식(Function Statements(declarations))보다는 함수 표현식(Function Expressions)를 사용하는 편이 더 좋고, 지향해야 할 방향인 것 같다.     

참조 : 
The Complete JavaScript Course 2020: Build Real Projects!20강, [Function Declarations vs. Function Expressions](https://medium.com/@mandeep1012/function-declarations-vs-function-expressions-b43646042052), [함수 표현식 vs 함수 선언식](https://joshua1988.github.io/web-development/javascript/function-expressions-vs-declarations/#%ED%95%A8%EC%88%98-%EC%84%A0%EC%96%B8%EC%8B%9D%EA%B3%BC-%ED%91%9C%ED%98%84%EC%8B%9D%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90)
