# GitHub Uploader

<p align=center>
<img src="https://user-images.githubusercontent.com/34133927/33471643-4f08d85c-d6a9-11e7-871d-ca6fc21bfdc9.gif">
</p>
<p align=center>
<a target="_blank" href="https://npmjs.org/package/github-uploader" title="NPM version"><img src="https://img.shields.io/npm/v/github-uploader.svg"></a>
<a target="_blank" href="https://travis-ci.org/xxhomey19/github-uploader" title="Build Status"><img src="https://travis-ci.org/xxhomey19/github-uploader.svg?branch=master"></a>
<a target="_blank" href="http://nodejs.org/download/" title="Node version"><img src="https://img.shields.io/badge/node.js-%3E=_6.4-green.svg"></a>
<a target="_blank" href="https://opensource.org/licenses/MIT" title="License: MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg"></a>
<a target="_blank" href="http://makeapullrequest.com" title="PRs Welcome"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg"></a>
</p>

> Get public and free URL to your files.<br> By
> [github-uploader](https://github.com/xxhomey19/github-uploader), you can let
> GitHub host your public files much more easier.

According to
[Official docs](https://help.github.com/articles/file-attachments-on-issues-and-pull-requests/),
GitHub supports these files now:

* PNG (.png)
* GIF (.gif)
* JPEG (.jpg)
* Log files (.log)
* Microsoft Word (.docx), Powerpoint (.pptx), and Excel (.xlsx) documents
* Text files (.txt)
* PDFs (.pdf)
* ZIP (.zip, .gz)

Notice that **the maximum size for files is 25MB and the maximum size for images
is 10MB**.

## Install 🛠

Please make sure that your terminal has installed [Node](https://nodejs.org/)
version **6.4.0 or higher**.

```
$ npm install -g github-uploader
```

It will register `github-uploader` and `gu` in your terminal.

## Usage 🖥

### Upload files

Enter the path of files which you would like to upload to GitHub.

```
$ github-uploader [file path]
```

**Note.**\
If you want to upload several files at the same time, separate each path with a space.\
File path can be relative path or absolute path.

## How it works ❓

I created a fake GitHub account named `xxxhomey19`.

Every time you upload files, `github-uploader` will log in to GitHub and pretend
to open a new issue in this repo. On that
[page](https://github.com/xxhomey19/github-uploader/issues/new), it can upload
your files.

Last of all, it parses all the content including file name and public URL and
show it in your terminal.

That's it 😋

## License

MIT © [xxhomey19](https://github.com/xxhomey19)
