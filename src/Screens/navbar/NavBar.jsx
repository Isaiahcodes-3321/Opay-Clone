import '../../pages_styling/navbar_styling.css';
import logoImg2 from '../../assets/logoImg2.png';

export function NavBar() {
    return (
        <div className="mainNav">
            <div className='logoBox'>
                <img src={logoImg2} alt="Logo"
                    style={{ width: '20vw', height: 'auto' }} />
            </div>
            {/* for list nav  */}
            <div className='listnav'>
                {/* image icon */}
                {/* <img src="" alt="" /> */}
            </div>
        </div>
    );
}