import { mod11 } from './utils';

/**
 * Checks if the company number (MB) is valid.
 * @param {number|string} mb Company number (MB)
 * @returns {boolean}        True if the company number (MB) is valid, false otherwise
 */
export function validMB(mb: number | string): boolean {
  if (typeof mb === 'number') {
    mb = mb.toString();
  }

  return mb.length == 8 && parseInt(mb[7], 10) === mod11(mb.substring(0, 7));
}
