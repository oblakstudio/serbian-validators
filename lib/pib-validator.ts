/**
 * Checks if the Taxpayer Identification Number (PIB) is valid.
 * @param   {number|string} pib Taxpayer Identification Number.
 * @returns {boolean}           True if the PIB is valid, false otherwise.
 */
export function validPIB(pib: number | string): boolean {
  if (typeof pib === 'number') {
    pib = pib.toString();
  }

  let sum = 10;
  pib
    .split('')
    .slice(0, 8)
    .forEach((value) => {
      sum = (sum + parseInt(value, 10)) % 10;
      if (sum === 0) {
        sum = 10;
      }
      sum = (sum * 2) % 11;
    });
  sum = (11 - sum) % 10;

  return pib.length == 9 && parseInt(pib[8], 10) === sum;
}
