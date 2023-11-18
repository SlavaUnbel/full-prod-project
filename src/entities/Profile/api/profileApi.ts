import { rtkApi } from '@/shared/api/rtkApi';

import { Profile } from '../model/types/profile';

export const profileApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        getProfileData: builder.query<Profile, { profileId?: string }>({
            query: ({ profileId }) => ({
                url: `/profile/${profileId}`,
            }),
        }),
    }),
});

export const { useGetProfileDataQuery } = profileApi;
