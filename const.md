# Const

- Const declared immutable variables.
- The variable is mutable.
- But for an object, we can still change properties of a const object.
- To make an object immutable we use the Object.freeze(...) function.


**Example 1**
- You can see the syntax error if it is missing inisialize. 

```js
const foo;
```
//SyntaxError: Missing initializer in const declaration

**Example 2**
- Const variable isn't supposed to change over time so we're not allowed to give a different.
```js
const foo=1;
foo=2;
//TypeError: Assignment to constant variable.
```

**Example 3**

```js
function test(){
  if(true){
    const tmp = 123;
  }
  console.log(tmp);
}

test(); //tmp is not defined
```

**Example 4**

- `let` is mutable 
- The mutable means is that it can change over time.

```js
let foo = "foo";
foo="moo";
console.log(foo); //moo
```

**Example 5**
- const is mutable that value is object and add the properties. 

```js
const foo = {};
foo['prop'] = 'moo';
console.log(foo); //{prop: "moo"}
```
**Example 6**
- **Non-strict** mode

```js
const foo = Object.freeze({});
foo['prop'] = 'Moo';
console.log(foo.prop); //undefined
```
- **Strict** mode

```js
'use strict';

const foo = Object.freeze({});
foo['prop'] = 'Moo';
console.log(foo.prop); //TypeError: Cannot add property prop, object is not extensible
```
