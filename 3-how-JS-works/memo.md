# How JS Works

**여기서는 메모보다는 script.js안에 달아놓은 코드와 주석들을 본다.**

## This
* **Regular function call** : the this keyword points at the global object(the window object, in the browser).

* **Method call** : the this variable points to the object that is calling the method.

* The this keyword is not assigned a value until a function where it is defined is actually called.

[StackOverFlow-this](https://stackoverflow.com/questions/3127429/how-does-the-this-keyword-work)    
[MDN-hoisting](https://developer.mozilla.org/ko/docs/Glossary/Hoisting)