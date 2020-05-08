export default class UserView {
    constructor() {
        this.loginForm = document.getElementById('frmLogin');
        this.loginUsername = 'txtUsername';
        this.loginUserpassword = 'txtPassword';
        this.loginInfo = 'mdlLogin-info';
        this.loginButton = 'btnLogin';
        this.registerButton = 'btnRegister';
        this.logoutButton = 'btnLogout';
    }

    bindLoginForm(handler) {
        this.loginForm.addEventListener('submit', event => {    
            event.preventDefault();
            let tempUsername = document.getElementById(this.loginUsername).value;
            let tempPassword = document.getElementById(this.loginUserpassword).value;

            let login = handler(tempUsername, tempPassword);

            login ? this.displayLoginSuccess() : this.displayLoginError();

        });
    }

    displayLogin(login) {
        let loginButton = document.getElementById(this.loginButton);
        let registerButton = document.getElementById(this.registerButton);
        let logoutButton = document.getElementById(this.logoutButton);
        
        if (login) {
            loginButton.setAttribute('Disabled', '');
            registerButton.setAttribute('Disabled', '');
            logoutButton.removeAttribute('Disabled', '');
        } else {
            loginButton.removeAttribute('Disabled', '');
            registerButton.removeAttribute('Disabled', '');
            logoutButton.setAttribute('Disabled', '');
        }
    }

    displayLoginSuccess() {
        document.getElementById(this.loginInfo).innerHTML =
            `<div class="alert alert-success" role="alert">Login successfull!</div>`;
    }

    displayLoginError() {
        document.getElementById(this.loginInfo).innerHTML =
            `<div class="alert alert-danger" role="alert">Incorrect credentials!</div>`;
    }
}