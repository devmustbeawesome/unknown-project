import words from "~/public/words.json";
function getRandomInt(min: number, max: number) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
export default defineEventHandler(() => {
  const word = words.words[getRandomInt(0, words.words.length - 1)];
  return word;
});
