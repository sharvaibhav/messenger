import sentences from "./dummyMessages.json";

export const getRandomSentence = () => {
  var index = Math.floor(Math.random() * sentences.length);
  return sentences[index];
};
