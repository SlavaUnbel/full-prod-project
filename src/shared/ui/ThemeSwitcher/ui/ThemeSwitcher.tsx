import { FC, ReactNode } from 'react';
import classNames from 'shared/lib/classNames';
import { Button, ThemeButton } from 'shared/ui/Button';
import { useTheme } from 'app/providers/ThemeProvider';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';

import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();

    const mapThemeToIcon: Record<Theme, ReactNode> = {
        [Theme.LIGHT]: <LightIcon />,
        [Theme.DARK]: <DarkIcon />,
    };

    return (
        <Button
            className={classNames(styles.themeSwitcher, {}, [className])}
            onClick={toggleTheme}
            theme={ThemeButton.CLEAR}
        >
            { mapThemeToIcon[theme] }
        </Button>
    );
};

export default ThemeSwitcher;
