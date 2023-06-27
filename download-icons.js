const https = require('https')
const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const url = 'https://download.odoocdn.com/icons/'

https.get(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data += chunk
    })

    response.on('end', () => {

        htmlResponse = data

        const folderNamePattern = /<a href="([^"]+)\/">[^<]+<\/a>/g

        const folderNames = []
        let match
        while ((match = folderNamePattern.exec(htmlResponse))) {
            folderNames.push(match[1])
        }

        const baseURL = 'https://download.odoocdn.com/icons/'
        const savePath = 'icons_odoo_'

        folderNames.forEach((folderName) => {
            const imageURL = `${baseURL}${folderName}/static/description/icon.png`
            const saveFileName = `${savePath}${folderName}.png`
            const saveFilePath = path.join(__dirname, 'assets/' + saveFileName)
            const resizedFilePath = path.join(__dirname, 'assets/resized_' + saveFileName)

            https.get(imageURL, (response) => {
                const fileStream = fs.createWriteStream(saveFilePath)
                response.pipe(fileStream)

                fileStream.on('finish', async () => {
                    console.log(`Saved ${saveFilePath}`)

                    await sharp(saveFilePath)
                        .resize(100, 100)
                        .toFile(resizedFilePath)

                    fs.rename(resizedFilePath, saveFilePath, (err) => {
                        if (err) {
                            console.error(`Error replacing ${saveFileName}: ${err.message}`)
                        } else {
                            console.log(`Resized image saved at ${saveFilePath}`)
                        }
                    })

                    fileStream.on('error', (error) => {
                        console.error(`Error while saving ${saveFileName}: ${error.message}`)
                    })
                }).on('error', (error) => {
                    console.error(`Error fetching ${imageURL}: ${error.message}`)
                })
            })

        })

    }).on('error', (error) => {
        console.error(`Error: ${error.message}`)
    })
})