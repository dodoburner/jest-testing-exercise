function capitalize(string) {
  if (typeof string === 'string') {
    return string[0].toUpperCase() + string.slice(1)
  } 
  return 'Not a string'
}

module.exports = capitalize