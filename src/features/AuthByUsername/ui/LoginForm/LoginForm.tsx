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
            <Input placeholder={t('Enter username')} className={styles.input} autoFocus />
            <Input placeholder={t('Enter password')} className={styles.input} />
            <Button className={styles.loginBtn}>
                {t('Log in')}
            </Button>
        </div>
    );
};

export default LoginForm;
