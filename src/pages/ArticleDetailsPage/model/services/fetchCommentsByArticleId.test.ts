import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

describe('fetchCommentsByArticleId', () => {
    it('should fetchCommentsByArticleId action be fulfilled and return article data', async () => {
        const commentsData = {
            1: {
                id: '1',
                text: 'some comment',
                articleId: '1',
                userId: '1',
            },
            2: {
                id: '2',
                text: 'some comment 2',
                articleId: '1',
                userId: '2',
            },
            3: {
                id: '3',
                text: 'some comment 3',
                articleId: '1',
                userId: '1',
            },
        };

        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: commentsData }));
        const result = await thunk.callThunkAction('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toBe(commentsData);
    });

    it('should fetchCommentsByArticleId action be rejected and return error text on bad response status', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunkAction('1');

        expect(result.meta.requestStatus).toBe('rejected');
    });
});
