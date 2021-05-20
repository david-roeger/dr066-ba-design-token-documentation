const { colors, font, spacing } = require('./_tokens');

// get Colors
let colorObj = {}
for (const element in colors) {
  colorObj[element] = colors[element].value
}

// get Fonts
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

// get Spacing
let spacingObj= {}
for (const element in spacing) {
  spacingObj[element] = spacing[element].value
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
    spacing: {
        ...spacingObj
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