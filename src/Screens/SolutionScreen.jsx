import '../pages_styling/export_pages_main.css'
import { FooterBody } from "./footer/FooterView";
import { ButtonComponent } from '../components/UiComponents'
import img4 from '../assets/img4.png'
import img1 from '../assets/img1.png'




export function SolutionSection() {
    return (
        <>
            <SolutionHeadView />
            <div className="solutionPageMainBody">
                <div className='parentBoxSection2'>
                    <Section2SolutionView imgPath={img4} text1='Digitize valuechains' text2="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consequuntur commodi cumque, sit amet elit." />
                    <Section2SolutionView imgPath={img4} text1='Automate payment collection processes' text2="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consequuntur commodi cumque, sit amet elit." />
                    <Section2SolutionView imgPath={img4} text1='Eliminate potential business risks' text2="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consequuntur commodi cumque, sit amet elit." />
                    <Section2SolutionView imgPath={img4} text1='Expand saleschannels' text2="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consequuntur commodi cumque, sit amet elit." />
                    <Section2SolutionView imgPath={img4} text1='Enhance customer loyalty and improve repeat purchase rate' text2="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consequuntur commodi cumque, sit amet elit." />

                </div>
                <Section3SolutionView />
            </div>
            <FooterBody />
        </>

    );
}

export function SolutionHeadView() {
    return (
        <div className='solutionHeadViewMainBody'>
            {/* other tag will go in here */}
            <div className='zIndexBox'>
                <h1> <span>Innovation</span> Payment Solutions for Your Business</h1>
                <hr />
                <h3>By understanding your business models and identifying pain points, OPay Business provides customized industrial solutions with ready-made products to help you outpace competitors.</h3>
            </div>
            <div className='zIndexBox1'>
                <ImgBox imgPath={img1} imageBoxSt="" />
                <ImgBox imgPath={img1} imageBoxSt="forBgScreen" />
                <ImgBox imgPath={img1} imageBoxSt="" />
               
                <ImgBox imgPath={img1} imageBoxSt="forBgScreen" />
                <ImgBox imgPath={img1} imageBoxSt="" />
                <ImgBox imgPath={img1} imageBoxSt="" />
            </div>
        </div>
    );
}

export function ImgBox({ imgPath, imageBoxSt }) {
    return (
        <div className={`imgBoxStyle ${imageBoxSt}`}>
            <img src={imgPath} alt="" />
        </div>
    );
}

export function Section2SolutionView({ imgPath, text1, text2 }) {
    return (
        <div className='boxChildSection2'>
            <div className='imgView'> <img src={imgPath} alt="" /></div>
            <h2>{text1}</h2>
            <h3>{text2}</h3>
        </div>
    );
}


export function Section3SolutionView() {
    return (
        <>
            <ButtonComponent buttonText="Contact Opay" className='sectionFourContactButton'>
                <i className="fas fa-phone" />
            </ButtonComponent>
            <h2 className='lastText'>Get in touch with us to learn more</h2>
        </>
    );
}