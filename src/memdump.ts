export const memdump = (mem: WebAssembly.Memory, start: number, len: number) => {
    let view = new Uint8Array(mem.buffer);
    for (let i = 0; i < len; i++) {
        let index = start + i;
        process.stdout.write(`${view[index]!.toString(16).toUpperCase().padStart(2, '0')} `);
        if ((index + 1) % 16 === 0) {
            console.log();
        }
    }
    console.log();
};
