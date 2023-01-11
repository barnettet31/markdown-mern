import connectDb from './database';

async function init(){
    await connectDb();
};
export default init;