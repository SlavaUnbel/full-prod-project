import { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { HStack } from '../../Stack';
import { Card, CardTheme } from '../../Card';
import { TabItem } from '../lib/tabs';
import styles from './Tabs.module.scss';

interface TabsProps<T extends string> {
    tabs: TabItem<T>[];
    value: T;
    className?: string;
    onTabClick: (tab: TabItem<T>) => void;
}

export const Tabs = <T extends string>({
    tabs,
    value,
    className,
    onTabClick,
}: TabsProps<T>) => {
    const handleClick = useCallback((tab: TabItem<T>) => () => {
        onTabClick(tab);
    }, [onTabClick]);

    return (
        <HStack
            gap="gap-xs"
            className={classNames('', { mods: {}, additional: [className] })}
        >
            {tabs.map((tab) => (
                <Card
                    className={styles.tab}
                    key={tab.value}
                    theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                    onClick={handleClick(tab)}
                    role="button"
                >
                    {tab.content}
                </Card>
            ))}
        </HStack>
    );
};
