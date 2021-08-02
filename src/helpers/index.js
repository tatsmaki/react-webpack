import { LoremIpsum } from 'lorem-ipsum'

export const loremIpsum = new LoremIpsum({
  sentencesPerParagraph: { min: 4, max: 8 },
  wordsPerSentence: { min: 4, max: 8 },
})
