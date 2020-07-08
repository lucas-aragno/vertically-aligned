import minify from 'rollup-plugin-babel-minify'

export default [{
  input: 'index.js',
  output: [
   {
      file: 'dist/bundle-node.js',
      format: 'cjs'
    },
    {
      file: 'dist/bundle-browser.js',
      format: 'iife'
    }
  ],
  plugins: [
		minify({})
	]
}];
