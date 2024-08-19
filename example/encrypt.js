const crypto = require('crypto');
const fs = require('fs');

const publicKey = fs.readFileSync('./public.pem');

args = process.argv.slice(2);
const input = args.join(' ');

if (input === '') {
    console.log('Please provide a string to encrypt');
    process.exit(1);
}

function encryptData(data) {
    return crypto.publicEncrypt({
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: 'sha256',
    }, Buffer.from(data))
}

function verifyData(data, signature) {
    return crypto.verify('sha256', Buffer.from(data), {
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
    }, signature)
}

console.log(encryptData(input).toString("base64"));