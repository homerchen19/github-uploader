import { parseTextareaValue } from '../cli';

jest.mock('minimist');

describe('parseTextareaValue', () => {
  it('should exist', () => {
    expect(parseTextareaValue).toBeDefined();
  });

  it('should parse textareaValue', () => {
    const textareaValue =
      '[test.txt](https://github.com/xxhomey19/github-uploader/files/1520313/test.txt)\n![test](https://user-images.githubusercontent.com/34133927/33466767-097bc68c-d68b-11e7-8622-2acba4081d8b.png)\n';
    const result = parseTextareaValue(textareaValue);

    expect(result).toEqual([
      {
        originalText:
          '[test.txt](https://github.com/xxhomey19/github-uploader/files/1520313/test.txt)',
        name: 'test.txt',
        url:
          'https://github.com/xxhomey19/github-uploader/files/1520313/test.txt',
      },
      {
        originalText:
          '![test](https://user-images.githubusercontent.com/34133927/33466767-097bc68c-d68b-11e7-8622-2acba4081d8b.png)',
        name: 'test',
        url:
          'https://user-images.githubusercontent.com/34133927/33466767-097bc68c-d68b-11e7-8622-2acba4081d8b.png',
      },
    ]);
  });

  it('should be able to parse img tag', () => {
    const textareaValue =
      '<img width="1031" alt="7_" src="https://user-images.githubusercontent.com/12113222/33466913-0f8511d6-d68c-11e7-8d27-7b725030220e.png">\n';
    const result = parseTextareaValue(textareaValue);

    expect(result).toEqual([
      {
        originalText:
          ' width="1031" alt="7_" src="https://user-images.githubusercontent.com/12113222/33466913-0f8511d6-d68c-11e7-8d27-7b725030220e.png">',
        name: '7_',
        url:
          'https://user-images.githubusercontent.com/12113222/33466913-0f8511d6-d68c-11e7-8d27-7b725030220e.png',
      },
    ]);
  });
});
