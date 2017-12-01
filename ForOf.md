## For Of

- The **for-in** loop is for looping over object properties.
- The **for-of** loop is for looping over the **values** in an array.
- **for-of** is not just for arrays, it also works on most array-like objects.

| Syntax        | Description | 
| ------------- |:-------------:| 
| **for-in**      | Object<br> Not recommend to use for array because index is generated as 'string'.  | 
| **for-of**      | Array, Array-like object | 


## for-in
```js
let obj = {a:1, b:2};

for (let prop in obj){
  console.log(prop);
}
// a
// b
```

- **NOT** recommend to use for-in in Array because index is 'string'.

```js
let array = [10, 20, 30];

for (let index in array){
  console.log(index);
  console.log(typeof index); 
}
// 0
// string
// 1
// string
// 2
// string
```

## for-of

```js
let array = [10, 20, 30];
for (let value of array){
  console.log(value);
}
// 10
// 20
// 30
```

****