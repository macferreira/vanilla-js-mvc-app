import UserModel from './models/UserModel.js'
import UserView from './views/UserView.js'
import UserController from './controllers/UserController.js'

const userController = new UserController(new UserModel, new UserView);

// create some dummy users if there are none on local storage
if (userController.getAllUsers().length === 0) {
    const user1 = userController.createUser('John', '12345');
    const user2 = userController.createUser('Alice', '54321');
    const user3 = userController.createUser('Bob', '15243');
}
console.log(userController.getAllUsers().length);
