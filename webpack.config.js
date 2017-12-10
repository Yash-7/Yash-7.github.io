var path = require('path');

var SRC = path.resolve(__dirname,'src');
var DIST = path.resolve(__dirname,'dist');

module.exports = {
    entry : SRC + '/app/index.js',
    output : {
        path : DIST + '/app',
        filename : 'bundle.js',
        publicPath : '/app/'
    },
    module : {
        rules :[
            {
                test : /\.js?/,
                include : SRC,
                exclude : /node_modules/,
                loader : "babel-loader",
                
            },
            {
                test : /\.css?/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
}