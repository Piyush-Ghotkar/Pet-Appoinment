import '../css/App.css';
import icon from '../img/icon.svg';

function HeaderNav(props) {

    function formHandler(){
        props.toggleForm();
    }

    return (
        <div className="header">
            <div className="icon-img"><img src={icon} alt="icon" /></div>
            <div className='header-txt'>Pet Appointment</div>
           
                <input type="text" placeholder="Search" onChange={props.SearchApt} />
            
            <div className='header-txt-secondary' onClick={formHandler}>Add Appointment</div>
        </div>
    );
}

export default HeaderNav;