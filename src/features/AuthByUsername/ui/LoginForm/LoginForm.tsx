import { isFulfilled } from '@reduxjs/toolkit';
import {
    loginActions,
    loginByUsername,
    loginErrorSelector,
    loginLoadingSelector,
    loginPasswordSelector,
    loginReducer,
    loginUsernameSelector,
} from 'features/AuthByUsername';
import {
    FC, memo, useCallback, useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { Button, Input, Text } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button';
import { TextTheme } from 'shared/ui/Text';

import styles from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const LoginForm: FC<LoginFormProps> = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const username = useSelector(loginUsernameSelector);
    const password = useSelector(loginPasswordSelector);
    const error = useSelector(loginErrorSelector);
    const isLoading = useSelector(loginLoadingSelector);

    const handleChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const handleChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const handleLogin = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));

        if (isFulfilled(result)) {
            onSuccess();
        }
    }, [password, username, dispatch, onSuccess]);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleLogin();
        }
    }, [handleLogin]);

    useDynamicModuleLoader({ reducers: { login: loginReducer }, removeOnUnmount: true });

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    return (
        <div className={classNames(styles.loginForm, {
            mods: {},
            additional: [className],
        })}
        >
            <div className={styles.titleWrapper}>
                <Text title={t('Authorization form')} />

                { error && <Text text={error} theme={TextTheme.ERROR} /> }
            </div>

            <Input
                value={username}
                onChange={handleChangeUsername}
                placeholder={t('Enter username')}
                className={styles.input}
                autoFocus
                readonly={isLoading}
            />

            <Input
                value={password}
                onChange={handleChangePassword}
                placeholder={t('Enter password')}
                className={styles.input}
                readonly={isLoading}
            />

            <Button
                onClick={handleLogin}
                className={styles.loginBtn}
                theme={ButtonTheme.OUTLINE}
                disabled={isLoading}
            >
                {t('Log in')}
            </Button>
        </div>
    );
});

export default LoginForm;
