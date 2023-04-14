module.exports = {
  images: {
    domains: ['localhost'],
  },
  webpack: (config) => {
    config.module.rules.push(
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
