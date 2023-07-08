import { readFileSync } from 'fs';
import { memdump } from '../memdump';
import { CreateWASI } from '../wasi-wrapper';

type Exported = {
    memory: WebAssembly.Memory;
    /** returns pointer to i64 nanos in memory */
    getTimeNanos: (clock_id: ClockID, precision: BigInt) => BigInt;
    getTimeResolution: (clock_id: ClockID) => BigInt;
    gen1: () => void;
};

enum ClockID {
    REALTIME = 0,
    MONOTONIC = 1,
    PROCESS_CPUTIME = 2,
    THREAD_CPUTIME = 3
}

export const GetClockWASI = async () => {
    const wasi = CreateWASI({ version: 'preview1' });
    const wasm = await WebAssembly.compile(readFileSync('./src/clock/clock.wasm'));
    const instance = await WebAssembly.instantiate(wasm, { wasi_snapshot_preview1: wasi.wasiImport });

    wasi.initialize(instance);

    return instance.exports as Exported;
};

export const Clock = async () => {
    const wasm = await GetClockWASI();
    const logTime = (id: ClockID, precision: number, msg: string) => {
        console.log('clock_id:', id, ' res:', wasm.getTimeNanos(id, BigInt(precision)), ' ||', msg);
    };
    const logRes = (id: ClockID, msg: string) => {
        console.log('clock_id:', id, ' res:', wasm.getTimeResolution(id), ' ||', msg);
    };
    logRes(ClockID.REALTIME, 'nanos from 1970-01-01 00:00:00.000000000');
    logRes(ClockID.MONOTONIC, 'nanos from system start');
    logRes(ClockID.PROCESS_CPUTIME, 'nanos spent for process');
    logRes(ClockID.THREAD_CPUTIME, 'nanos spent for thread');
    logTime(ClockID.REALTIME, 1, 'nanos from 1970-01-01 00:00:00.000000000');
    logTime(ClockID.MONOTONIC, 1, 'nanos from system start');
    logTime(ClockID.PROCESS_CPUTIME, 1, 'nanos spent for process');
    logTime(ClockID.THREAD_CPUTIME, 1, 'nanos spent for thread');

    wasm.gen1();
    memdump(wasm.memory, 0, 128, true);
    wasm.gen1();
    memdump(wasm.memory, 0, 128, true);
    // const buf = new Uint8Array(wasm.memory.buffer, 64, 99);
    // const gen = () => {
    //     wasm.gen1();
    //     return new TextDecoder('utf8').decode(buf);
    // };
    // const gen2 = () => {
    //     wasm.gen1();
    //     // const buf = new Uint8Array(wasm.memory.buffer.slice(64, 100), 64, 36);
    //     return Buffer.from(wasm.memory.buffer, 64, 36).toString('utf-8');
    // };
    // const buf3 = Buffer.from(wasm.memory.buffer, 64, 36);
    // const gen3 = () => {
    //     wasm.gen1();
    //     return buf3.toString('utf-8');
    // };

    // gen();
    // gen2();
    // gen3();
    // const st = performance.now();
    // for (let i = 0; i < 10000000; i++) gen();
    // console.log((10000000 * 1000) / (performance.now() - st), 'ops/s');
    // const st2 = performance.now();
    // for (let i = 0; i < 10000000; i++) gen2();
    // console.log((10000000 * 1000) / (performance.now() - st2), 'ops/s');
    // const st3 = performance.now();
    // for (let i = 0; i < 10000000; i++) gen3();
    // console.log((10000000 * 1000) / (performance.now() - st3), 'ops/s');
    // const st4 = performance.now();
    // for (let i = 0; i < 10000000; i++) v1();
    // console.log((10000000 * 1000) / (performance.now() - st4), 'ops/s');

    // 4755157.761396206 ops/s
    // 5221295.572153555 ops/s
    // 8843658.262054684 ops/s
    // 2673604.7043832783 ops/s
    // console.log(gen());
    // console.log(gen2());
    // console.log(gen3());
    // console.log(v1());
};
