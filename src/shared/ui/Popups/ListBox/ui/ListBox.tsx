import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { DropdownDirection } from '../../../../types';
import { Button } from '../../../Button';
import { HStack } from '../../../Stack';
import { mapDirectionClass } from '../../styles/stylesConsts';
import styles from './ListBox.module.scss';
import popupStyles from '../../styles/Popups.module.scss';

export interface ListBoxItem<T extends string> {
    value: T;
    content: ReactNode;
    disabled?: boolean;
}

export interface ListBoxProps<T extends string> {
    items?: ListBoxItem<T>[];
    className?: string;
    value?: T;
    defaultValue?: T;
    onChange: (value: T) => void;
    readonly?: boolean;
    direction?: DropdownDirection;
    label?: string;
}

export const ListBox = <T extends string>({
    className,
    items,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = 'bottom right',
    label,
}: ListBoxProps<T>) => {
    const optionsClasses = [mapDirectionClass[direction]];

    return (
        <HStack
            gap="gap-2xs"
            className={classNames(popupStyles.popup, { additional: [className] })}
        >
            {label && (
                <span className={classNames('', {
                    mods: {
                        [popupStyles.disabled]: readonly,
                    },
                })}
                >
                    {`${label}>`}
                </span>
            )}
            <HListBox
                disabled={readonly}
                as="div"
                value={value}
                onChange={onChange}
            >
                <HListBox.Button
                    disabled={readonly}
                    className={classNames(styles.trigger, {
                        mods: {
                            [popupStyles.disabled]: readonly,
                        },
                    })}
                >
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(styles.options, {
                    additional: optionsClasses,
                })}
                >
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        styles.item,
                                        {
                                            mods: {
                                                [popupStyles.active]: active,
                                                [popupStyles.disabled]: item.disabled,
                                            },
                                        },
                                    )}
                                >
                                    {selected && <span className={styles.itemSelected}>!!!</span>}
                                    <span>{item.content}</span>
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>
    );
};
