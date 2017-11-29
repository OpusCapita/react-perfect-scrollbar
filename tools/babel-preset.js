const { BABEL_ENV } = process.env;
const building = BABEL_ENV !== undefined && BABEL_ENV !== 'cjs';

const plugins = [
  'transform-decorators-legacy',
];

if (process.env.NODE_ENV === 'production') {
  plugins.push('dev-expression', 'transform-react-remove-prop-types');
}

module.exports = {
  presets: [
    ['env', {
      loose: true,
      modules: building ? false : 'commonjs',
    }],
    'stage-1',
    'react',
  ],
  plugins,
};
