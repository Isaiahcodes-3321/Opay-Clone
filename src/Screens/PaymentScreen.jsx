import '../pages_styling/export_pages_main.css'
import { FooterBody } from "./footer/FooterView";
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
    return (
        <div className='pSectionTwo'>
            <h2 className='hdTextSection2'>Online Payments For Everyone </h2>
            <div className='pRowImagBox'>
                <ImageText />
                <ImageText />
                <ImageText />
            </div>
        </div>
    );
}

export function ImageText() {
    return (
        <div className='pImageBox2'>

        </div>
    );
}