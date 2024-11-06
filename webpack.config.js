const path = require('path');
const fs = require('fs')

module.exports = {
    mode: 'production',
    entry: './ocfw/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true
    },
    // supprt high version js engine
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        {
            apply: (compiler) => {
                compiler.hooks.afterEmit.tap('AfterEmitPlugin', async (compilation) => {
                    let bundlePath = path.join(__dirname, 'dist', 'bundle.js')
                    if (fs.existsSync(bundlePath)) {
                        let bundleContent = fs.readFileSync(bundlePath, { encoding: 'utf8' })
                        bundleContent = bundleContent.replace(/\*\*\*/ig, '')
                        fs.writeFileSync(bundlePath, bundleContent, { encoding: 'utf8' })
                        fs.cpSync(path.join(__dirname, 'assets'), path.join(__dirname, 'dist', 'assets'), { recursive: true });
                        let distIndex = path.join(__dirname, 'dist', 'index.html')
                        fs.cpSync(path.join(__dirname, 'index.html'), distIndex);
                        let didx = fs.readFileSync(distIndex, { encoding: 'utf8' })
                        didx = didx.replace('./ocfw/index.js', 'bundle.js')
                        fs.writeFileSync(distIndex, didx, { encoding: 'utf8' })
                    }
                });
            }
        }
    ]
}