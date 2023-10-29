import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import i18n from 'shared/config/i18n/i18n';

import { Profile } from '../types/profile';

export const fetchProfileData = createAsyncThunk<
    Profile,
    string | undefined,
    ThunkConfig<string>
>(
    'profile/fetchProfileData',
    async (profileId, { extra, rejectWithValue }) => {
        const { api } = extra;

        if (!profileId) {
            return rejectWithValue('error');
        }

        try {
            const { data } = await api.get<Profile>(`/profile/${profileId}`);

            if (!data) {
                throw new Error('No response received');
            }

            return data;
        } catch (error) {
            return rejectWithValue(i18n.t('An error has occured on profile loading'));
        }
    },
);
