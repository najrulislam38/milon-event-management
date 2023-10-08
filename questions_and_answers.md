<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B. ReferenceError: greetign is not defined

<i>Here the let variable is declared with the name "Greeting". But no variable is declared with name "greetign". Due to which console will give reference error when "greetign".</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C. "12".

<i>Above a function is taken and a and b are taken as its parameter. That function is called with 1 and "2" arguments. Here "2" is a string type data. If you want to add a string with a number type data by using a "+" sign, it returns a string by concatenation.

So concatenation of '1' number type data with "2" string type data will return string value "12".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A. ['🍕', '🍫', '🥑', '🍔']

<i>In the above, an array "food" is created with four elements. then declared an object "info" that property "favoriteFood" of the value is the first element of the array. then changed the "favorateFood" value. Later in the code, the info.favoriteFood property is reassigned to other element but this doesn't affect the original food array. So the right answer is A.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B. Hi there, undefined

<i>In the code above, the sayHi function expects a parameter name to be passed when it is called. If a parameter is given while declaring a function, arguments must be sent while calling that function. If no argument is received, the parameter returns its value undefined.

The "name" parameter returned the value undefined because no argument was passed with the call to the sayHi function.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C. 3

<i>The right answer is 3. because the forEach method is used to iterate through the nums array. In forEach callback function provide condition "num" to the Truthy. Array "nums" have 3 truthy value 1,2 and 3. the condition of that when array element is truthy count value increase by 1. In this way, the value of the count will increase one by one and will be three</i>

</p>
</details>
