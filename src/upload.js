import { Chromeless } from 'chromeless';
import path from 'path';

const getAbsoluteFulePaths = filePaths => {
  const cwd = process.cwd();
  return filePaths.map(filePath => path.join(cwd, filePath));
};

const upload = async filePaths => {
  const absoluteFilePaths = getAbsoluteFulePaths(filePaths);

  const chromeless = new Chromeless();

  const textareaValue = await chromeless
    .goto('https://github.com/login')
    .clearCache()
    .type('xxxhomey19', '#login_field')
    .type('abc12345', '#password')
    .click('input[type="submit"]')
    .wait('body.logged-in')
    .goto('https://github.com/xxhomey19/github-uploader/issues/new')
    .setFileInput('.js-manual-file-chooser', absoluteFilePaths)
    .wait(1000)
    .wait('div.is-default')
    .inputValue('textarea#issue_body');

  await chromeless.end();

  return textareaValue;
};

export default upload;
