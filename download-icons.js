const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://download.odoocdn.com/icons/';

https.get(url, (response) => {
    let data = '';

    response.on('data', (chunk) => {
        data += chunk;
    });

    response.on('end', () => {
        const htmlResponse = data;

        const folderNamePattern = /<a href="([^"]+)\/">[^<]+<\/a>/g;

        const folderNames = [];
        let match;
        while ((match = folderNamePattern.exec(htmlResponse))) {
            if (!match[1].startsWith('-') && !match[1].startsWith('_') && !match[1].includes(".")) {
                folderNames.push(match[1]);
            }
        }

        const baseURL = 'https://download.odoocdn.com/icons/';
        const savePath = 'icons_odoo_';

        folderNames.forEach(folderName => {
            const imageURL = `${baseURL}${folderName}/static/description/icon.png`;
            const saveFileName = `${savePath}${folderName}.png`;
            const saveFilePath = path.join(__dirname, 'attachments', saveFileName);
            const resizedFilePath = path.join(__dirname, 'attachments', 'resized_' + saveFileName);

            https.get(imageURL, (response) => {
                const fileStream = fs.createWriteStream(saveFilePath);
                response.pipe(fileStream);

                fileStream.on('finish', () => {
                    console.log(`Saved ${saveFilePath}`);
                }).on('error', (error) => {
                    console.error(`Error fetching ${imageURL}: ${error.message}`);
                });
            }).on('error', (error) => {
                console.error(`Error fetching ${imageURL}: ${error.message}`);
            });
        });
    });
}).on('error', (error) => {
    console.error(`Error: ${error.message}`);
});
