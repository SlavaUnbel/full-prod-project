import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Button } from '../../Button';
import { HStack } from '../../Stack';
import styles from './ListBox.module.scss';
import { DropdownDirection } from '../../../types';

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

const mapDirectionClass: Record<DropdownDirection, string> = {
    'bottom left': styles.optionsBottomLeft,
    'bottom right': styles.optionsBottomRight,
    'top left': styles.optionsTopLeft,
    'top right': styles.optionsTopRight,
};

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
            className={classNames(styles.listBox, {
                mods: {},
                additional: [className],
            })}
        >
            {label && (
                <span className={classNames('', {
                    mods: {
                        [styles.disabled]: readonly,
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
                            [styles.disabled]: readonly,
                        },
                    })}
                >
                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(styles.options, {
                    mods: {},
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
                                                [styles.active]: active,
                                                [styles.disabled]: item.disabled,
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
