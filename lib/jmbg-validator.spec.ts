import { validJMBG } from '.';

test('Valid JMBG', () => {
  expect(validJMBG('1703990715178')).toEqual(true);
  expect(validJMBG(1703990715178)).toEqual(true);
});

test('Invalid JMBG', () => {
  expect(validJMBG('1703990715170')).toEqual(false);
  expect(validJMBG('1703000715170')).toEqual(false);
  expect(validJMBG(1703990715170)).toEqual(false);
});

test('Invalid day in JMBG', () => {
  expect(validJMBG('8803990715178')).toEqual(false);
  expect(validJMBG(8803990715178)).toEqual(false);
});

test('Invalid month in JMBG', () => {
  expect(validJMBG('1217990715178')).toEqual(false);
  expect(validJMBG(1217990715178)).toEqual(false);
});

test('Foreign person JMBG', () => {
  expect(validJMBG('1703990605178')).toEqual(true);
  expect(validJMBG('1703990665178')).toEqual(true);
  expect(validJMBG(1703990605178)).toEqual(true);
  expect(validJMBG(1703990665178)).toEqual(true);
});

test('Long JMBG', () => {
  expect(validJMBG('1703990715178000')).toEqual(false);
  expect(validJMBG(1703990715178000)).toEqual(false);
});

test('short JMBG', () => {
  expect(validJMBG('1703990715')).toEqual(false);
  expect(validJMBG(1703990715)).toEqual(false);
});
