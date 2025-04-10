export const DAYS: number[] = Array.from({ length: 31 }, (_, i) => i + 1);

export const MONTHS: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const YEARS: number[] = Array.from(
  { length: 100 },
  (_, i) => new Date().getFullYear() - i
);

export const GRADES: string[] = [
  'KG1',
  'KG2',
  'Grade 1',
  'Grade 2',
  'Grade 3',
  'Grade 4',
  'Grade 5',
];

export const GENDERS: { label: string; value: string }[] = [
  { label: 'Girl', value: 'female' },
  { label: 'Boy', value: 'male' },
];

export const TOPICS: { label: string; value: string }[] = [
  { label: 'Arabic', value: 'Arabic' },
  { label: 'Islamic', value: 'Islamic' },
  { label: 'English', value: 'English' },
  { label: 'Hisory', value: 'Hisory' },
  { label: 'Sports', value: 'Sports' },
];

export const STEPS = [
  { label: 'Cart', path: '/cart' },
  { label: 'Information', path: '/checkout/information' },
  { label: 'Shipping', path: '/checkout/shipping' },
  { label: 'Payment', active: true },
];
