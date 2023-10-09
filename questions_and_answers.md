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

<details>
<b>Answer A:'{}'</b><summary></summary>
<p>

#### Answer: ?

<i>Write your explanation here</i>
# The answer of the question will be A:{} because by declaring a variable with let we can reassign it's value but cannot redeclare in the question the variable value ar reassign so the value of greetign will be {}...
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

<details><summary><b>Answer : C:"12"</b></summary>
<p>

#### Answer: ?

<i>Write your explanation here</i>
The answer of the function Will be "12" cause there are different type of value one is number another is String so String Concatenation will happen and the output of the function will be "12"...
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

<details><summary><b>Answer : A:`['🍕', '🍫', '🥑', '🍔']`</b></summary>
<p>

#### Answer: ?

<i>Write your explanation here</i>
In the question there are a array food and a object info in the info object the food[0] reffer to the food 🍕 then when updating the favourite food to 🍝 the favourite food value got updated on the object but the food array stay unchange that's why when consoling the food array got the same result as first..
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

<details><summary><b>Answer : B - B: `Hi there, undefined`</b></summary>
<p>

#### Answer: ?

<i>Write your explanation here</i>
In this question wee have a function which has a perameter and it's return Hi there and the value of the perameter however when we call the function we don't give any argument so there is no value for name that's why the output will be Hi there and undefined...cause name doesn't has any assigned value...
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

<details><summary><b>Answer : C: 3 </b></summary>
<p>

#### Answer: ?

<i>Write your explanation here</i>
In this code we have a count variable and a array nums nums.foreach iterate over nums array and there are a condition that if num is truthy count variable value will incraged by 1 so when the foreach iterate over nums the first element is 0 so it's falsy value the count variable value will unchanged but after that foreach iterate element of nums they are truthy value 1,2,3 so the count variable value will be increased 3 time so if the count variable value is 0 at first after the loop it will be changed to 3... 
</p>
</details>
