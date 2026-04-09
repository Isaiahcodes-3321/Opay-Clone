
import './components_main.css';

export function ButtonComponent({ buttonText, className = "", children }) {
    return (
        <button className={`mainButton ${className}`}>
            {children}
            {buttonText}
        </button>
    );
}