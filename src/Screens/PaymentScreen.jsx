import '../pages_styling/export_pages_main.css'
import { FooterBody } from "./footer/FooterView";
import { ButtonComponent } from '../components/UiComponents'
import img1 from '../assets/opayMachImg.png'


export function PaymentSection() {
    var string1 = "Lorem ipsum dolor, sit amet consectetur a";
    var string2 = "Lorem ipsum dolor, sit amet ";
    var string3 = "Lorem ipsum dolor, sit ame";
    var string4 = "Lorem ipsum dolor, sit ";
    var string5 = "Lorem ipsum dolor, sit amet consectetur";
    var string6 = "Lorem ipsum dolor, sit amet consectetur adipi";
    return (
        <>
            <div className="paymentMainViewBody">
                <PaymentSectionOne />
                <RowViewBox text1="POS Terminals" text2="Get POS terminals that meet your specific needs" imgPath={img1} listText1={string1} listText2={string2} listText3={string3} listText4={string4} listText5={string5} listText6={string6} />
                <RowViewBox text1="Transfer Number" text2="Receive transfers in a safer & faster way" imgPath={img1} reStleRowBox="rreStleRowBox" listText1={string1} listText2={string2} listText3={string3} listText4={string4} listText5={string5} listText6={string6} />
                <RowViewBox text1="OPay Business App" text2="Manage your business at your fingertips" imgPath={img1} listText1={string1} listText2={string2} listText3={string3} listText4={string4} listText5={string5} listText6={string6} />

            </div>
            <PaymentSectionTwo />
            <LastSection />
            <FooterBody />
        </>

    );
}

export function PaymentSectionOne() {
    return (
        <div>
            <div className='headText'>
                {/* big screen */}
                <h1 className='htText1Bg'>Upgrade Your Business with OPay <br /> <span> Omnichannel</span> Payments</h1>
                {/* smll screen */}
                <h1 className='htText1Sm'>Upgrade Your <br /> Business with OPay <br /> <span> Omnichannel</span> <br /> Payments</h1>
                <hr />
            </div>
        </div>
    );
}

export function SubHeadText({ text, text1 }) {
    return (
        <>
            <div className='subTT'>
                <h2 className='subHeadtext'>{text}</h2>
                <h3 className='subHeadText1'>{text1}</h3>
            </div>
        </>
    );
}



export function RowViewBox({ text1, text2, imgPath, reStleRowBox, listText1, listText2, listText3, listText4, listText5, listText6 }) {
    return (
        <div className={`rowBox ${reStleRowBox}`}>
            <div className='rowBoxChild1'>
                < SubHeadText text={text1} text1={text2} />
                <ListText text={listText1} />
                <ListText text={listText2} />
                <ListText text={listText3} />
                <ListText text={listText4} />
                <ListText text={listText5} />
                <ListText text={listText6} />

            </div>
            <div className='rowBoxChild1'>
                <img src={imgPath} alt="" />
            </div>
        </div>
    );
}

export function ListText({ text }) {
    return (
        <div className="listTextContainer">
            <div className="statusDot"></div>
            <p className="statusDescription">{text}</p>
        </div>
    );
}

export function PaymentSectionTwo() {
    let string = "Lorem ipsum dolor, sit amet consectetur a Lorem ipsum dolor, sit amet consectetur a";
    return (
        <div className='pSectionTwo'>
            <h2 className='hdTextSection2'>Online Payments For Everyone </h2>
            <div className='pRowImagBox'>
                <ImageText text1="Full suite of" text2="payment options" text3={string} />
                <ImageText text1="Fraud" text2="detection" text3={string} />
                <ImageText text1="24/7" text2="customer care" text3={string} />
            </div>
        </div>
    );
}

export function ImageText({ text1, text2, text3 }) {
    return (
        <div className='pImageBox2'>
            <h1>{text1} <br /> {text2}</h1>
            <h2>{text3}</h2>
        </div>
    );
}

export function LastSection() {
    return (
        <div className='lastSectionTwo'>
            <h4 className='lsText1'>Let your customers choose their preferred payment methods and accept payments anytime, everywhere.</h4>
            <h2 className='lsText2'>Apply for OPay Online Gateway</h2>
            <h1 className='lsText3'>Get insights about your business</h1>
            <h2 className='lsText4'>Access a comprehensive data analysis of your business to help you discover your business opportunities and customer purchase behaviour. Save time, boost sales and earn more money by getting insights on your best-selling products and highest-spending customers.</h2>
            <ButtonComponent buttonText="Contact Opay" className='lastContactButton'>
                <i className="fas fa-phone" />
            </ButtonComponent>
            <h3 className='lsText5'>Get in touch with us to learn more</h3>
        </div>
    );
}