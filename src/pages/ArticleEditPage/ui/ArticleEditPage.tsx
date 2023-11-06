import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page';

import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui';
import { TextTheme } from 'shared/ui/Text';
import styles from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage: FC<ArticleEditPageProps> = ({ className }: ArticleEditPageProps) => {
    const { t } = useTranslation();

    const { id } = useParams<{id: string}>();

    return (
        <Page className={classNames(styles.articleEditPage, {
            mods: {},
            additional: [className],
        })}
        >
            <Text
                theme={TextTheme.ERROR}
                title={id ? `TODO Edit article with ID = ${id}` : 'TODO Create article page'}
            />
        </Page>
    );
};

export default ArticleEditPage;