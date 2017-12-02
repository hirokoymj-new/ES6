# Let

- **Let** is a very important addition to ES6.
- **Not** a replacement for var.
- Recommend you use let from now on.

## Scope

| Scope        | Description | 
| ------------- |-------------| 
| **ES5**      | Global scope, Function scope ONLY  | 
| **ES6**      | Global scope, Function scope, Block level scope | 

## block scope 
- The variable that we've declared inside block level exists _in a global scope_.

```js
{
  // this is a block
}
```

```js
{
  var a = "block"; // global scope
}
console.log(a);
// block
```

### Function scope
**Example 1 - Function scope**

```js
function hello(){
  var a = "function";
}
hello();
console.log(a);
// Reference error
```

**Example 2 - Function scope**

```js
function hello(){
  var a = "function";
  
  for(var i=0; i<10; i++){
    var a = "block";
  }
  console.log(a)
}
hello();
// block
```
**Example 3 - Function scope with IIFE**

```js
function hello(){
  var a = "function";
  
  for(var i=0; i<10; i++){
    (function(){ // Inside IIFE isn't visible from outside of this function.
      var a = "block";
    })();
  }
  console.log(a)
}
hello();
// function
```

**Example 4 - `let` in block scope**
```js
function hello(){
  var a = "function";
  
  for(var i=0; i<10; i++){
    let a = "block"; // this line is only visible in for loop block. That's why a prints "function".
  }
  console.log(a);
}
hello(); // function
```

**Example 5 - `let` in block scope**
```js
function hello(){
  var a = "function";
  
  for(let i=0; i<10; i++){
    a = "block";
  }
  console.log(a);
}
hello(); // block
```

**Example 6 - ES5 block scope question**

```js
var funcs = [];
for (var i = 0; i < 5; i += 1) {
  funcs.push(function () {
    console.log(i);
  })
}
funcs.forEach(function (func) {
  func()
});
// 5 times print out 5
```

**Example 6 - ES5 block scope question**
```js
var funcs = [];
//var y;
for (var i = 0; i < 10; i += 1) {
  var y = i;
    funcs.push(function () {
    console.log(y);
  })
}
// Here .. y=9
funcs.forEach(function (func) {
  func()
});
// 10 times print out "9"
```

**Example 7 - ES6 block scope question**
```js
var funcs = [];
for (var i = 0; i < 10; i += 1) {
  let y = i;
    funcs.push(function () {
    console.log(y);
  })
}
funcs.forEach(function (func) {
  func()
});
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
```

**Example 8 - ES6 block scope question**
```js
var funcs = [];
for (let i = 0; i < 10; i += 1) {
    funcs.push(function () {
    console.log(i);
  })
}
funcs.forEach(function (func) {
  func()
});
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
```