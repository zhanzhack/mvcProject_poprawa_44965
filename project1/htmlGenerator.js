
const htmlGenerator = {
    getHTMLDocumentStart: function() {
        return `<!DOCTYPE html>
        <html>
        <head>
        <meta charset=UTF8>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Cars</title>
        </head>`;
    },

    getHTMLDocumentEnd: function() {
        return '</html>';
    }
};

module.exports = htmlGenerator