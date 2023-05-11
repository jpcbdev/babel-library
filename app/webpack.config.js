module.exports = {
    externals: {
        jquery: 'jQuery',
        'react-draft-wysiwyg': 'react-draft-wysiwyg',
        "draft-js": "draft-js",
        filename: "html-to-draftjs.js",
        library: "htmlToDraftjs",
        libraryTarget: "umd",
        globalObject: "this"
    },
    output: {
        globalObject: "this"
    }

};