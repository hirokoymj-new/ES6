# TypeOf

## Q1

```js
console.log(typeof []);
console.log(typeof {});
console.log(typeof null);
console.log(typeof NaN);
```

### Answer
```js
console.log(typeof []);     // object
console.log(typeof {});     // object
console.log(typeof null);   // object
console.log(typeof NaN);    // number
```

## Q2
- Since typeof [] returns object so how to check if the value is Array?


### Answer
- use Array.isArray()
```js
console.log(Array.isArray([]));
console.log(Array.isArray({}));
```