const { colors, font } = require('./_tokens');

let colorObj = {}
for (const element in colors) {
  colorObj[element] = colors[element].value
}

let fontObj = {
  fontFamily: {},
  size: {},
  lineHeight: {}
}
for (const element in font) {
  if(font[element].family) {
      fontObj.fontFamily[font[element].family.value.toLowerCase()] = font[element].family.value
  }
  fontObj.size[element] = font[element].size.value
  fontObj.lineHeight[element] = font[element].lineheight.value
}

module.exports = {
  mode: 'jit',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    safeList: [],
    content: ['./index.html', './src/**/*.tsx', './src/**/*.ts'],
  },
  theme: {
    colors: {
      ...colorObj
    },
    fontSize: {
      ...fontObj.size
    },
    lineHeight: {
      ...fontObj.lineHeight
    },
    extend: {
      fontFamily: {
        ...fontObj.fontFamily
      }
    }
  },
  variants: {},
  plugins: [],
}