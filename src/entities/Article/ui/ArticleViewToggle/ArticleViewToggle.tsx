import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import ListIcon from 'shared/assets/icons/list.svg';
import TiledIcon from 'shared/assets/icons/tiled.svg';
import { Button, Icon } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button';
import { ArticleView } from '../../model/types/article';
import styles from './ArticleViewToggle.module.scss';

interface ArticleViewToggleProps {
    className?: string;
    view: ArticleView;
    onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TiledIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];

export const ArticleViewToggle: FC<ArticleViewToggleProps> = memo(({
    className,
    view: viewFromProps,
    onViewClick,
}: ArticleViewToggleProps) => {
    const { t } = useTranslation();

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(styles.articleViewToggle, {
            mods: {},
            additional: [className],
        })}
        >
            {viewTypes.map(({ view, icon }) => (
                <Button
                    key={view}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(view)}
                >
                    <Icon
                        Svg={icon}
                        className={classNames('', { mods: { [styles.notSelected]: view !== viewFromProps } })}
                    />
                </Button>
            ))}
        </div>
    );
});
