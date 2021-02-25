import {multiply, makeLowerCase} from "./HelperFunctions";

test('multiply', () => {
  expect(multiply(2,10)).toBe(20);
  expect(multiply(-2,10)).toBe(-20);
})
test('lowerCase', () => {
  expect(makeLowerCase('MYNaMe')).toBe('myname');
  expect(makeLowerCase('Hello worlD')).toBe('hello world');
})