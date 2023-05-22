import dotenv from 'dotenv'

dotenv.config();

let db = {
    db: process.env.MYSQL_DB as string,
    user: process.env.MYSQL_USER as string,
    port: process.env.MYSQL_PORT as string,
    password: process.env.MYSQL_PASSWORD as string
}

if(process.env.NODE_ENV === 'test') {
    db = {
        db: process.env.MYSQL_DB_TEST as string,
        user: process.env.MYSQL_USER as string,
        port: process.env.MYSQL_PORT as string,
        password: process.env.MYSQL_PASSWORD as string
    }
}

export default db;