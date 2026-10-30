/**
 * Copyright (c) Whales Corp. 
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Buffer } from 'buffer';

export async function pbkdf2_sha512(key: string | Buffer, salt: string | Buffer, iterations: number, keyLen: number): Promise<Buffer> {
    const keyBuffer = typeof key === 'string' ? Buffer.from(key, 'utf-8') : key;
    const saltBuffer = typeof salt === 'string' ? Buffer.from(salt, 'utf-8') : salt;
    let pbkdf2 = require('react-native-fast-pbkdf2').default;
    let res = await pbkdf2.derive(keyBuffer.toString('base64'), saltBuffer.toString('base64'), iterations, keyLen, 'sha-512');
    return Buffer.from(res, 'base64');
}