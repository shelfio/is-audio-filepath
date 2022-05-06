# is-audio-filepath [![CircleCI](https://circleci.com/gh/shelfio/is-audio-filepath/tree/master.svg?style=svg)](https://circleci.com/gh/shelfio/is-audio-filepath/tree/master)![](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)

> is-audio-filepath

## Install

```
$ yarn add @shelf/is-audio-filepath
```

## Usage

```js
const isAudioFilepath = require('@shelf/is-audio-filepath');

isAudioFilepath('folder/file.mp3');
// => true
```

## Publish

```sh
$ git checkout master
$ yarn version
$ yarn publish
$ git push origin master --tags
```

## License

MIT © [Shelf](https://shelf.io)
