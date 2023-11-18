import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';

import { ValidateProfileError } from '../../consts/profile';
import { validateProfileData } from '../validateProfileData';

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

describe('validateProfileData', () => {
    it('should validateProfileData function return an empty errors array when the provided data is correct', async () => {
        const result = validateProfileData(profileData);

        expect(result).toEqual([]);
    });

    it('should validateProfileData function return an array with no data error when there is no profile data provided', async () => {
        const result = validateProfileData(undefined);

        expect(result).toEqual([ValidateProfileError.NO_DATA]);
    });

    it('should validateProfileData function return an array with incorrect profile data error when the provided data goes without firstname', async () => {
        const result = validateProfileData({ ...profileData, firstname: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    it('should validateProfileData function return an array with incorrect profile data error when the provided data goes without lastname', async () => {
        const result = validateProfileData({ ...profileData, lastname: '' });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    it('should validateProfileData function return an array with incorrect age error when the provided data goes without age', async () => {
        const result = validateProfileData({ ...profileData, age: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    it('should validateProfileData function return an array with incorrect age error when the provided data goes with non-integer age', async () => {
        const result = validateProfileData({ ...profileData, age: '24' } as any);

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    it('should validateProfileData function return an array with incorrect country error when the provided data goes without country', async () => {
        const result = validateProfileData({ ...profileData, country: undefined });

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    it('should validateProfileData function return an array with all possible incorrect errors', async () => {
        const result = validateProfileData({
            ...profileData,
            firstname: '',
            lastname: '',
            age: undefined,
            country: undefined,
        });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
