// unit.test.js

const { TestWatcher } = require('jest');
const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('check valid phone number', () => {
    expect(functions.isPhoneNumber("12346543123454345543454334")).toBe(false);
});
test('check valid phone number', () => {
    expect(functions.isPhoneNumber("(626)-123-1244")).toBe(true);
});
test('check valid phone number', () => {
    expect(functions.isPhoneNumber("777-777-7777")).toBe(true);
});
test('check valid phone number', () => {
    expect(functions.isPhoneNumber("1")).toBe(false);
});


test('check valid email', () => {
    expect(functions.isEmail("asdf")).toBe(false);
});
test('check valid email', () => {
    expect(functions.isEmail("123477876543")).toBe(false);
});
test('check valid email', () => {
    expect(functions.isEmail("123@gmail.com")).toBe(true);
});
test('check valid email', () => {
    expect(functions.isEmail("wieofgu_hjre21345@gmail.com")).toBe(true);
});


test('check if it is strong password', () => {
    expect(functions.isStrongPassword("123456")).toBe(false);
});
test('check if it is strong password', () => {
    expect(functions.isStrongPassword("erxxsrtf")).toBe(true);
});
test('check if it is strong password', () => {
    expect(functions.isStrongPassword("111")).toBe(false);
});
test('check if it is strong password', () => {
    expect(functions.isStrongPassword("wieo12fg")).toBe(true);
});


test('check if it is valid date', () => {
    expect(functions.isDate("123456")).toBe(false);
});
test('check if it is valid date', () => {
    expect(functions.isDate("1_wdbdv_2349_!!!!!")).toBe(false);
});
test('check if it is valid date', () => {
    expect(functions.isDate("01/11/2022")).toBe(true);
});
test('check if it is valid date', () => {
    expect(functions.isDate("10/11/2019")).toBe(true);
});

test('check if it is hexcolor', () => {
    expect(functions.isHexColor("FFFFFF")).toBe(true);
});
test('check if it is hexcolor', () => {
    expect(functions.isHexColor("1_wdbdv_2349_")).toBe(false);
});
test('check if it is hexcolor', () => {
    expect(functions.isHexColor("123456")).toBe(true);
});
test('check if it is hexcolor', () => {
    expect(functions.isHexColor("10/11/2019")).toBe(false);
});

