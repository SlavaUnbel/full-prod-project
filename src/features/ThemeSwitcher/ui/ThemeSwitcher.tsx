import { FC, memo } from 'react';

import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import LightIcon from '@/shared/assets/icons/theme-light.svg';
import { Theme } from '@/shared/const/theme';
import { classNames } from '@/shared/lib/classNames/classNames';
import useTheme from '@/shared/lib/hooks/useTheme';
import { Button, ButtonTheme } from '@/shared/ui/Button';

interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            className={classNames('', { additional: [className] })}
            onClick={toggleTheme}
            theme={ButtonTheme.CLEAR}
        >
            { theme === Theme.DARK ? <DarkIcon /> : <LightIcon /> }
        </Button>
    );
};

export default memo(ThemeSwitcher);
