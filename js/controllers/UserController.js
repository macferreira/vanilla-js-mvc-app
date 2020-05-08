export default class UserController {
    constructor(userModel, userView) {
        this.userModel = userModel;
        this.userView = userView;

        this.userView.bindLoginForm(this.loginUser);
        this.userView.bindLogoutAction(this.logoutUser);
        this.userModel.bindLoginChanged(this.onLoginChanged);
    }

    createUser = (userName, userPassword) => {
        let user = this.userModel.createUser(userName, userPassword);
        return user;
    }

    loginUser = (userName, userPassword) => {
        return this.userModel.login(userName, userPassword);
    }

    logoutUser = () => {
        return this.userModel.logout();
    }

    onLoginChanged = login => {
        this.userView.displayLogin(login);
    }

    getAllUsers() {
        return this.userModel.getAllUsers();
    }
}