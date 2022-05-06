import path from 'path';

const audioExtensions = new Set([
  'wav',
  'bwf',
  'raw',
  'aiff',
  'flac',
  'm4a',
  'pac',
  'tta',
  'wv',
  'ast',
  'aac',
  'mp2',
  'mp3',
  'mp4',
  'amr',
  's3m',
  '3gp',
  'act',
  'au',
  'dct',
  'dss',
  'gsm',
  'm4p',
  'mmf',
  'mpc',
  'ogg',
  'oga',
  'opus',
  'ra',
  'sln',
  'vox',
]);

export default function (filepath: string): boolean {
  return audioExtensions.has(path.extname(filepath).slice(1).toLowerCase());
}
