import {
    ChangeEvent, FC, InputHTMLAttributes, memo, MutableRefObject, useEffect, useRef, useState,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    autoFocus?: boolean;
    readonly?: boolean;
    onChange?: (value: string) => void;
}

const Input: FC<InputProps> = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autoFocus,
        readonly,
        autoComplete = 'off',
        ...otherProps
    } = props;

    const [isFocused, setFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    const ref = useRef() as MutableRefObject<HTMLInputElement>;

    const isCaretVisible = isFocused && !readonly;
    const mods: Mods = {
        [styles.readonly]: readonly,
    };

    const onChangeHandler = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
        onChange?.(value);
        setCaretPosition(value.length);
    };

    const onFocus = () => {
        setFocused(true);
    };

    const onBlur = () => {
        setFocused(false);
    };

    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    useEffect(() => {
        if (autoFocus) {
            setFocused(true);
            ref.current.focus();
        }
    }, [autoFocus]);

    return (
        <div className={classNames(styles.inputWrapper, {
            mods,
            additional: [className],
        })}
        >
            { placeholder && (
                <div className={styles.placeholder}>
                    { `${placeholder}>` }
                </div>
            ) }

            <div className={styles.caretWrapper}>
                <input
                    ref={ref}
                    className={styles.input}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    readOnly={readonly}
                    autoComplete={autoComplete}
                    {...otherProps}
                />

                { isCaretVisible && (
                    <span
                        className={styles.caret}
                        style={{ left: `${caretPosition * 9}px` }}
                    />
                ) }
            </div>

        </div>
    );
});

export default Input;
