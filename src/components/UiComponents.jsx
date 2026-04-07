
import './components_main.css';

export function ButtonComponent({ buttonText, className = "" }) {
    return (
        <button className={`mainButton ${className}`}>
            {buttonText}
        </button>
    );
}