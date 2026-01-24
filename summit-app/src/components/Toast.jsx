import { useEffect } from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';
import './Toast.css';

const Toast = ({ message, type = 'success', isVisible, onClose }) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    if (!isVisible) return null;

    return (
        <div className={`toast toast-${type} ${isVisible ? 'toast-visible' : ''}`}>
            <div className="toast-icon">
                {type === 'success' ? <CheckCircle size={20} /> : <XCircle size={20} />}
            </div>
            <div className="toast-content">
                <p>{message}</p>
            </div>
            <button className="toast-close" onClick={onClose}>
                <X size={16} />
            </button>
        </div>
    );
};

export default Toast;
