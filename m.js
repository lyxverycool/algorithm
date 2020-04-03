function cssStyle2DomStyle(sName) {
  const names = sName.split('')
  let newNames = []
  for (var i = 0; i < names.length; i++) {
    if (names[i] == '-') {
      if (i !== 0) {
        names[i + 1] = names[i + 1].toUpperCase()
      }
    } else {
      newNames.push(names[i])
    }
  }
  console.log(newNames.join(''))
  return newNames.join('')
}

cssStyle2DomStyle('-webkit-border-image')