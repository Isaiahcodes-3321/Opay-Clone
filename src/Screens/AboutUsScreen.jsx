import { FooterBody } from "./footer/FooterView";
import '../pages_styling/export_pages_main.css'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/opayBuilding1.png'
import img4 from '../assets/opayBuilding.png'





export function AboutUsSectionOne() {
    return (
        <>
            <AboutSection1View />
            {/* small screen view */}
            <AboutTextInfoView reStyleAboutTextInfo="aboutTextInfoRestyleSmllVw" />
            <div className="aboutPageMainBody">
                <h1>Company Values</h1>
                <ValueComponent text1='Entrepreneurship' text2="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consequuntur commodi cumque magnam odit," img={img2} vcParentBoxReStyle="reStyleBox1" padd="rh22" />
                <ValueComponent text1='Diversity' text2="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consequuntur commodi cumque magnam odit," img={img1} vcParentBoxReStyle="reStyleBox2" padd="rh2" />
                <ValueComponent text1='Innovation' text2="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consequuntur commodi cumque magnam odit," img={img2} vcParentBoxReStyle="reStyleBox3" padd="rh22" />
                <ValueComponent text1='Community' text2="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consequuntur commodi cumque magnam odit," img={img1} vcParentBoxReStyle="reStyleBox4" padd="rh2" />
            </div>
            <FooterBody />
        </>

    );
}

export function AboutSection1View() {
    return (
        <div className="aboutMainBox">
            <div className="mainBoardView">
            <div className="chdMainBoardView">
                <h1>About Us</h1>
            </div>
            <div className="chdMainBoardView1">
                <AboutTextInfoView reStyleAboutTextInfo="aboutTextInfoRestyleBgVw" />
                <div className="aboutTextImg">
                    <img className="bgScImg" src={img3} alt="" />
                    <img className="smllScImg" src={img4} alt="" />
                </div>
            </div>
        </div>
        </div>

    );
}

export function AboutTextInfoView({ reStyleAboutTextInfo }) {
    return (
        <div className={`aboutTextInfo ${reStyleAboutTextInfo}`}>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consequuntur commodi cumque magnam odit, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consequuntur commodi cumque magnam odit, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consequuntur commodi cumque magnam odit, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consequuntur commodi cumque magnam odit,</p>
            <br />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consequuntur commodi cumque magnam odit, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consequuntur commodi cumque magnam odit, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consequuntur commodi cumque magnam odit, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid consequuntur commodi cumque magnam odit, </p>

        </div>
    );
}

export function ValueComponent({ text1, text2, img, vcParentBoxReStyle = '', padd = '' }) {
    return (
        <div className={`vcParentBox ${vcParentBoxReStyle}`}>
            <div className="vcChildBox1">
                <h2 className={`${padd}`}>{text1}</h2>
                <h3 className={`${padd}`}>{text2}</h3>
            </div>
            <div className="vcChildBox1">
                <img src={img} alt="" />
            </div>
        </div>
    );
}



