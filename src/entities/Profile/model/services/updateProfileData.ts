import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import { profileFormSelector } from '../selectors/profileSelector';
import { Profile, ValidateProfileError } from '../types/profile';
import { validateProfileData } from './validateProfileData';

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileError[]>
>(
    'profile/updateProfileData',
    async (_, { extra, rejectWithValue, getState }) => {
        const { api } = extra;

        const state = getState();
        const formData = profileFormSelector(state);
        const errors = validateProfileData(formData);

        console.log(errors);

        if (errors.length) {
            return rejectWithValue(errors);
        }

        try {
            const { data } = await api.put<Profile>('/profile', formData);

            if (!data) {
                throw new Error('No response received');
            }

            return data;
        } catch (error) {
            console.log(error);

            // return rejectWithValue(i18n.t('An error has occured on profile update'));
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);
