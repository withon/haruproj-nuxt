import { DateTime } from 'luxon';

const datetime12Reg = /^\d{12}$/;
const format12 = 'yyyyMMddHHmm';
const datetime14Reg = /^\d{14}$/;
const format14 = 'yyyyMMddHHmmss';
const datetime17Reg = /^\d{17}$/;
const format17 = 'yyyyMMddHHmmssSSS';

/**
 * 日期时间
 * @param datetime 日期/时间
 * @param formatter 格式化成的字符串
 */
export function dateTimeFormatter(
  datetime: DateTime | Date | string | number,
  formatter?: string | null | undefined,
): string {
  if (!datetime) {
    return '';
  }
  let date = datetime;
  if (date instanceof Date) {
    date = DateTime.fromJSDate(date);
  } else if (typeof date === 'string') {
    if (datetime12Reg.test(date)) {
      date = DateTime.fromFormat(date, format12);
    } else if (datetime14Reg.test(date)) {
      date = DateTime.fromFormat(date, format14);
    } else if (datetime17Reg.test(date)) {
      date = DateTime.fromFormat(date, format17);
    } else {
      date = DateTime.fromISO(date);
    }
  } else if (typeof date === 'number') {
    if (date > 10000000000) {
      date = DateTime.fromMillis(date);
    } else {
      date = DateTime.fromSeconds(date);
    }
  }
  let formatDate;
  if (formatter) {
    formatDate = date.toFormat(formatter);
  } else {
    formatDate = date.toISODate();
  }
  return formatDate || datetime.toString();
}
