const { NODE_ENV, BUILD_ENV } = process.env;
const presetOptions = BUILD_ENV === 'hot' || BUILD_ENV === 'umd' ?
  { loose: true, modules: false } :
  { loose: true };

const plugins = [
  'transform-decorators-legacy',
];

if (NODE_ENV === 'production') {
  plugins.push('transform-react-remove-prop-types');
}

if (BUILD_ENV === 'hot') {
  plugins.push('react-hot-loader/babel');
}

module.exports = {
  presets: [
    ['env', presetOptions],
    'stage-1',
    'react',
  ],
  plugins,
};
