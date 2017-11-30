import chalk from 'chalk';

module.exports = async () => {
  console.log(`
    ${chalk.green('github-uploader')}

    Upload attachments to GitHub in CLI.
    Get public URL to your files.

    ${chalk.blue('Usage:')}

       github-uploader [options] [command]

    ${chalk.blue('Commands:')}

      [file path]    Path of the file to be uploaded

    ${chalk.blue('Options:')}

      -v, --version  Output the version number
      -h, --help     Output usage information

  `);
};
