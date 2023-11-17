import { Menu } from '@headlessui/react';
import { FC, Fragment, ReactNode } from 'react';

import { classNames } from '../../../../lib/classNames/classNames';
import { DropdownDirection } from '../../../../types';
import AppLink from '../../../AppLink/ui/AppLink';
import { mapDirectionClass } from '../../styles/stylesConsts';
import styles from './Dropdown.module.scss';
import popupStyles from '../../styles/Popups.module.scss';

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

export const Dropdown: FC<DropdownProps> = ({
    items,
    trigger,
    direction = 'bottom right',
    className,
}: DropdownProps) => {
    const menuClasses = [mapDirectionClass[direction]];

    return (
        <Menu as="div" className={classNames(popupStyles.popup, { additional: [className] })}>
            <Menu.Button className={popupStyles.trigger}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(styles.menu, { additional: menuClasses })}>
                {items.map((item) => {
                    const content = ({ active }: {active: boolean}) => (
                        <button
                            type="button"
                            disabled={item.disabled}
                            onClick={item.onClick}
                            className={classNames(styles.item, {
                                mods: { [popupStyles.active]: active },
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
