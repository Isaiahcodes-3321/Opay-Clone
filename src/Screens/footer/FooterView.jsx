import '../../pages_styling/footer_styling.css'
import footerLogo1 from '../../assets/footer-logo.png';
import footerlogoImg2 from '../../assets/logoImg.png';


export function FooterBody() {
    return (
        <footer className="footerBody">
            <div className='footerChildBody1'>
                {/* for bigger screen */}
                <img className='logoBgScreen' src={footerLogo1} alt="" />
                {/* for smaller screen */}
                <img className='logoSmScreen' src={footerlogoImg2} alt="" />
            </div>
            <div className='footerChildBody2'>
                <div className='actionView'>
                    <div className='rowActionText'>
                        <h2>Payment</h2>
                        <h2>Solution</h2>
                        <h2>About Opay</h2>
                    </div>
                    <hr />
                </div>
                <div className='addSection'>
                    <div className='addInfo'>
                        <span>
                            <i className="fa-solid fa-location-dot"></i>
                            <p>&nbsp;Lagos</p>                        </span>
                        <p className='addInfoText1'>Plot 9, Dr. Nurudeen Olowopopo Avenue, Central Business District, Alausa 100212, Ikeja, Lagos, Nigeria</p>
                        <p className='addInfoText'>Over 24 physical branches across the nation.</p>
                    </div>
                    <div className='conTactInfo'>
                        <p>Contact with us</p>
                        <p>pos-service@opay-inc.com</p>
                        <div className='socilaRowIcon'>
                            <i className="fa-brands fa-instagram"></i>
                            <i id='fbIcon' className="fa-brands fa-facebook-f"></i>
                            <i id='twitterIcon' className="fa-brands fa-twitter"></i>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

