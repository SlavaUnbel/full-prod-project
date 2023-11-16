import { ApplicationState } from 'app/providers/StoreProvider';

import { ValidateProfileError } from '../../consts/profile';
import { profileValidateErrorsSelector } from '../profileSelector';

const validateErrors = [
    ValidateProfileError.INCORRECT_USER_DATA,
    ValidateProfileError.INCORRECT_AGE,
];

describe('profileValidateErrorsSelector', () => {
    it('should return validate errors array if the profile data has not been updated due to incorrect input', () => {
        const state: DeepPartial<ApplicationState> = {
            profile: {
                validateErrors,
            },
        };

        const result = profileValidateErrorsSelector(state as ApplicationState);

        expect(result).toBe(validateErrors);
    });

    it('should return undefined if validateErrors field is not present in the reducer', () => {
        const state: DeepPartial<ApplicationState> = {
            profile: {},
        };

        const result = profileValidateErrorsSelector(state as ApplicationState);

        expect(result).toBe(undefined);
    });
});
