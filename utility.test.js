// utility.test.js

const {
  isPalindrome,
  fibonacci,
  fahrenheitToCelsius,
  celsiusToFahrenheit,
  factorial,
} = require("./utility");

describe("isPalindrome", () => {
  test("should return true for a palindrome word", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  test("should return false for a non-palindrome word", () => {
    expect(isPalindrome("hello")).toBe(false);
  });

  test("should be case insensitive", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  test("should ignore spaces, punctuation, and special characters", () => {
    expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(true);
  });
});

describe("fibonacci", () => {
  test("should return 3 when nth number is 5", () => {
    expect(fibonacci(5)).toBe(5);
  });
  test("should return 13 when nth number is 8", () => {
    expect(fibonacci(8)).toBe(21);
  });
  test("should return 13 when nth number is 7", () => {
    expect(fibonacci(7)).toBe(13);

  })
  });

describe(fahrenheitToCelsius, () => {
  test("should return 0 when Fahrenheit is 32", () => {
    expect(fahrenheitToCelsius(32)).toBe(0);
  });
  test("should return 10 when Fahrenheit is 50", () => {
    expect(fahrenheitToCelsius(50)).toBe(10);
  });
  test("should return -12.2  when 10 is passed in", () => {
    expect(fahrenheitToCelsius(10)).toBe(-12.222222222222221);
  });
});

describe(celsiusToFahrenheit, () => {
  test("Should rerurn 10 when -12.222222222222221 is passed in", () => {
    expect(celsiusToFahrenheit(-12.222222222222221)).toBe(10);
  });
});

describe(factorial, () => {
  test("Should return 24 when 4 is passed in", () => {
    expect(factorial(4)).toBe(24);
  })
})

