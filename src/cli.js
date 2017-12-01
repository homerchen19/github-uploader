import minimist from 'minimist';
import chalk from 'chalk';

import help from './help';
import upload from './upload';
import pkg from '../package.json';

import table from './utils/table';

const GENERAL_REGEX = /[!]?\[(.*)\]\((.*)\)/;
const IMGTAG_REGEX = /[^<img].*alt="(.*)" src="(.*)"[>$]/;

export const parseTextareaValue = textareaValue => {
  const fileTexts = textareaValue.replace(/\n$/, '').split('\n');

  return fileTexts.map(fileText => {
    const regex = fileText[0] !== '<' ? GENERAL_REGEX : IMGTAG_REGEX;

    const [originalText, name, url] = fileText.match(regex);

    return {
      originalText,
      name,
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
      const files = parseTextareaValue(textareaValue);

      console.log(`

    ${chalk.green('Result:')}
      `);

      files.forEach(file => {
        table.push([file.name, file.url]);
      });

      console.log(table.toString());
      console.log('');
    } catch (e) {
      console.error(e);
    }
  }

  process.exit(0);
};

main(minimist(process.argv.slice(2))).catch(console.error);

export default main;
