# ES6 Spread Operator
 - three dot syntax [...]
 - Copying of an array is very easy!
 - Conbine an array is very easy and can add an item at any position!

## Copy of array
**Q1**
 - Copy of names array using ES5 

```js
const names = ['a', 'b'];
```

**Q1-Answer**
```js
const names = ['a', 'b'];
const copy1 = names.slice();
console.log(names); 
console.log(copy1);
```
<hr>

**Q2**
- Copy of names array using ES6 

```js
const names = ['a', 'b'];
```

**Q2-Answer**
- spread operator


```js
const names = ['a', 'b'];
const copy2 = [...names];
console.log(names); 
console.log(copy2);
```

## Combine Array

**Q3**
- Adding 'c' in names array in ES5
 
```js
const names = ['a', 'b'];
```

**Q3-Answer**
- push()

```js
const names = ['a', 'b'];
names.push('c'); 
console.log(names); 
```
<hr>

**Q4**
- Adding 'd' in names array and keep names as original and create new array

```js
const names = ['a', 'b'];
```


**Q4-Answer**
- concat() - adding an item AND create new array

```js
const names = ['a', 'b'];
const newArray = names.concat('d');
console.log("original: " + names);
console.log("newArray: " + newArray);
```

<hr>

**Q5**
- Adding arr1 in arr2 between btw 'one' and 'four'

```js
const arr1 = ['two', 'three'];
const arr2 = ['one', 'four'];
```

**Q5-Answer**

```js
const arr1 = ['two', 'three'];
const arr2 = ['one', ...arr1, 'four'];
console.log(arr1); //[ 'two', 'three' ]
console.log(arr2); //[ 'one', 'two', 'three', 'four' ]
```




#### References:
- [6 Great Uses of the Spread Operator](https://davidwalsh.name/spread-operator)
- [MDN - Array.slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [MDN Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [Redux Spread Operator](https://redux.js.org/recipes/using-object-spread-operator)