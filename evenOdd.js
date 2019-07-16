// 1. Add a `<script>` tag to your HTML to load the JavaScript file
// 2. Design a function named `evenOrOdd` that take a single number as an argument.
// 3. It should return the string "Even" if the number is evenly divisible by two.
// 4. It should return the string "Odd" if the number is not evenly divisible by two.
// 5. Invoke the function once with an even number argument
// 6. Invoke the function once with an odd number argument


const OldevenOdd = (num1) => {
    if (num1 % 2 === 0) {
        console.log("even");
    } else {
        console.log("odd")
    }
}

const evenOdd = number => {
    if (number % 2 === 0) {
        return "even"
    }
    return "odd"
}

const result1 = evenOdd(2)
console.log(result1) 

const result2 = evenOdd(17)
console.log(result2)


// 1. Create an array of numbers. Some even, some odd.
// 2. Iterate the array using the `forEach()` array method, and invoke the `evenOrOdd` function passing the current number as the argument.
// 3. Use `console.log` to display the result in the Developer Console.

const numbers = [3,6,4,7];
numbers.forEach(
    (currentNumber) => {
        const isItEvenOrOdd = evenOdd(currentNumber)
        console.log(isItEvenOrOdd)
    }
)




