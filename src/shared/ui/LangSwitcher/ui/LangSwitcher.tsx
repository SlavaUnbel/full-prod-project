import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';
import { ThemeButton } from 'shared/ui/Button';
import { classNames } from 'shared/lib/classNames/classNames';

import styles from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            onClick={toggle}
            theme={ThemeButton.CLEAR}
            className={classNames(styles.langSwitcher, {
                mods: {},
                additional: [className],
            })}
        >
            { t('Язык') }
        </Button>
    );
};

export default LangSwitcher;
