import { UserSchema } from '../types/user';

import { userActions, userReducer } from './userSlice';

import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';

const data = {
    id: '1',
    username: 'admin',
};

describe('userSlice', () => {
    it('should set auth data', () => {
        const state: DeepPartial<UserSchema> = {};
        const result = userReducer(state as UserSchema, userActions.setAuthData(data));

        expect(result).toEqual({ authData: data });
    });

    it('should init auth data', () => {
        const state: DeepPartial<UserSchema> = { _inited: false };
        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));
        const result = userReducer(state as UserSchema, userActions.initAuthData());

        const user = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';

        expect(result).toEqual({ authData: JSON.parse(user), _inited: true });
    });

    it('should logout', () => {
        const state: DeepPartial<UserSchema> = { authData: data };
        const result = userReducer(state as UserSchema, userActions.logout());
        localStorage.removeItem(USER_LOCALSTORAGE_KEY);

        const user = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';

        expect(result).toEqual({ authData: undefined });
        expect(user).toBe('');
    });
});
