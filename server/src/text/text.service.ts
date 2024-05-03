import { Injectable } from '@nestjs/common';

@Injectable()
export class TextService {
  // - the number of words.
  async getTheNumberOfWords(text: string): Promise<number> {
    return text.split(' ').length;
  }
  // - the number of characters.
  async getTheNumberOfCharacters(text: string): Promise<number> {
    return text.length;
  }
  // - the number of sentences.
  async getTheNumberOfSentences(text: string): Promise<number> {
    return text.split('.').length;
  }
  // - the number of paragraphs.
  async getTheNumberOfParagraphs(text: string): Promise<number> {
    let count = 0;
    const paragraphs = text.split('\n');
    paragraphs.forEach(paragraph => {
      if (paragraph.trim() !== '') {
        count++;
      }
    });
    return count;
  }
  // - the longest words in paragraphs.
  async getTheLongestWordInParagraphs(text: string): Promise<string> {
    const paragraphs = text.split('\n');
    let longestWord = '';
    paragraphs.forEach((paragraph) => {
      const words = paragraph.split(' ');
      words.forEach((word) => {
        if (word.length > longestWord.length) {
          longestWord = word;
        }
      });
    });
    return longestWord;
  }
}
