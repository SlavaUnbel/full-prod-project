import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { Translations } from 'shared/lib/translations/translations';
import { Button, Input } from 'shared/ui';

import { addCommentFormErrorSelector, addCommentFormTextSelector } from '../model/selectors/addCommentFormSelector';
import { addCommentFormActions, addCommentFormReducer } from '../model/slice/addCommentFormSlice';
import styles from './AddCommentForm.module.scss';

interface AddCommentFormProps {
    onSendComment: (text?: string) => void;
    className?: string;
}

const AddCommentForm: FC<AddCommentFormProps> = ({ onSendComment, className }) => {
    const { t } = useTranslation(Translations.ARTICLES);

    useDynamicModuleLoader({
        reducers: { addCommentForm: addCommentFormReducer },
    });

    const dispatch = useAppDispatch();

    const text = useSelector(addCommentFormTextSelector);
    const error = useSelector(addCommentFormErrorSelector);

    const handleCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const handleSendComment = useCallback(() => {
        onSendComment(text);
        handleCommentTextChange('');
    }, [handleCommentTextChange, onSendComment, text]);

    return (
        <div className={classNames(styles.addCommentForm, {
            mods: {},
            additional: [className],
        })}
        >
            <Input
                placeholder={t('Enter comment')}
                value={text}
                onChange={handleCommentTextChange}
                className={styles.input}
            />

            <Button onClick={handleSendComment}>{t('Send')}</Button>
        </div>
    );
};

export default memo(AddCommentForm);
