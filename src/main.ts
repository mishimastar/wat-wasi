import { Evaluate } from './eval';

const run = async () => {
    await Evaluate('clock');
    await Evaluate('random');
};

run().catch(console.error);
