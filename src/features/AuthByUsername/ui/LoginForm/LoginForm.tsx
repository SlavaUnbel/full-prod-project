import {
    FC, memo, useCallback, useEffect,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input, Text } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button';
import { TextTheme } from 'shared/ui/Text';
import { loginActions, loginStateSelector, loginByUsername } from 'features/AuthByUsername';

import styles from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

const LoginForm: FC<LoginFormProps> = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();

    const dispatch = useDispatch();

    const {
        username, password, isLoading, error,
    } = useSelector(loginStateSelector);

    const handleChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const handleChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const handleLogin = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [password, username, dispatch]);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleLogin();
        }
    }, [handleLogin]);

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
            />

            <Input
                value={password}
                onChange={handleChangePassword}
                placeholder={t('Enter password')}
                className={styles.input}
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
