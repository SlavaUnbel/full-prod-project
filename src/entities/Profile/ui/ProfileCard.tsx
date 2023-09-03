import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { Translations } from 'shared/lib/translations/translations';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { Text } from 'shared/ui/Text';

import { profileDataSelector } from '../model/selectors/profileSelector';
import styles from './ProfileCard.module.scss';

const ProfileCard: FC = memo(() => {
    const { t } = useTranslation(Translations.PROFILE);

    const data = useSelector(profileDataSelector);

    return (
        <div className={classNames(styles.profileCard)}>
            <div className={styles.header}>
                <Text title={t('Profile')} />
                <Button
                    className={styles.editBtn}
                    theme={ButtonTheme.OUTLINE}
                >
                    {t('Edit')}
                </Button>
            </div>

            <div className={styles.data}>
                <Input
                    value={data?.firstname}
                    placeholder={t('Your firstname')}
                    className={styles.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('Your lastname')}
                    className={styles.input}
                />
            </div>
        </div>
    );
});

export default ProfileCard;
