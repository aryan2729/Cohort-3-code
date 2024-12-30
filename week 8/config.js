const JWT_SECRET_USER = process.env.JWT_SECRET_USER;            // should different for user and admin 
const JWT_SECRET_ADMIN = process.env.JWT_SECRET_ADMIN;          // should be different then user cuz if same then it's problem



module.exports = {
    JWT_SECRET_ADMIN : JWT_SECRET_ADMIN,
    JWT_SECRET_USER : JWT_SECRET_USER
}