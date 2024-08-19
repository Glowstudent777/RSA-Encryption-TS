const crypto = require('crypto');
const fs = require('fs');

const privateKey = fs.readFileSync('./private.pem');

args = process.argv.slice(2);
const input = Buffer.from(args.join(' '), 'base64');

if (input === '') {
    console.log('Please provide a string to decrypt');
    process.exit(1);
}

function decryptData(encryptedData) {
    return crypto.privateDecrypt({
        key: privateKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: 'sha256',
    }, encryptedData)
}

function signData(data) {
    return crypto.sign('sha256', Buffer.from(data), {
        key: privateKey,
        padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
    })
}

console.log(decryptData(input).toString());