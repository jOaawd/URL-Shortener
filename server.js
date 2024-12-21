const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const urlMapping = {};

function generateShortAlias() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let alias = '';
    for (let i = 0; i < 6; i++) {
        alias += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return alias;
}

app.post('/shorten', (req, res) => {
    const { longUrl, customAlias } = req.body;

    if (!longUrl) {
        return res.status(400).json({ success: false, message: 'Long URL is required.' });
    }

    let shortAlias;
    if (customAlias) {
        if (urlMapping[customAlias]) {
            return res.status(400).json({ success: false, message: 'Custom alias already exists.' });
        }
        shortAlias = customAlias;
    } else {
        shortAlias = generateShortAlias();
        while (urlMapping[shortAlias]) {
            shortAlias = generateShortAlias();
        }
    }

    urlMapping[shortAlias] = longUrl;
    const shortUrl = `${req.protocol}://${req.get('host')}/${shortAlias}`;

    res.json({ success: true, shortUrl });
});

app.get('/:shortAlias', (req, res) => {
    const shortAlias = req.params.shortAlias;
    const longUrl = urlMapping[shortAlias];

    if (longUrl) {
        return res.redirect(longUrl);
    }

    res.status(404).json({ success: false, message: 'Short URL not found.' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
