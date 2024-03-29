import { createAsyncThunk } from '@reduxjs/toolkit';

import { ValidateProfileError } from '../consts/profile';
import { profileFormSelector } from '../selectors/profileSelector';
import { Profile } from '../types/profile';

import { validateProfileData } from './validateProfileData';

import { ThunkConfig } from '@/app/providers/StoreProvider';

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

        if (errors.length) {
            return rejectWithValue(errors);
        }

        try {
            const { data } = await api.put<Profile>(
                `/profile/${formData?.id}`,
                formData,
            );

            if (!data) {
                throw new Error('No response received');
            }

            return data;
        } catch (error) {
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    },
);
