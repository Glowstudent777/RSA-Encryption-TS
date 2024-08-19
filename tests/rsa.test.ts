import { encryptData, decryptData, signData, verifyData, generateKeyPair } from '../src/rsa';
import { expect, it, describe } from 'vitest';

describe("Encrypt and Decrypt Data", () => {
    it("Gets Key Pairs", async () => {
        const { publicKey, privateKey } = generateKeyPair();

        expect(publicKey).toBeDefined();
        expect(privateKey).toBeDefined();
    });

    it("Encrypt and Decrypt Data", async () => {
        const { publicKey, privateKey } = generateKeyPair();

        expect(publicKey).toBeDefined();
        expect(privateKey).toBeDefined();

        const data = "Hello, World!";

        const encryptedData = encryptData(data, publicKey);
        const decryptedData = decryptData(encryptedData, privateKey);

        const signature = signData(data, privateKey);
        const isVerified = verifyData(data, signature, publicKey);

        expect(encryptData).toBeDefined();
        expect(decryptData).toBeDefined();
        expect(decryptedData.toString()).toBe(data);
        expect(signature).toBeDefined();
        expect(isVerified).toBe(true);
    });
});
