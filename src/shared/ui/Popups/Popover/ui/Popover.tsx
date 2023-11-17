import { FC, ReactNode, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Popover as HPopover } from '@headlessui/react';

import styles from './Popover.module.scss';
import popupStyles from '../../styles/Popups.module.scss';
import { DropdownDirection } from '../../../../types';
import { mapDirectionClass } from '../../styles/stylesConsts';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    direction?: DropdownDirection;
    children: ReactNode;
    unmount?: boolean;
}

export const Popover: FC<PopoverProps> = memo(({
    trigger,
    direction = 'bottom right',
    className,
    children,
    unmount = true,
}: PopoverProps) => {
    const menuClasses = [mapDirectionClass[direction]];

    return (
        <HPopover
            as="div"
            className={classNames(popupStyles.popup, { additional: [className] })}
        >
            <HPopover.Button className={popupStyles.trigger}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel
                unmount={unmount}
                className={classNames(styles.panel, { additional: menuClasses })}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    );
});
