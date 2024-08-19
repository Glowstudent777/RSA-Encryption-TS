import crypto from 'crypto';
import fs from 'fs';

function generateKeyPair() {
    const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
        modulusLength: 4096,
    });

    return { publicKey, privateKey };
}
const { publicKey, privateKey } = generateKeyPair();

function saveKeys() {
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
}

function encryptData(data: any, publicKey: any) {
    return crypto.publicEncrypt({
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: 'sha256',
    }, Buffer.from(data))
}

function decryptData(encryptedData: any, privateKey: any) {
    return crypto.privateDecrypt({
        key: privateKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: 'sha256',
    }, encryptedData)
}

function signData(data: any, privateKey: any) {
    return crypto.sign('sha256', Buffer.from(data), {
        key: privateKey,
        padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
    })
}

function verifyData(data: any, signature: any, publicKey: any) {
    return crypto.verify('sha256', Buffer.from(data), {
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
    }, signature)
}

export { encryptData, decryptData, signData, verifyData, generateKeyPair, saveKeys };