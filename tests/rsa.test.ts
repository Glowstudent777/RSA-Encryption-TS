import { encryptData, decryptData, signData, verifyData, generateKeyPair } from '../src/rsa';
import { expect, it, describe } from 'vitest';

describe("Encrypt and Decrypt Data", () => {
    it("Gets Key Pairs", async () => {
        const { publicKey, privateKey } = generateKeyPair();

        expect(publicKey).toBeDefined();
        expect(privateKey).toBeDefined();
    });

    it("Encrypt and Decrypt Data", async () => {
        const data = "Hello, World!";
        const encryptedData = encryptData(data);
        const decryptedData = decryptData(encryptedData);
        const signature = signData(data);
        const isVerified = verifyData(data, signature);

        expect(encryptData).toBeDefined();
        expect(decryptData).toBeDefined();
        expect(decryptedData.toString()).toBe(data);
        expect(signature).toBeDefined();
        expect(isVerified).toBe(true);
    });
});
