# RSA Encryption Proof of Concept

This is a proof of concept project demonstrating RSA encryption in TypeScript.

## Overview

The RSA encryption algorithm is a widely used asymmetric encryption algorithm that allows secure communication between parties. This project aims to showcase the implementation of RSA encryption in TypeScript.

A cli example is provided in the [example directory](/example/).

## Features

- Key generation: Generate public and private keys for encryption and decryption.
- Encryption: Encrypt messages using the recipient's public key.
- Decryption: Decrypt encrypted messages using the recipient's private key.

## Installation

> **Note**
> I use `pnpm` in these examples. `NPM` will also work if you don't have or want to install `pnpm`

Clone the repository:

```sh
git clone https://github.com/Glowstudent777/RSA-Encryption-TS.git
```

Install dependencies:

```sh
pnpm install
```

Build the project:

```bash
pnpm run build
```

## Usage

Use the following command to generate and save the public and private keys in the `/keys` directory

```sh
pnpm run save-keys
```

Use the functions in `src/rsa.ts` to encrypt and decrypt messages using the generated keys.

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
