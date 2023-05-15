import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, Input } from 'shared/ui';

import styles from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

const LoginForm: FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.loginForm, {
            mods: {},
            additional: [className],
        })}
        >
            <Input placeholder={t('Введите логин')} className={styles.input} autoFocus />
            <Input placeholder={t('Введите пароль')} className={styles.input} />
            <Button className={styles.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
    );
};

export default LoginForm;
