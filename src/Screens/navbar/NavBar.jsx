import React, { useState } from 'react';
import '../../pages_styling/navbar_styling.css';
import logoImg2 from '../../assets/logoImg2.png';
import { handleMenuToggle } from './navlogic';

export function NavBar({ activeItem, setActiveItem }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuItems = ['Home', 'Payments', 'Solutions', 'About Us'];

    return (
        <>
            <header className="mainNav">
                <div className='logoBox'>
                    <img src={logoImg2} alt="OPay Logo" />
                </div>

                <nav className='listnav'>
                    <ul className="desktopMenu">
                        {menuItems.map((item) => (
                            <li
                                key={item}
                                className={activeItem === item ? 'active' : ''}
                                onClick={() => setActiveItem(item)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div
                        className='menuIcon'
                        onClick={() => handleMenuToggle(isMenuOpen, setIsMenuOpen)}
                    >
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </nav>
            </header>

            <div className={`mobileOverlay ${isMenuOpen ? 'open' : ''}`}>
                <div className="overlayHeader">
                    <div className='logoBox'>
                        <img src={logoImg2} alt="Logo" />
                    </div>
                    <div className="closeCircle" onClick={() => handleMenuToggle(true, setIsMenuOpen)}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                </div>

                <ul className="mobileMenuList">
                    {menuItems.map((item) => (
                        <li
                           key={item}
                            onClick={() => {
                                setActiveItem(item);
                                handleMenuToggle(true, setIsMenuOpen);
                            }}
                        >
                            {item}
                            <i className="fa-solid fa-chevron-right"></i>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

