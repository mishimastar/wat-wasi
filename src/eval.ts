import { Args } from './args/args';
import { Clock } from './clock/clock';
import { Env } from './env/env';
import { FD } from './fd/fd';
import { Random } from './random/random';

export const functions = {
    clock: Clock,
    random: Random,
    args: Args,
    env: Env,
    fd: FD
} as const;

export const Evaluate = async (block: keyof typeof functions) => {
    console.log(`///-----  START block ${functions[block].name}  -----------------///`);
    await functions[block]();
    console.log(`///-----  END block ${functions[block].name}  -------------------///`);
};
