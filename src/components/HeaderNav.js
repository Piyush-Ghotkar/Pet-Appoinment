import '../css/App.css';
import icon from '../img/icon.svg';

function HeaderNav() {
    return (
        <div className="header">
            <div className="icon-img"><img src={icon} /></div>
            <div className='header-txt'>Pet Appointment</div>
        </div>
    );
}

export default HeaderNav;