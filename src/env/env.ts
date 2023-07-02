import { readFileSync } from 'fs';
import { argv, env } from 'process';
import { memdump } from '../memdump';
import { CreateWASI } from '../wasi-wrapper';

type Exported = {
    memory: WebAssembly.Memory;
    /** stores in mem how much agrs and their common bytes len */
    getEnvSizes: (ptr_to_counter: number, pointer_to_size: number) => [count: number, size: number];
    getEnv: (pointer_to_i32pointers_array: number, poiter_to_first_arg: number) => void;
};

argv.push('hello');

export const GetEnvWASI = async () => {
    const wasi = CreateWASI({ version: 'preview1', args: argv, env });
    const wasm = await WebAssembly.compile(readFileSync('./src/env/env.wasm'));
    const instance = await WebAssembly.instantiate(wasm, { wasi_snapshot_preview1: wasi.wasiImport });

    wasi.initialize(instance);

    return instance.exports as Exported;
};
const { log } = console;
export const Env = async () => {
    const wasm = await GetEnvWASI();
    log(wasm.getEnvSizes(0, 4), 'num of envs (0 -> 3 in mem) && size of all envs (4 -> 7 in mem)');
    memdump(wasm.memory, 0, 64);
    log(
        wasm.getEnv(16, 94 * 4 + 16),
        'ptrs to envs (16 -> 16 + 3 * (num of envs) in mem) && envs (32 -> 32 + size of envs)'
    );

    memdump(wasm.memory, 0, 4252, true);
};
