const path = require('path');
const audioExtensions = require('./audio-extensions');

const ext = new Set(audioExtensions);

module.exports = filepath =>
  ext.has(
    path
      .extname(filepath)
      .slice(1)
      .toLowerCase()
  );
