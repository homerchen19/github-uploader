import minimist from 'minimist';
import chalk from 'chalk';
import lpad from 'lpad';

import help from './help';
import upload from './upload';
import pkg from '../package.json';

const GENERAL_REGEX = /[!]?\[(.*)\]\((.*)\)/;
const IMGTAG_REGEX = /[^<img].*alt="(.*)" src="(.*)"[>$]/;

export const parseTextareaValue = textareaValue => {
  const fileTexts = textareaValue.split('\n');

  return fileTexts.map(fileText => {
    const regex = fileText[0] !== '<' ? GENERAL_REGEX : IMGTAG_REGEX;

    const [originalText, title, url] = fileText.match(regex);

    return {
      originalText,
      title,
      url,
    };
  });
};

const main = async argv => {
  if (argv.v || argv.version || argv._[0] === 'version') {
    console.log(pkg.version);
    process.exit(0);
  }

  if (argv.h || argv.help || argv._[0] === 'help' || argv._.length === 0) {
    help();
    process.exit(0);
  }

  if (argv._.length !== 0) {
    try {
      console.log('');

      const textareaValue = await upload(argv._);
      const result = parseTextareaValue(textareaValue);

      console.log(`

    ${chalk.green('Result:')}

${lpad(chalk.bold(result), '      ')}
      `);
    } catch (e) {
      console.error(e);
    }
  }

  process.exit(0);
};

main(minimist(process.argv.slice(2))).catch(console.error);

export default main;
