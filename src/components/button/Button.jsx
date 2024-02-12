import './Button.css';

function Button({ children, onClick, disabled, type, className }) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={className}
        >
            {children}
        </button>
    );
}

export default Button;