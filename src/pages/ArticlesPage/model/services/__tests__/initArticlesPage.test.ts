import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchArticlesList } from '../fetchArticlesList';
import { initArticlesPage } from '../initArticlesPage';

jest.mock('../fetchArticlesList');

describe('initArticlesPage', () => {
    // TODO: разобраться, почему не вызывается fetchArticlesList thunk
    it.skip('should successfully call fetchAritclesList thunk action', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 1,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
                _inited: false,
            },
        });

        await thunk.callThunkAction({} as URLSearchParams);

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).toHaveBeenCalled();
    });

    it('should fetchAritclesList thunk action not be called when _inited flag is truthy', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 1,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
                _inited: true,
            },
        });

        await thunk.callThunkAction({} as URLSearchParams);

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
});
