module.exports = {
  // images: {
  //     domains: ['courses-top.ru']
  // },
  webpack: (config) => {
    config.module.rules.push(
      // {
      // test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']
      // },
      {
      test: /\.svg$/, issuer: /\.[jt]sx?$/, use: [{
        loader: '@svgr/webpack', options: {
          prettier: false, svgo: true, svgoConfig: {
            plugins: [{
              name: 'preset-default', params: {
                override: {
                  removeViewBox: false
                }
              }
            }]
          }, titleProp: true
        }
      }]
    });

    return config;
  }
};
