import dotenv from 'dotenv'
dotenv.config()

const config = {
    db_uri:process.env.DBURI
}
export default config