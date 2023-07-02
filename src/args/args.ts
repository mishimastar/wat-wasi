import { readFileSync } from 'fs';
import { argv } from 'process';
import { memdump } from '../memdump';
import { CreateWASI } from '../wasi-wrapper';

type Exported = {
    memory: WebAssembly.Memory;
    /** stores in mem how much agrs and their common bytes len */
    getArgsSizes: (ptr_to_counter: number, pointer_to_size: number) => [count: number, size: number];
    getArgs: (pointer_to_i32pointers_array: number, poiter_to_first_arg: number) => void;
};

argv.push('hello');

export const GetAgrsWASI = async () => {
    const wasi = CreateWASI({ version: 'preview1', args: argv });
    const wasm = await WebAssembly.compile(readFileSync('./src/args/args.wasm'));
    const instance = await WebAssembly.instantiate(wasm, { wasi_snapshot_preview1: wasi.wasiImport });

    wasi.initialize(instance);

    return instance.exports as Exported;
};
const { log } = console;
export const Args = async () => {
    const wasm = await GetAgrsWASI();
    log(wasm.getArgsSizes(0, 4), 'num of agrs (0 -> 3 in mem) && size of all agrs (4 -> 7 in mem)');
    memdump(wasm.memory, 0, 64);
    log(wasm.getArgs(16, 32), 'ptrs to agrs (16 -> 16 + 3 * (num of args) in mem) && agrs (32 -> 32 + size of args)');
    memdump(wasm.memory, 0, 256, true);
};
