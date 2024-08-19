# RSA Encryption Proof of Concept

This is a proof of concept project demonstrating RSA encryption in TypeScript.

## Overview

The RSA encryption algorithm is a widely used asymmetric encryption algorithm that allows secure communication between parties. This project aims to showcase the implementation of RSA encryption in TypeScript.

## Features

- Key generation: Generate public and private keys for encryption and decryption.
- Encryption: Encrypt messages using the recipient's public key.
- Decryption: Decrypt encrypted messages using the recipient's private key.

## Installation

> **Note**
> I use `pnpm` in these examples. `NPM` will also work if you don't have or want to install `pnpm`

1. Clone the repository: `git clone https://github.com/Glowstudent777/RSA-Encryption-TS.git`
2. Install dependencies: `pnpm install`

## Usage

1. Generate keys: Run `pnpm run save-keys` to generate public and private keys.
2. Use the functions in `src/rsa.ts` to encrypt and decrypt messages.

```ts
import { encryptData, decryptData }; from './src/rsa';

const publicKey = '...'; // Public key generated using generate-keys
const privateKey = '...'; // Private key generated using generate-keys

const message = 'Hello, world!';

const encryptedMessage = encryptData(message, publicKey);
const decryptedMessage = decryptData(encryptedMessage, privateKey);

console.log('Decrypted message:', decryptedMessage); // Result: Hello, world!
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
