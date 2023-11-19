import { FC } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

import styles from './ArticleCreatePage.module.scss';

interface ArticleCreatePageProps {
    className?: string;
}

const ArticleCreatePage: FC<ArticleCreatePageProps> = ({ className }: ArticleCreatePageProps) => (
    <Page
        className={classNames(styles.articleCreatePage, { additional: [className] })}
    // eslint-disable-next-line i18next/no-literal-string
    >
        TODO
    </Page>
);

export default ArticleCreatePage;
