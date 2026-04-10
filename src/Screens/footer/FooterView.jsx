import '../../pages_styling/footer_styling.css'
import footerLogo1 from '../../assets/footer-logo.png';
import footerlogoImg2 from '../../assets/logoImg.png';


export function FooterBody(){
    return (
        <footer className="footerBody">
            <div className='footerChildBody1'>
                {/* for bigger screen */}
                <img className='logoBgScreen' src= {footerLogo1} alt="" />
                {/* for smaller screen */}
                <img className='logoSmScreen' src={footerlogoImg2} alt="" />
            </div>
            <div className='footerChildBody2'>

            </div>
        </footer>
    );
}