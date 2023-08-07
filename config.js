const PORT = process.env.PORT || 1310
const DB_USER = process.env.DB_USER || 'shopman'
const DB_HOST = process.env.DB_HOST || 'localhost'
const DB_PASSWORD = process.env.DB_PASSWORD || 'shoppass'
const DB_NAME = process.env.DB_NAME || 'shopweb'
exports = module.exports = {
    DB_HOST,DB_NAME,DB_PASSWORD,DB_USER,PORT
}