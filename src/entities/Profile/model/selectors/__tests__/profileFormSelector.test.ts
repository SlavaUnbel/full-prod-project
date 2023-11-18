import { ApplicationState } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { profileFormSelector } from '../profileSelector';

const form = {
    username: 'admin',
    age: 24,
    country: Country.Belarus,
    firstname: 'Слава',
    lastname: 'Левкович',
    city: 'Minsk',
    currency: Currency.BYN,
};

describe('profileFormSelector', () => {
    it('should return form', () => {
        const state: DeepPartial<ApplicationState> = {
            profile: {
                form,
            },
        };

        const result = profileFormSelector(state as ApplicationState);

        expect(result).toBe(form);
    });

    it('should return undefined if profile state is empty', () => {
        const state: DeepPartial<ApplicationState> = {
            profile: {},
        };

        const result = profileFormSelector(state as ApplicationState);

        expect(result).toBe(undefined);
    });
});
