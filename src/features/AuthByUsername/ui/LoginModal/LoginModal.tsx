import { FC, Suspense } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader, Modal } from '@/shared/ui';

import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    className?: string;
}

const LoginModal: FC<LoginModalProps> = ({ isOpen, onClose, className }) => (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
        lazy
        className={classNames('', { additional: [className] })}
    >
        <Suspense fallback={<Loader />}>
            <LoginFormAsync onSuccess={onClose} />
        </Suspense>
    </Modal>
);

export default LoginModal;
