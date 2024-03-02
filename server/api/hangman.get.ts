import fs from "fs";
function getRandomInt(min: number, max: number) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
export default defineEventHandler(() => {
  const fPath = `./static/words.json`;
  let dataWords: { words: [] } = { words: [] };
  try {
    const data = fs.readFileSync(fPath, "utf8");
    dataWords = JSON.parse(data);
  } catch (err: any) {
    console.log(err);
  }

  const word: { word: string } =
    dataWords.words[getRandomInt(0, dataWords.words.length - 1)];

  return word;
});
