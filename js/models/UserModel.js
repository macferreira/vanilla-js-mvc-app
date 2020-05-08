export default class UserModel {
    constructor() {
        this.users = this.getAllUsers();
    }

    createUser(username, password) {
        this.users.push({ username: username, password: password })
        this._persistUsers();
        return ({ username: username, password: password });
    }

    getAllUsers() {
        if (localStorage.users) {
            this.users = JSON.parse(localStorage.users);
        } else {
            this.users = [];
        }
        return this.users;
    }

    _persistUsers() {
        localStorage.setItem('users', JSON.stringify(this.users));
    }

    bindLoginChanged(callback) {
        this.onLoginChange = callback;
    }

    login(username, userpassword) {
        let userLogin = false
        for (const user of this.users) {
            if (user.username === username && user.password === userpassword) {
                sessionStorage.setItem("loggedUser", username)
                userLogin = true
                this.onLoginChange(userLogin);
            }
        }
        return userLogin
    }

    logout() {
        sessionStorage.removeItem('loggedUser');
        this.onLoginChange(false);
    }
}