/**
 * Modulo 11 calculation function
 *
 * @param {string} toCheck Number to get the check digit for
 * @return {number|null}   The check digit if valid, null otherwise
 */
export function mod11(toCheck: string): number|null {
  let sum = 0;
  toCheck.split('').reverse().forEach((value, index) => {
      sum += parseInt(value, 10) * (index % 6 + 2);
  });
  const remainder  = sum % 11;

  switch ( remainder ) {
      case 0:
          return remainder;
      case 1:
          return null;
      default:
          return 11 - remainder;
  }
}
