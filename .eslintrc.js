module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    semi: [1, 'never'],
    'no-console': ['error', { allow: ['log', 'warn', 'error'] }],
    'no-bitwise': 0,
    'no-unused-vars': ['error', {
      'vars': 'all',
      'args': 'after-used',
      'ignoreRestSiblings': false,
      'argsIgnorePattern': '^_'
    }],
    'no-unused-expressions': 0,
    'no-param-reassign': ['error',
      {
        'props': true,
        'ignorePropertyModificationsFor': ['state']
      }
    ],
    'import/prefer-default-export': 0,
    'comma-dangle': ['error', 'only-multiline'],
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'ignore',
      'asyncArrow': 'always'
    }],
    'no-loop-func': 0,
    'no-param-reassign': 0,
    'no-continue': 0,
  }
};
