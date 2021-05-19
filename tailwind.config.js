const { colors } = require('./_tokens');

let colorObj = {}
for (const element in colors) {
  colorObj[element] = colors[element].value
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
    }
  },
  variants: {},
  plugins: [],
}

fs.copyFile('source.txt', 'destination.txt', (err) => {
  if (err) throw err;
  console.log('source.txt was copied to destination.txt');
});