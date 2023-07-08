import { Evaluate } from './eval';

const run = async () => {
    // await Evaluate('args');
    await Evaluate('clock');
    // await Evaluate('env');
    // await Evaluate('fd');
    // await Evaluate('random');
};

run().catch(console.error);
