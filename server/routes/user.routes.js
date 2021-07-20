const LoginRegController = require('../controllers/loginReg.controller');
const UserController = require('../controllers/user.controller');
const {authenticate} = require("../config/jwt.config");

module.exports = (app) => {
    app.post("/api/register/", LoginRegController.register);
    app.post("/api/login/", LoginRegController.login);
    app.get("/api/user/:id", authenticate, UserController.getUser);
    app.post("/api/user/:id/update", authenticate, UserController.updateUser)
    app.get("/api/logout/", authenticate, LoginRegController.logout);
    app.delete('/api/user/:id/delete', authenticate, UserController.deleteUser);
}