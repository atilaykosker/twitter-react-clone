module.exports = {
   stories: ['../stories/**/*.stories.js', '../stories/**/*.stories.tsx'],
   addons: [
      '@storybook/addon-actions',
      '@storybook/addon-controls',
      '@storybook/addon-links',
      '@storybook/addon-postcss',
      {
         name: '@storybook/addon-postcss',
         options: {
            postcssLoaderOptions: {
               implementation: require('postcss'),
            },
         },
      },
      'storybook-css-modules-preset',
   ],
};
