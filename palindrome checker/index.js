const inputElement = document.getElementById("input");

function reverseString(str) {
    return str.split("").reverse().join("");
}

function check() {
    const inputValue = inputElement.value;  // Use a different variable name
    const result = document.getElementById("result");
    const reversedInput = reverseString(inputValue);  // Use the helper function
    const isPalindrome = inputValue === reversedInput;
    result.textContent = isPalindrome ? "It's a palindrome!" : "Not a palindrome.";
}
