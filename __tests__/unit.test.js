// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('valid phone num 1', () => {
  expect(isPhoneNumber("(999)999-9999")).toBe(true);
});

test('valid phone num 2', () => {
  expect(isPhoneNumber("(921)912-1101")).toBe(true);
});

test('invalid phone num 1', () => {
  expect(isPhoneNumber("911")).toBe(false);
});

test('invalid phone num 2', () => {
  expect(isPhoneNumber("1111111111")).toBe(false);
});

test('valid email 1', () => {
  expect(isEmail("john@gmail.com")).toBe(true);
})

test('valid email 2', () => {
  expect(isEmail("toby@fox.com")).toBe(true);
})

test('invalid email 1', () => {
  expect(isEmail("john@gmail")).toBe(false);
})

test('invalid email 2', () => {
  expect(isEmail("john.fox")).toBe(false);
})

test('strong password 1', () => {
  expect(isStrongPassword("John_123")).toBe(true);
})

test('strong password 2', () => {
  expect(isStrongPassword("JohnApple_123")).toBe(true);
})

test('weak password 1', () => {
  expect(isStrongPassword("VeryLongStringNoNumbers")).toBe(false);
})

test('weak password 2', () => {
  expect(isStrongPassword("umm")).toBe(false);
})

test('valid date 1', () => {
  expect(isDate('03/03/2023')).toBe(true);
})

test('valid date 2', () => {
  expect(isDate('3/3/2023')).toBe(true);
})

test('invalid date 1', () => {
  expect(isDate('03-03-2023')).toBe(false);
})

test('invalid date 2', () => {
  expect(isDate('3/3/23')).toBe(false);
})

test('valid hex color 1', () => {
  expect(isHexColor('#232323')).toBe(true);
});

test('valid hex color 2', () => {
  expect(isHexColor('#333')).toBe(true);
});

test('invalid hex color 1', () => {
  expect(isHexColor('#23233')).toBe(false);
});

test('invalid hex color 2', () => {
  expect(isHexColor('#3333')).toBe(false);
});
