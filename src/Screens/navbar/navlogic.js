export const handleMenuToggle = (isOpen, setIsOpen) => {
    const newState = !isOpen;
    setIsOpen(newState);

    if (newState) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }
};

export const validateUser = (name) => {
    return name ? `Welcome, ${name}` : "Welcome, Guest";
};