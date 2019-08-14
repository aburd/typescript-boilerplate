
module.exports = api => {
  api.cache(false)
  return {
    'presets': [
      [
        '@babel/preset-env',
        {
          'modules': false,
          'targets': {
            'browsers': '> 1%',
          },
          'corejs': '2',
          'useBuiltIns': 'usage',
        },
      ],
      '@babel/preset-typescript',
      '@babel/preset-react',
    ],
    'plugins': [
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-transform-runtime',
      [
        '@babel/plugin-proposal-class-properties',
        { 'spec': true },
      ],
    ],
    'env': { 'test': { 'plugins': ['@babel/plugin-transform-modules-commonjs'] } },
  }
}