/**
 * @type {import('next').NextConfig}
 */

const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    // set basePath to cicd if in production
    basePath: isProd ? '/cicd_trial' : '',

    output: 'export',
   
   
    // Optional: Change the output directory `out` -> `dist`
    distDir: 'dist',
    images:{
        unoptimized:true,
    },

  }
   
  module.exports = nextConfig