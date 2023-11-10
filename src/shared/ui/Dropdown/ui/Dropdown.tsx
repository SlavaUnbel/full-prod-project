import { Menu } from '@headlessui/react';
import { FC, Fragment, ReactNode } from 'react';

import { classNames } from '../../../lib/classNames/classNames';
import styles from './Dropdown.module.scss';
import { AppLink } from '../../AppLink';
import { DropdownDirection } from '../../../types';

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    href?: string;
    onClick?: () => void;
}

interface DropdownProps {
    items: DropdownItem[];
    trigger: ReactNode;
    direction?: DropdownDirection;
    className?: string;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': styles.optionsBottomLeft,
    'bottom right': styles.optionsBottomRight,
    'top right': styles.optionsTopRight,
    'top left': styles.optionsTopLeft,
};

export const Dropdown: FC<DropdownProps> = ({
    items,
    trigger,
    direction = 'bottom right',
    className,
}: DropdownProps) => {
    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu as="div" className={classNames(styles.dropdown, { mods: {}, additional: [className] })}>
            <Menu.Button className={styles.btn}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(styles.menu, { mods: {}, additional: menuClasses })}>
                {items.map((item) => {
                    const content = ({ active }: {active: boolean}) => (
                        <button
                            type="button"
                            disabled={item.disabled}
                            onClick={item.onClick}
                            className={classNames(styles.item, {
                                mods: { [styles.active]: active },
                            })}
                        >
                            {item.content}
                        </button>
                    );

                    if (item.href) {
                        return (
                            <Menu.Item as={AppLink} to={item.href} disabled={item.disabled}>
                                {content}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}

            </Menu.Items>
        </Menu>
    );
};
