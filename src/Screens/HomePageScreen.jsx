import '../pages_styling/export_pages_main.css'
import { NavBar } from './navbar/NavBar'
import { useState } from 'react'
import { AboutUsSectionOne } from './AboutUsScreen'
import { SolutionSection } from './SolutionScreen'
import { PaymentSection } from './PaymentScreen'
import { ButtonComponent } from '../components/UiComponents'
import {FooterBody} from '../Screens/footer/FooterView'
import iconCBN from '../assets/iconCBN.png'
import iconNDIC from '../assets/iconNDIC.png'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import fedexLogo from '../assets/fedexLogo.png'
import GuinnessLog from '../assets/GuinnessLog.png'
import HMEDIXLogo from '../assets/H-MEDIXLogo.png'
import fuhao from '../assets/fuhao-0158caac.png'


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
            <div className='sectionTwo'>
                <Section2HomeView imagPath={img1} h2Text="Omnichannel Payments" detailText="Make payment collection safer, easier and faster via multiple channels" />
                <Section2HomeView imagPath={img2} h2Text="Industrial Payment Solutions" detailText="Get a customized payment solution for your business" />
                <Section2HomeView imagPath={img2} h2Text="Banking & Bill Payments" detailText="Enjoy financial inclusion and efficiency with the largest banking agent network" />
                <Section2HomeView imagPath={img1} h2Text="Online Sales & Marketing" detailText="Expand your sales channels from offline to online" />
            </div>
            <div className='sectionThree'>
                <Section3HomeView />
            </div>
            <div className='sectionFour'>
                <Section4HomeView textName="Joshua" textFdBk="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consequuntur commodi cumque magnam odit," />
                <Section4HomeView textName="Isaiah" textFdBk="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consequuntur commodi cumque magnam odit," className="resizedsectionFourChild" />
                <Section4HomeView textName="Obed" textFdBk="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consequuntur commodi cumque magnam odit," />
            </div>
            <div className='sectionFive'>
                <Section5HomeView />
            </div>
            <FooterBody/>
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

export function Section2HomeView({ imagPath, h2Text, detailText }) {
    return (
        <section className='section2child'>
            <img src={imagPath} alt="" />
            <h2>{h2Text}</h2>
            <h3>{detailText}</h3>
        </section>
    );
}

export function Section3HomeView() {
    var img1 = fedexLogo;
    var img2 = GuinnessLog;
    var img3 = HMEDIXLogo;
    return (
        <>
            <br />
            <h1 className='sectionThreechildText'>Trusted by over <span className='spanNumber'>1,000,000</span> <span className='stretchText'>businesses across Nigeria</span></h1>
            <div className='imgLogs'>
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
            </div>
        </>

    );
}

export function Section4HomeView({ textName, textFdBk, className }) {
    return (
        <div className={`sectionFourChild ${className}`}>
            <div className='rowTextImg'>
                <h2>{textName}</h2>
                <img src={fuhao} alt="" />
            </div>
            <h3>{textFdBk}</h3>
        </div>
    );
}
export function Section5HomeView() {
    return (
        <>
            <h1 className='sectionFiveHeadText'>Join Us & Grow Your Business Faster</h1>
          
            <ButtonComponent buttonText="Contact Opay" className='sectionFourContactButton'>
                <i className="fas fa-phone" />
            </ButtonComponent>        
        </>
    );
}