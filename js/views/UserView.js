export default class UserView {
    constructor() {
        this.loginForm = document.getElementById('frmLogin');
        this.loginUsername = 'txtUsername';
        this.loginUserpassword = 'txtPassword';
        this.loginInfo = 'mdlLogin-info';
        this.loginButton = document.getElementById('btnLogin');
        this.registerButton = document.getElementById('btnRegister');
        this.logoutButton = document.getElementById('btnLogout');
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

    bindLogoutAction(handler) {
        this.logoutButton.addEventListener('click', event =>{
            handler();
        });
    }

    displayLogin(login) {
        
        if (login) {
            this.loginButton.setAttribute('Disabled', '');
            this.registerButton.setAttribute('Disabled', '');
            this.logoutButton.removeAttribute('Disabled', '');
        } else {
            this.loginButton.removeAttribute('Disabled', '');
            this.registerButton.removeAttribute('Disabled', '');
            this.logoutButton.setAttribute('Disabled', '');
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