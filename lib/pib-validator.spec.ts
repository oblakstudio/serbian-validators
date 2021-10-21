import { validPIB } from '.';

test('Valid PIB', () => {
  expect(validPIB('112497859')).toEqual(true);
  expect(validPIB(112497859)).toEqual(true);
});

test('Invalid PIB', () => {
  expect(validPIB('112497851')).toEqual(false);
  expect(validPIB(112497851)).toEqual(false);
  expect(validPIB(100000000)).toEqual(false);
});

test('Short PIB', () => {
  expect(validPIB('11249785')).toEqual(false);
  expect(validPIB(11249785)).toEqual(false);
});

test('Long PIB', () => {
  expect(validPIB('11249785900')).toEqual(false);
  expect(validPIB(11249785900)).toEqual(false);
});
