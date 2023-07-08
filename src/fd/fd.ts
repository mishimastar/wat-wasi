import { readFileSync } from 'fs';
import { argv } from 'process';
import { memdump } from '../memdump';
import { CreateWASI, StatusCode } from '../wasi-wrapper';

type Exported = {
    memory: WebAssembly.Memory;
    fdWrite: (fd: number, str_ptr: number, str_len: number) => StatusCode;
    fdRead: (fd: number, str_ptr: number, str_max_len: number) => StatusCode;
    echo: (fd: number, str_ptr: number, str_max_len: number) => [read: StatusCode, write: StatusCode];
};

argv.push('hello');

export const GetFDWASI = async () => {
    const wasi = CreateWASI({ version: 'preview1', args: argv });
    const wasm = await WebAssembly.compile(readFileSync('./src/fd/fd.wasm'));
    const instance = await WebAssembly.instantiate(wasm, { wasi_snapshot_preview1: wasi.wasiImport });

    wasi.initialize(instance);

    return instance.exports as Exported;
};
const { log } = console;
export const FD = async () => {
    const wasm = await GetFDWASI();
    log(' ||| status:', wasm.fdWrite(0, 16, 14), 'write to stdin');
    memdump(wasm.memory, 0, 64);
    log(' ||| status:', wasm.fdWrite(1, 16, 16), 'write to stdout');
    memdump(wasm.memory, 0, 64);
    log(' ||| status:', wasm.fdWrite(2, 16, 15), 'write to stderr');
    memdump(wasm.memory, 0, 64);

    log(' ||| status:', wasm.fdRead(0, 48, 16), 'read from stdin');
    memdump(wasm.memory, 0, 64);
    log(' ||| status:', wasm.fdRead(1, 48, 16), 'read from stdout');
    memdump(wasm.memory, 0, 64);
    log(' ||| status:', wasm.fdRead(2, 48, 16), 'read from stderr');
    memdump(wasm.memory, 0, 64);

    log(' ||| status:', wasm.echo(0, 80, 16), 'echo with stdin');
    memdump(wasm.memory, 0, 64);
    log(' ||| status:', wasm.echo(1, 80, 16), 'echo with stdout');
    memdump(wasm.memory, 0, 96, true);
    log(' ||| status:', wasm.echo(2, 80, 16), 'echo with stderr');
    memdump(wasm.memory, 0, 96, true);
};
