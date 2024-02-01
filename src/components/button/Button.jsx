import './Button.css';

function Button({ children, clickHandler, disabled, type, className }) {
    return (
        <button
            type={type}
            onClick={clickHandler}
            disabled={disabled}
            className={className}
        >
            {children}
        </button>
    );
}

export default Button;