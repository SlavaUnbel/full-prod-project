import { createSelector } from '@reduxjs/toolkit';
import { articleDetailsDataSelector } from 'entities/Article';
import { userAuthDataSelector } from 'entities/User';

export const articleDetailsCanEditArticleSelector = createSelector(
    userAuthDataSelector,
    articleDetailsDataSelector,
    (user, article) => {
        if (!article || !user) {
            return false;
        }

        return article.user.id === user.id;
    },
);
