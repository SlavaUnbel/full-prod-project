import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

import { Text } from '@/shared/ui';
import { TextTheme } from '@/shared/ui/Text';
import styles from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage: FC<ArticleEditPageProps> = ({ className }: ArticleEditPageProps) => {
    const { id } = useParams<{id: string}>();

    return (
        <Page className={classNames(styles.articleEditPage, { additional: [className] })}>
            <Text
                theme={TextTheme.ERROR}
                title={id ? `TODO Edit article with ID = ${id}` : 'TODO Create article page'}
            />
        </Page>
    );
};

export default ArticleEditPage;
