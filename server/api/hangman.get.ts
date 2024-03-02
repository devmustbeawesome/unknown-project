import { words } from "~/public/words.json";
function getRandomInt(min: number, max: number) {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
export default defineEventHandler(() => {
  // const fPath = path.join(process.cwd(), "public", "words.json");
  // let dataWords: { words: [] } = { words: [] };
  // try {
  //   const data = fs.readFileSync(fPath, "utf8");
  //   dataWords = JSON.parse(data);
  // } catch (err: any) {
  //   console.log(err);
  // }

  const word = words[getRandomInt(0, words.length - 1)];

  return word;
});
