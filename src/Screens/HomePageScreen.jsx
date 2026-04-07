import '../pages_styling/export_pages_main.css'
import { NavBar } from './navbar/NavBar'
import { useState } from 'react'
import { AboutUsSectionOne } from './AboutUsScreen'
import { SolutionSection } from './SolutionScreen'
import { PaymentSection } from './PaymentScreen'
import { ButtonComponent } from '../components/UiComponents'
import iconCBN from '../assets/iconCBN.png'
import iconNDIC from '../assets/iconNDIC.png'

export function HomePage() {
    const [activeItem, setActiveItem] = useState('Home');

    const renderSection = () => {
        switch (activeItem) {
            case 'Home':
                return <HomeSection />;
            case 'Payments':
                return <PaymentSection />;
            case 'Solutions':
                return <SolutionSection />;
            case 'About Us':
                return <AboutUsSectionOne />;
            default:
                return <HomeSection />;
        }
    };

    return (
        <div className="mainBox">
            <NavBar activeItem={activeItem} setActiveItem={setActiveItem} />
            {renderSection()}
        </div>
    );
}

export function HomeSection() {
    return (
        <>
            <div className="sectionOne">
                <div >
                    <SideBoardText />
                </div>

            </div>
            <div className='smallScreenBoardtext'>
                <SideBoardText />
            </div>
        </>
    );
}
export function SideBoardText() {
    return (
        <div className='sBox1'>
            <h1>Reliable, Fast &
                Safe Payments</h1>
            <h2>Get omnichannel payment solutions to grow your business better!</h2>
            <br />
            <ButtonComponent buttonText="Contact Us" className="extraStyling" />
            <div className="licensedWrapper">
                <LastSideBoardText text="Licensed by" text1="CBN" imgPath={iconCBN} />
                <LastSideBoardText text="Insured by" imgPath={iconNDIC} isNDIC />
            </div>
        </div>
    );
}

export function LastSideBoardText({ text, text1, imgPath, isNDIC }) {
    return (
        <div className='licensedRow'>
            <span className="licensedText">{text}</span>
            {text1 && <span className="licensedBold">{text1}</span>}
            <img className={isNDIC ? 'imgNDIC' : 'imgg'} src={imgPath} alt="" />
        </div>
    );
}