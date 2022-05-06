import isAudioFilepath from '.';

it('should return true if file is audio', () => {
  expect(isAudioFilepath('src/folder/file.mp3')).toBe(true);
});

it('should return true if file is audio and only filename passed', () => {
  expect(isAudioFilepath('src/folder/file.mp3')).toBe(true);
});

it('should return false if file is not audio', () => {
  expect(isAudioFilepath('src/folder/file.doc')).toBe(false);
});

it('should return false if file is not audio and only filename passed', () => {
  expect(isAudioFilepath('file.doc')).toBe(false);
});
