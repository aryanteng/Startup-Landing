const withPlugins = import('next-compose-plugins');
const optimizedImages = import('next-optimized-images');

module.exports = withPlugins([optimizedImages], { target: 'serverless' });
