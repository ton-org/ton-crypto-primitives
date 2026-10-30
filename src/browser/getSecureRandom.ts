/**
 * Copyright (c) Whales Corp. 
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Buffer } from 'buffer';

export function getSecureRandomBytes(size: number): Buffer {
    return Buffer.from(window.crypto.getRandomValues(new Uint8Array(size)));
}

export function getSecureRandomWords(size: number): Uint16Array {
    return window.crypto.getRandomValues(new Uint16Array(size));
}