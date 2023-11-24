import { LoginSchema } from '../types/login';

import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
    it('should set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };
        const result = loginReducer(
            state as LoginSchema,
            loginActions.setUsername('123123'),
        );

        expect(result).toEqual({ username: '123123' });
    });

    it('should set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };
        const result = loginReducer(
            state as LoginSchema,
            loginActions.setPassword('123123'),
        );

        expect(result).toEqual({ password: '123123' });
    });

    it('should reset state', () => {
        const state: LoginSchema = {
            username: '123',
            password: '123',
            isLoading: true,
        };
        const result = loginReducer(state, loginActions.resetState());

        expect(result).toEqual({
            username: '',
            password: '',
            isLoading: false,
        });
    });
});
