import { isFulfilled } from '@reduxjs/toolkit';
import { FC, memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { loginErrorSelector } from '../../model/selectors/loginErrorSelector';
import { loginLoadingSelector } from '../../model/selectors/loginLoadingSelector';
import { loginPasswordSelector } from '../../model/selectors/loginPasswordSelector';
import { loginUsernameSelector } from '../../model/selectors/loginUsernameSelector';
import { loginByUsername } from '../../model/services/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';

import { AppRoutes } from '@/shared/const/routeConfig';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useDynamicModuleLoader } from '@/shared/lib/hooks/useDynamicModuleLoader';
import { Button, Input, Text, VStack } from '@/shared/ui';
import { ButtonTheme } from '@/shared/ui/Button';
import { TextTheme } from '@/shared/ui/Text';

import styles from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const LoginForm: FC<LoginFormProps> = ({ className, onSuccess }) => {
    const { t } = useTranslation();

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const username = useSelector(loginUsernameSelector);
    const password = useSelector(loginPasswordSelector);
    const error = useSelector(loginErrorSelector);
    const isLoading = useSelector(loginLoadingSelector);

    const handleChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const handleChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const handleLogin = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));

        if (isFulfilled(result)) {
            onSuccess();
            navigate(`${AppRoutes.PROFILE}/${result.payload.id}`);
        }
    }, [dispatch, username, password, onSuccess, navigate]);

    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                handleLogin();
            }
        },
        [handleLogin],
    );

    useDynamicModuleLoader({ reducers: { login: loginReducer } });

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    return (
        <VStack
            className={classNames(styles.loginForm, {
                additional: [className],
            })}
        >
            <VStack className={styles.titleWrapper}>
                <Text title={t('Authorization form')} />

                {error && <Text text={error} theme={TextTheme.ERROR} />}
            </VStack>

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
        </VStack>
    );
};

export default memo(LoginForm);
