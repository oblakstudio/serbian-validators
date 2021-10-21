import { mod11 } from './utils';

export function validJMBG(jmbg: number | string): boolean {
  if (typeof jmbg == 'number') {
    jmbg = jmbg.toString();
  }

  const day = jmbg.substring(0, 2);
  const mnth = jmbg.substring(2, 4);
  const year =
    parseInt(jmbg.substring(4, 7)) > parseInt(new Date().getFullYear().toString().substring(2))
      ? `1${jmbg.substring(4, 7)}`
      : `2${jmbg.substring(4, 7)}`;
  const time = Date.parse(`${mnth}/${day}/${year}`);

  if (isNaN(time)) {
    return false;
  }

  if (['60', '66'].includes(jmbg.substring(7, 9))) {
    return true;
  }

  return jmbg.length == 13 && parseInt(jmbg[12], 10) === mod11(jmbg.substring(0, 12));
}
