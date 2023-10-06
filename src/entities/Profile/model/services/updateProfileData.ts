import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import i18n from 'shared/config/i18n/i18n';

import { profileFormSelector } from '../selectors/profileSelector';
import { Profile } from '../types/profile';

export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<string>
>(
    'profile/updateProfileData',
    async (_, { extra, rejectWithValue, getState }) => {
        const { api } = extra;

        const state = getState();
        const formData = profileFormSelector(state);

        try {
            const { data } = await api.put<Profile>('/profile', formData);

            return data;
        } catch (error) {
            console.log(error);

            return rejectWithValue(i18n.t('An error has occured on profile update'));
        }
    },
);
