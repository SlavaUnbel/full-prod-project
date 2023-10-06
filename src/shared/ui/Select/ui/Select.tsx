import {
    ChangeEvent, FC, memo, useMemo,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

import { SelectOption } from '../lib/select';
import styles from './Select.module.scss';

interface SelectProps {
    options?: SelectOption[];
    className?: string;
    label?: string;
    value?: string;
    readonly?: boolean;
    onChange?: (value: string) => void;
}

const Select: FC<SelectProps> = memo(({
    options, className, label, value, readonly, onChange,
}: SelectProps) => {
    const mods: Mods = {
        [styles.readonly]: readonly,
    };

    const optionsList = useMemo(
        () => options?.map((opt) => (
            <option key={opt.value} className={styles.option}>
                {opt.content}
            </option>
        )),
        [options],
    );

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(styles.wrapper, {
            additional: [className],
        })}
        >
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
        </div>
    );
});

export default Select;
