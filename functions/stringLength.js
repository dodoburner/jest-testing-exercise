function stringLength(string) {
  if (string.length < 1 || string.length > 10) {
    throw new Error('ERROR ERROR ERROR ERROR ERROR')
  }
  return string.length
}

module.exports = stringLength;