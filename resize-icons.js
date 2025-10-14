const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

// Check if 'attachments' directory exists
const attachmentsDir = path.join(__dirname, 'attachments')
if (
    !fs.existsSync(attachmentsDir) ||
    !fs.lstatSync(attachmentsDir).isDirectory()
) {
    console.error("Error: 'attachments' directory not found")
    process.exit(1)
}

// Read the contents of 'attachments' directory
fs.readdirSync(attachmentsDir).forEach((file) => {
    const filePath = path.join(attachmentsDir, file)

    // Check if the file has a .png extension
    if (
        fs.statSync(filePath).isFile() &&
        path.extname(file).toLowerCase() === '.png' &&
        file.startsWith('icons_odoo_')
    ) {
        // Resize the image to 100x100 using sharp
        const resizedFilePath = path.join(attachmentsDir, `resized_${file}`)
        sharp(filePath)
            .resize(100, 100)
            .toFile(resizedFilePath, (err) => {
                if (err) {
                    console.error(`Error resizing image ${file}: ${err}`)
                } else {
                    console.log(`Resized ${file} to 100x100`)
                }
            })
    } else {
        console.log(
            `Skipping non-PNG file or file without 'icons_odoo_' prefix: ${file}`
        )
    }
})
