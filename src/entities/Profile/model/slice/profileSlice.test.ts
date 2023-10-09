import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

import { fetchProfileData } from '../services/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData';
import { ProfileSchema } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';

const data = {
    username: 'admin',
    age: 24,
    country: Country.Belarus,
    firstname: 'Слава',
    lastname: 'Левкович',
    city: 'Minsk',
    currency: Currency.BYN,
};

describe('profileSlice', () => {
    it('should update profile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '' } };
        const result = profileReducer(state as ProfileSchema, profileActions.updateProfile({
            username: 'newUsername',
        }));

        expect(result).toEqual({ form: { username: 'newUsername' } });
    });

    it('should cancel edit profile', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
        const result = profileReducer(state as ProfileSchema, profileActions.cancelEditProfile());

        expect(result).toEqual({
            data, form: data, readonly: true,
        });
    });

    it('should set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        const result = profileReducer(state as ProfileSchema, profileActions.setReadonly(true));

        expect(result).toBeTruthy();
    });

    it('should set state on fetchProfileData pending', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: false, error: '' };
        const result = profileReducer(state as ProfileSchema, fetchProfileData.pending);

        expect(result).toEqual({ isLoading: true });
    });

    it('should set state on fetchProfileData fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: true };
        const result = profileReducer(state as ProfileSchema, fetchProfileData.fulfilled(data, ''));

        expect(result).toEqual({ isLoading: false, data, form: data });
    });

    it('should set state on updateProfileData pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            error: '',
            validateErrors: [],
        };
        const result = profileReducer(state as ProfileSchema, updateProfileData.pending);

        expect(result).toEqual({ isLoading: true });
    });

    it('should set state on updateProfileData fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            readonly: false,
            validateErrors: [],
        };
        const result = profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ''));

        expect(result).toEqual({
            isLoading: false, data, form: data, readonly: true,
        });
    });
});
