import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { updateProfileData } from '../updateProfileData';
import { ValidateProfileError } from '../../types/profile';

const profileData = {
    username: 'admin',
    age: 24,
    country: Country.Belarus,
    firstname: 'Слава',
    lastname: 'Левкович',
    city: 'Minsk',
    currency: Currency.BYN,
};

describe('updateProfileData', () => {
    it('should updateProfileData action be fulfilled and return user data', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: profileData,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data: profileData }));
        const result = await thunk.callThunkAction();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toBe(profileData);
    });

    it('should updateProfileData action be rejected and return error text on bad response status', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: profileData,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunkAction();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });

    it('should updateProfileData action be rejected and return validate error text when provided form data is incorrect', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...profileData, firstname: '' },
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunkAction();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });
});
