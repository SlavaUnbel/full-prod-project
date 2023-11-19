import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { profileApi } from '../../api/profileApi';
import { updateProfileData } from '../services/updateProfileData';
import { Profile, ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
    isLoading: false,
    readonly: true,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload,
            };
        },
        cancelEditProfile: (state) => {
            state.readonly = true;
            state.form = state.data;
            state.validateErrors = undefined;
        },
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateProfileData.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
                state.validateErrors = undefined;
            })
            .addCase(updateProfileData.fulfilled, (
                state,
                action: PayloadAction<Profile>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
                state.readonly = true;
                state.validateErrors = undefined;
            })
            .addCase(updateProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.validateErrors = action.payload;
            });

        builder
            .addMatcher(profileApi.endpoints.getProfileData.matchPending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addMatcher(profileApi.endpoints.getProfileData.matchFulfilled, (
                state,
                action: PayloadAction<Profile>,
            ) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
            })
            .addMatcher(profileApi.endpoints.getProfileData.matchRejected, (
                state,
                action,
            ) => {
                state.isLoading = false;
                state.error = JSON.stringify(action.payload?.data);
            });
    },
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
