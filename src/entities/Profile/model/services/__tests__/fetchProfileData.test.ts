import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchProfileData } from '../fetchProfileData';

describe('fetchProfileData', () => {
    it('should fetchProfileData action be fulfilled and return user data', async () => {
        const profileData = {
            id: '1',
            username: 'admin',
            age: 24,
            country: Country.Belarus,
            firstname: 'Слава',
            lastname: 'Левкович',
            city: 'Minsk',
            currency: Currency.BYN,
        };

        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: profileData }));
        const result = await thunk.callThunkAction('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toBe(profileData);
    });

    it('should fetchProfileData action be rejected and return error text on bad response status', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunkAction('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
