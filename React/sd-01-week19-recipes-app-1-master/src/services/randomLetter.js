const arrayOfLetters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'r',
  's',
  't',
  'u',
  'v',
];
const generateRandomLetter = () => {
  const randomPosition = Math.floor(Math.random() * 20);
  return arrayOfLetters[randomPosition];
};
export default generateRandomLetter;
