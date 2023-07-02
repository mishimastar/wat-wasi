import { readFileSync } from 'fs';
import { memdump } from '../memdump';
import { CreateWASI } from '../wasi-wrapper';

type Exported = {
    memory: WebAssembly.Memory;
    /** returns pointer to i64 nanos in memory */
    getRandom: (pointer: number, len: number) => number;
};

export const GetRandomWASI = async () => {
    const wasi = CreateWASI({ version: 'preview1' });
    const wasm = await WebAssembly.compile(readFileSync('./src/random/random.wasm'));
    const instance = await WebAssembly.instantiate(wasm, { wasi_snapshot_preview1: wasi.wasiImport });

    wasi.initialize(instance);

    return instance.exports as Exported;
};

export const Random = async () => {
    const wasm = await GetRandomWASI();
    console.log('pointer', 0, 'len', 16, wasm.getRandom(0, 16)); // 16 random bytes | 0 -> 15 in mem
    memdump(wasm.memory, 0, 64);
    console.log('pointer', 16, 'len', 32, wasm.getRandom(16, 32)); // 32 random bytes | 16 -> 47 in mem
    memdump(wasm.memory, 0, 64);
};
