/**
 * transform to first name letters: 'name.surname' => 'NS'
 */
export function transformFirstNameLetters(name: string | null): string {
  if (!name) return '';
  const [firstName = '', lastName = ''] = name.includes('.') ? name.split('.') : name.split(' ');
  return ((firstName[0] || '') + (lastName[0] || '')).toUpperCase();
}

/**
 * transform full date to date without time: '2023-06-03T09:43:31.022672' => '6/3/2023'
 */
export function transformOnlyDate(date: string | null): string {
  if (!date) return '';
  return new Date(date).toLocaleDateString();
}

/**
 * transform number to german price format: '8.6' => '8,60'
 */
export function getPrettyNumber(num: number | undefined | null): string {
  if (num === 0) return '0,00';
  if (!num) return '-';
  return num.toFixed(2).toString().replace('.', ',');
}
