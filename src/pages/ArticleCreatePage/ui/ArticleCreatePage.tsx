import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import styles from './ArticleCreatePage.module.scss';

interface ArticleCreatePageProps {
    className?: string;
}

const ArticleCreatePage: FC<ArticleCreatePageProps> = ({ className }: ArticleCreatePageProps) => (
    <div className={classNames(styles.articleCreatePage, {
        mods: {},
        additional: [className],
    })}
    />
);

export default ArticleCreatePage;
