import { readFileSync } from 'fs';
import { memdump } from '../memdump';
import { CreateWASI, StatusCode } from '../wasi-wrapper';

type Exported = {
    memory: WebAssembly.Memory;
    /** returns zero, may be void is better for performance */
    getRandom: (pointer: number, len: number) => StatusCode;
    uuidv4: () => number;
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
    memdump(wasm.memory, 0, 64);
    console.log('pointer', 0, 'len', 16, wasm.getRandom(0, 16)); // 16 random bytes | 0 -> 15 in mem
    memdump(wasm.memory, 0, 64);
    console.log('pointer', 16, 'len', 32, wasm.getRandom(16, 32)); // 32 random bytes | 16 -> 47 in mem
    memdump(wasm.memory, 0, 64);

    // const buf = Buffer.from(wasm.memory.buffer, 0, 32768);
    // const uuidv4 = () => {
    //     const ptr = wasm.uuidv4();
    //     return buf.subarray(ptr, ptr + 16).toString('hex');
    // };
    // console.log(uuidv4());
    // const st = performance.now();
    // for (let i = 0; i < 1000000; i++) uuidv4();
    // console.log((1000000 * 1000) / (performance.now() - st), 'ops/s');
    // const st2 = performance.now();
    // for (let i = 0; i < 1000000; i++) randomUUID();
    // console.log((1000000 * 1000) / (performance.now() - st2), 'ops/s');
    // const st3 = performance.now();
    // for (let i = 0; i < 1000000; i++) randomUUID({ disableEntropyCache: true });
    // console.log((1000000 * 1000) / (performance.now() - st3), 'ops/s');
};
