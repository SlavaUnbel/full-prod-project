import { FC, memo } from 'react';

import { ArticleView } from '../../model/consts/article';

import ListIcon from '@/shared/assets/icons/list.svg';
import TiledIcon from '@/shared/assets/icons/tiled.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, HStack, Icon } from '@/shared/ui';
import { ButtonTheme } from '@/shared/ui/Button';

import styles from './ArticleViewToggle.module.scss';

interface ArticleViewToggleProps {
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

export const ArticleViewToggle: FC<ArticleViewToggleProps> = memo(
    ({ view: viewFromProps, onViewClick }: ArticleViewToggleProps) => {
        const onClick = (newView: ArticleView) => () => {
            if (newView !== viewFromProps) {
                onViewClick?.(newView);
            }
        };

        return (
            <HStack gap="gap-2xs">
                {viewTypes.map(({ view, icon }) => (
                    <Button
                        key={view}
                        theme={ButtonTheme.CLEAR}
                        onClick={onClick(view)}
                    >
                        <Icon
                            Svg={icon}
                            className={classNames('', {
                                mods: {
                                    [styles.notSelected]:
                                        view !== viewFromProps,
                                },
                            })}
                        />
                    </Button>
                ))}
            </HStack>
        );
    },
);
