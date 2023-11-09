import { ChangeEvent, useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

import { HStack } from '../../Stack';
import { SelectOption } from '../lib/select';
import styles from './Select.module.scss';

interface SelectProps<T extends string> {
    options?: SelectOption<T>[];
    className?: string;
    label?: string;
    value?: T;
    readonly?: boolean;
    onChange?: (value: T) => void;
}

const Select = <T extends string>({
    options, className, label, value, readonly, onChange,
}: SelectProps<T>) => {
    const mods: Mods = {
        [styles.readonly]: readonly,
    };

    const optionsList = useMemo(
        () => options?.map((opt) => (
            <option key={opt.value} value={opt.value} className={styles.option}>
                {opt.content}
            </option>
        )),
        [options],
    );

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };

    return (
        <HStack className={classNames('', { mods: {}, additional: [className] })}>
            {label && (
                <span className={classNames(styles.label, {
                    mods,
                })}
                >
                    {`${label}>`}
                </span>
            ) }

            <select
                className={styles.select}
                value={value}
                disabled={readonly}
                onChange={onChangeHandler}
            >
                { optionsList }
            </select>
        </HStack>
    );
};

export default Select;
