import { Notification } from '../model/types/notification';

import { rtkApi } from '@/shared/api/rtkApi';

export const notificationApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        getNotificationsData: builder.query<Notification[], null>({
            query: () => ({
                url: '/notifications',
            }),
        }),
    }),
});

export const { useGetNotificationsDataQuery } = notificationApi;
