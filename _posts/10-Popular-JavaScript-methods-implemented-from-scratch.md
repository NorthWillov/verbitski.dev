---
title: "10 Popular JavaScript methods implemented from scratch"
excerpt: "These are the 10 most popular methods in JavaScript implemented from scratch. Check this out if you are interested how JavaScript methods works inside"
coverImage: "/assets/blog/JS10Methods/JSmethodsImage.jpeg"
date: "2022-01-08T05:35:07.322Z"
author:
  name: Artem Verbitski
  picture: "/assets/blog/authors/artem.jpeg"
ogImage:
  url: "/assets/blog/JS10Methods/JSmethodsImage.jpg"
---
## Introduction

In this article I wanted to share with you with the most popular JavaScript methods but implemented by scratch.

A little understanding of how JavaScript methods works inside will always help you as a developer.
So these are the most popular methods in JavaScript implemented from scratch. Check this out if you are interested how JavaScript methods works inside.

This is also a light version of how this work, the real method specified in ECMAScript is much more complex.

Methods mentioned on this article are:  
```map, reduce, filter, sort, every, includes, slice, splice, shift, indexOf.``` 

## 1. map()
``` js
const fakeMap = function (callback) {
  const newArray = [];

  // 'this' refers to the array
  for (let i = 0; i < this.length; i++) {
    newArray[i] = callback(this[i], i);
  }

  return newArray;
};
Array.prototype.fakeMap = fakeMap;

[1, 2, 3].fakeMap((n) => n + 1); // output [2, 3, 4]
```

## 2. reduce()
``` js
const fakeReduce = function (callback, accumulator) {
  for (let i = 0; i < this.length; i++) {
    accumulator = callback(accumulator, this[i]);
  }
  return accumulator;
};
Array.prototype.fakeReduce = fakeReduce;

const reducer = (previousValue, currentValue) => previousValue + currentValue;

[1, 2, 3].fakeReduce(reducer, 0); // output 6

```
## 3. filter()
``` js
const fakeFilter = function (callback) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      newArray.push(this[i]);
    }
  }

  return newArray;
};

Array.prototype.fakeFilter = fakeFilter;

[1, 2, 3, 4, 5].fakeFilter((n) => n > 2); // output [3, 4, 5]
```
## 4. sort()
``` js
const fakeSort = function (callback) {
  const newArray = [...this];

  for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < newArray.length - 1; j++) {
      if (callback(newArray[j], newArray[j + 1]) > 0) {
        const temp = newArray[j + 1];
        newArray[j + 1] = newArray[j];
        newArray[j] = temp;
      }
    }
  }

  // array is sorted
  return newArray;
};

Array.prototype.fakeSort = fakeSort;

[3, 5, 1, 4, 2].fakeSort((a, b) => a - b); // output [1, 2, 3, 4, 5]
```
## 5. every()
``` js
const fakeEvery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i])) {
      return false;
    }
  }

  return true;
};

Array.prototype.fakeEvery = fakeEvery;

[1, 2, 3, 4, 5].fakeEvery((n) => n > 3); // output false
```

## 6. includes()
``` js
const fakeIncludes = function (item) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === item) {
      return true;
    }
  }

  return false;
};

Array.prototype.fakeIncludes = fakeIncludes;

[1, 2, 3, 4, 5].fakeIncludes(5); // output true
```

## 7. slice()
``` js
const fakeSlice = function (start, end) {
  let newArray = [];
  if (!end) {
    for (let i = 0; i < this.length; i++) {
      if (i >= start) {
        newArray.push(this[i]);
      }
    }

    return newArray;
  }

  for (let i = 0; i < this.length; i++) {
    if (i >= start && i <= end) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

Array.prototype.fakeSlice = fakeSlice;

[1, 2, 3, 4, 5].fakeSlice(2, 3); // output [3, 4]
```

## 8. splice()
``` js
const fakeSplice = function (start, deleteCount, ...items) {
  let newArray = [];

  // if we only provide start fakeSplice(start)
  if (!deleteCount) {
    for (let i = 0; i < this.length; i++) {
      if (i < start) {
        newArray.push(this[i]);
      }
    }
    this.length = 0;
    this.push.apply(this, newArray);
    return;
  }

  // if we only provide start and deleteCount fakeSplice(start, deleteCount)
  if (!items) {
    for (let i = 0; i < this.length; i++) {
      if (i < start || i >= start + deleteCount) {
        newArray.push(this[i]);
      }
    }

    this.length = 0;
    this.push.apply(this, newArray);
    return;
  }

  // if we provide all arguments to the function
  for (let i = 0; i < this.length; i++) {
    if (i === start + deleteCount) {
      newArray = [...newArray, ...items];
    }
    if (i < start || i >= start + deleteCount) {
      newArray.push(this[i]);
    }
  }

  this.length = 0;
  this.push.apply(this, newArray);
  return;
};

Array.prototype.fakeSplice = fakeSplice;

const planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];
planets.fakeSplice(2, 2, "Pluto");
console.log(planets); // output ["Mercury", "Venus", "Pluto", "Jupiter", "Saturn", "Uranus", "Neptune"]

```

## 9. shift()
``` js
const fakeShift = function () {
  let newArray = [];

  for (let i = 1; i < this.length; i++) {
    newArray.push(this[i]);
  }

  this.length = 0;
  this.push.apply(this, newArray);
};

Array.prototype.fakeShift = fakeShift;
const arr = [1, 2, 3, 4, 5];

arr.fakeShift();
console.log(arr); // output [2, 3, 4, 5]

```

## 10. indexOf()
``` js
const fakeIndexOf = function (item) {
  for (let i = 0; i < this.length; i++) {
    if (item === this[i]) {
      return i;
    }
  }
  return -1;
};

Array.prototype.fakeIndexOf = fakeIndexOf;

[1, 2, 3, 4, 5].fakeIndexOf(4); // output 3

```

## Conclusion
We just implemented the most used methods in JavaScript and get a better understanding of how they work so we can use them more effectively.

Thank you for your time!

