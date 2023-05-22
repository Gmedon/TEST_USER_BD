import {User, TodoInstance} from '../models/User'

import * as UserService from './UserService';

describe('Testing user service', () => {


    let email = 'teste@teste.com';
    let password = 'testepass';

    beforeAll(async () => {
        await User.sync({force: true});
    });

    it('should create a new user', async () => {
        const newUser = await UserService.createUser(email, password) as TodoInstance
        expect(newUser).not.toBeInstanceOf(Error)
        expect(newUser).toHaveProperty('id');
        expect(newUser.email).toBe(email);
    });

    it('replace email', async () => {
        const newUser = await UserService.createUser(email, password)
        expect(newUser).toBeInstanceOf(Error);
    });

    it('find email', async () => {
        const user = await UserService.findByEmail(email) as TodoInstance
        expect(user.email).toBe(email);
    });

    it('Math password', async () => {
        const user = await UserService.findByEmail(email) as TodoInstance
        const math = UserService.matchPassword(password, user.password)
        expect(math).toBeTruthy();
    });

    it('not Math password', async () => {
        const user = await UserService.findByEmail(email) as TodoInstance
        const math = UserService.matchPassword('notpassword', user.password)
        expect(math).toBeFalsy();
    });

    it('Get list Users', async () => {
        const users = await UserService.all();
        expect(users.length).toBeGreaterThanOrEqual(1);
        for(let i in users) {
            expect(users[i]).toBeInstanceOf(User);
        }
    });


});