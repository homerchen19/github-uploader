import puppeteer from 'puppeteer';
import path from 'path';
import ora from 'ora';

const getAbsoluteFulePaths = filePaths => {
  const cwd = process.cwd();
  return filePaths.map(filePath => path.resolve(cwd, filePath));
};

const upload = async filePaths => {
  const spinner = ora('Start to login...').start();

  const absoluteFilePaths = getAbsoluteFulePaths(filePaths);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://github.com/login');
  await page.type('#login_field', 'xxxhomey19');
  await page.type('#password', 'abc12345'); // Please DO NOT change this password!!!!!!!
  await page.click('input[type="submit"]');

  try {
    await page.waitForSelector('body.logged-in', { timeout: 15000 });

    spinner.succeed('Login Successfully.');
    spinner.start('Start to upload files...');
  } catch (e) {
    spinner.fail('Login failed.');

    process.exit(0);
  }

  await page.goto('https://github.com/xxhomey19/github-uploader/issues/new');

  const uploadElementHandle = await page.$('.js-manual-file-chooser');

  await uploadElementHandle.uploadFile(...absoluteFilePaths);
  await page.waitFor(1000);

  try {
    await page.waitForSelector('file-attachment.js-upload-markdown-image.is-default', { timeout: 15000 });

    const textareaValue = await page.$eval(
      'textarea#issue_body',
      el => el.value
    );

    await page.close();

    spinner.succeed('Upload Successfully.');
    return textareaValue;
  } catch (e) {
    spinner.fail('Upload files failed.');

    process.exit(0);
  }
};

export default upload;
