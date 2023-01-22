import config from "../config/config";
import { ConnectOptions, connect } from "mongoose";


const connectDB = async () => {
try{
    const mongoURI:string = config.USER_DATABASE_URL.replace( "<PASSWORD>",config.DATABASE_PASSWORD);
    await connect(mongoURI);
    console.log("MongoDB Connected...");
}catch(e){
    if(e instanceof Error){
    console.log('the error is here in the user database connect.')
    console.error(e.message);
    process.exit(1);
}
}

}

export default connectDB;