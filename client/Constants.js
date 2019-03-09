const problems = [
  {
    problemIndex: '0',
    problemValue: 'backwards_array',
    problemName: 'Backwards Array',
    problemDescription:
      'Create an array which contains the values 1 through 10, backwards. Example: backwardsArray(4) returns [4,3,2,1]',
    problemFunctionCall: 'backwardsArray(10)',
    problemTemplate: 'const backwardsArray = (n) => {\n\n}',
    expectedResult: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    isSolved: false
  },
  {
    problemIndex: '1',
    problemValue: 'count_vowels',
    problemName: 'Count Vowels',
    problemDescription:
      'Return the number of vowels that are within a string. Example: countVowels("Learning code is fun") returns 7',
    problemFunctionCall: 'countVowels("This Is Quik Code")',
    problemTemplate: 'const countVowels = (str) => {\n\n}',
    expectedResult: 6,
    isSolved: false
  },
  {
    problemIndex: '2',
    problemValue: 'isPalindrome',
    problemName: 'Is Palindrome',
    problemDescription:
      'Write a function that tests whether any given string is a palidrome or not. It should return True or False.  Example: isPalindrome("kayak") returns true',
    problemFunctionCall: 'isPalindrome("racecar")',
    problemTemplate: 'const isPalindrome = (str) => {\n\n}',
    expectedResult: true,
    isSolved: false
  }
]

export default problems
