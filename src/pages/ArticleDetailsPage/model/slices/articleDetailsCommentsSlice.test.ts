import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId';
import { ArticleDetailsCommentsSchema } from '../types/articleDetails';

import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';

const commentsData = [
    {
        id: '1',
        text: 'some comment',
        user: { id: '1', username: 'admin' },
    },
    {
        id: '2',
        text: 'some comment 2',
        user: { id: '2', username: 'user' },
    },
    {
        id: '3',
        text: 'some comment 3',
        user: { id: '1', username: 'admin' },
    },
];

describe('articleDetailsCommentsSlice', () => {
    it('should set state on fetchCommentsByArticleId pending', () => {
        const state: DeepPartial<ArticleDetailsCommentsSchema> = {
            isLoading: false,
            error: '',
        };
        const result = articleDetailsCommentsReducer(
            state as ArticleDetailsCommentsSchema,
            fetchCommentsByArticleId.pending,
        );

        expect(result).toEqual({ isLoading: true });
    });

    it('should set state on fetchCommentsByArticleId fulfilled', () => {
        const state: DeepPartial<ArticleDetailsCommentsSchema> = {
            isLoading: true,
            ids: [],
            entities: {},
        };
        const result = articleDetailsCommentsReducer(
            state as ArticleDetailsCommentsSchema,
            fetchCommentsByArticleId.fulfilled(commentsData, '', '1'),
        );

        expect(result).toEqual({
            isLoading: false,
            ids: ['1', '2', '3'],
            entities: {
                1: {
                    id: '1',
                    text: 'some comment',
                    user: { id: '1', username: 'admin' },
                },
                2: {
                    id: '2',
                    text: 'some comment 2',
                    user: { id: '2', username: 'user' },
                },
                3: {
                    id: '3',
                    text: 'some comment 3',
                    user: { id: '1', username: 'admin' },
                },
            },
        });
    });
});
