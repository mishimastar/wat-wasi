import { readFileSync } from 'fs';
import { CreateWASI } from '../wasi-wrapper';

// new WASI().initialize({});

type Exported = {
    memory: WebAssembly.Memory;
    /** returns pointer to i64 nanos in memory */
    getTimeNanos: (clock_id: number, precision: BigInt) => BigInt;
    getTimeResolution: (clock_id: number) => BigInt;
};

export const GetClockWASI = async () => {
    const wasi = CreateWASI({ version: 'preview1' });
    const wasm = await WebAssembly.compile(readFileSync('./src/clock/clock.wasm'));
    const instance = await WebAssembly.instantiate(wasm, { wasi_snapshot_preview1: wasi.wasiImport });

    wasi.initialize(instance);

    return instance.exports as Exported;
};

export const Clock = async () => {
    const wasm = await GetClockWASI();
    console.log('clock_id', 0, wasm.getTimeResolution(0), '// nanos from 1970-01-01 00:00:00.000000000');
    console.log('clock_id', 1, wasm.getTimeResolution(1), '// nanos from system start');
    console.log('clock_id', 2, wasm.getTimeResolution(2), '// nanos from process start');
    console.log('clock_id', 3, wasm.getTimeResolution(3), '// nanos from thread start RETURNS INCORRECT VALUE');
    console.log('clock_id', 0, wasm.getTimeNanos(0, BigInt(1)), '// nanos from 1970-01-01 00:00:00.000000000');
    console.log('clock_id', 1, wasm.getTimeNanos(1, BigInt(1)), '// nanos from system start');
    console.log('clock_id', 2, wasm.getTimeNanos(2, BigInt(1)), '// nanos from process start');
    console.log('clock_id', 3, wasm.getTimeNanos(3, BigInt(1)), '// nanos from thread start');
};
