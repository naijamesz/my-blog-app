module.exports = {
    PORT: process.env.PORT || 3000,
    DB: {
        NAME: process.env.DB_NAME || 'blog',
        USER: process.env.DB_USER || 'root',
        PASSWORD: process.env.DB_PASSWORD || '',
        HOST: process.env.DB_HOST || 'localhost',
    },
}