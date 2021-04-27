import '../css/App.css';
import icon from '../img/icon.svg';

function HeaderNav() {
    return (
        <div className="header">
            <div className="icon-img"><img src={icon} alt="icon" /></div>
            <div className='header-txt'>Pet Appointment</div>
            <div className='header-txt-secondary'>Add Appointment</div>
        </div>
    );
}

export default HeaderNav;