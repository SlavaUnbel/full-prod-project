import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui';
import LoginForm from '../LoginForm/LoginForm';

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
        className={classNames('', {
            mods: {},
            additional: [className],
        })}
    >
        <LoginForm />
    </Modal>
);

export default LoginModal;
