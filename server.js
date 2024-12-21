const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const urlMapping = {};

function generateShortAlias() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let alias = '';
    for (let i = 0; i < 6; i++) {
        alias += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return alias;
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/shorten', (req, res) => {
    const longUrl = req.body.longUrl;
    const customAlias = req.body.customAlias;

    if (!longUrl) {
        return res.status(400).send('Long URL is required.');
    }

    let shortAlias;
    if (customAlias) {
        if (urlMapping[customAlias]) {
            return res.status(400).send('Custom alias already exists.');
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

    res.send(`Shortened URL: <a href="${shortUrl}" target="_blank">${shortUrl}</a>`);
});

app.get('/:shortAlias', (req, res) => {
    const shortAlias = req.params.shortAlias;
    const longUrl = urlMapping[shortAlias];

    if (longUrl) {
        return res.redirect(longUrl);
    }

    res.status(404).send('Short URL not found.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
