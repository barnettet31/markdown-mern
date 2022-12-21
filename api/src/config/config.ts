
import * as dotenv from 'dotenv';
dotenv.config()
export default {
    DATABASE_URL : process.env.DATABASE ?? '',
    DATABASE_PASSWORD:process.env.DATABASE_PASSWORD ?? ''

}