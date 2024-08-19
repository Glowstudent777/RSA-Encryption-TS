const crypto = require('crypto');
const fs = require('fs');

const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', { modulusLength: 4096 });

try {
    if (!fs.existsSync('keys')) {
        fs.mkdirSync('keys');
    }
    fs.writeFileSync('keys/public.pem', publicKey.export({
        type: 'pkcs1',
        format: 'pem'
    }));

    fs.writeFileSync('keys/private.pem', privateKey.export({
        type: 'pkcs1',
        format: 'pem'
    }));
} catch (err) {
    console.error(err);
}

function encryptData(data) {
    return crypto.publicEncrypt({
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: 'sha256',
    }, Buffer.from(data))
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

function verifyData(data, signature) {
    return crypto.verify('sha256', Buffer.from(data), {
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
    }, signature)
}

const data = 'Hello, World!';
const encryptedData = encryptData(data);
const decryptedData = decryptData(encryptedData);
const signature = signData(data);
const isVerified = verifyData(data, signature);

console.log('Data:', data);
console.log('Decrypted Data:', decryptedData.toString());
console.log('Is Verified:', isVerified);