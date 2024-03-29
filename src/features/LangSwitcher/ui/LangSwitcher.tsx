import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Button, ButtonTheme } from '../../../shared/ui/Button';

import { profileActions, profileDataSelector } from '@/entities/Profile';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

const LangSwitcher: FC<LangSwitcherProps> = ({ className, short }) => {
    const { t, i18n } = useTranslation();

    const dispatch = useAppDispatch();

    const { country } = useSelector(profileDataSelector);

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');

        dispatch(
            profileActions.updateProfile({ country: t(country as string) }),
        );
    };

    return (
        <Button
            onClick={toggle}
            theme={ButtonTheme.CLEAR}
            className={classNames(styles.langSwitcher, {
                mods: { [styles.short]: short },
                additional: [className],
            })}
        >
            {t(short ? 'Short language' : 'Language')}
        </Button>
    );
};

export default memo(LangSwitcher);
