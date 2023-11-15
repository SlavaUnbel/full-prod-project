import { ApplicationState } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

import { profileDataSelector } from '../profileSelector';

const data = {
    username: 'admin',
    age: 24,
    country: Country.Belarus,
    firstname: 'Слава',
    lastname: 'Левкович',
    city: 'Minsk',
    currency: Currency.BYN,
};

describe('profileDataSelector', () => {
    it('should return data', () => {
        const state: DeepPartial<ApplicationState> = {
            profile: {
                data,
            },
        };

        const result = profileDataSelector(state as ApplicationState);

        expect(result).toEqual(data);
    });

    it('should return an empty object if profile state is empty', () => {
        const state: DeepPartial<ApplicationState> = {
            profile: {},
        };

        const result = profileDataSelector(state as ApplicationState);

        expect(result).toEqual({});
    });
});
