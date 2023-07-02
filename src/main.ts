import { Evaluate } from './eval';

const run = async () => {
    await Evaluate('clock');
    await Evaluate('random');
    await Evaluate('args');
    await Evaluate('env');
};

run().catch(console.error);
