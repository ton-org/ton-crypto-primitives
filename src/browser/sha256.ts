/**
 * Copyright (c) Whales Corp. 
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Buffer } from 'buffer';

export async function sha256(source: Buffer | string): Promise<Buffer> {
    if (typeof source === 'string') {
        return Buffer.from(await crypto.subtle.digest("SHA-256", Buffer.from(source, 'utf-8')));
    }
    return Buffer.from(await crypto.subtle.digest("SHA-256", source));
}