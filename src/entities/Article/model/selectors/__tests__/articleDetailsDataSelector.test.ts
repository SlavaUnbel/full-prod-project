import { ApplicationState } from 'app/providers/StoreProvider';

import { Article, ArticleBlockType, ArticleType } from '../../types/article';
import { articleDetailsDataSelector } from '../articleDetailsSelector';

const data: Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    user: {
        id: '1',
        username: 'admin',
    },
    type: [ArticleType.IT],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
            ],
        },
    ],
};

describe('articleDetailsDataSelector', () => {
    it('should return data', () => {
        const state: DeepPartial<ApplicationState> = {
            articleDetails: {
                data,
            },
        };

        const result = articleDetailsDataSelector(state as ApplicationState);

        expect(result).toBe(data);
    });

    it('should return undefined if article details state is empty', () => {
        const state: DeepPartial<ApplicationState> = {
            articleDetails: {},
        };

        const result = articleDetailsDataSelector(state as ApplicationState);

        expect(result).toBe(undefined);
    });
});
