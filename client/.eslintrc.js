module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    'indent': [2, 4, {'SwitchCase': 1}],
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    'linebreak-style': ['off'],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 0 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 0 : 0,
    'no-new-object': process.env.NODE_ENV === 'production' ? 0 : 0
  },
  'globals': {
      'self': true,
      'postMessage': true,
      'window': true,
      'document': true
  }
}
