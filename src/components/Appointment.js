import '../css/App.css';
import close from '../img/close.svg';
import sortImg from "../img/sort.png"


function Appointment(props){
    return (
        <>
        <div className="container container-center topPadding">
            {/* {console.logb(props.apt)} */}
            <div className="dropdown">
                <div className='sortby-btn' >
                    Sort By 
                    <img src={sortImg} alt="sort" />
                </div>
                <div className="dropdown-content">
                    <li className={(props.sortBy==="petName"?'active':'')} onClick={()=>props.setSortBy("petName")}>Pet Name</li>
                    <li className={(props.sortBy==="ownerName"?'active':'')} onClick={()=>props.setSortBy("ownerName")}>Owner Name</li>
                    <li className={(props.sortBy==="parseDate"?'active':'')} onClick={()=>props.setSortBy("parseDate")}>Date</li>
                    <hr/>
                    <li className={(props.sortByDirection==="asc"?'active':'')} onClick={()=>props.setSortByDirection("asc")}>Ascending</li>
                    <li className={(props.sortByDirection==="desc"?'active':'')} onClick={()=>props.setSortByDirection("desc")}>Descending</li>
                </div>
            </div>
            <br /><br /><br />
            {props.apt.map(item => ( 
                 <li  key={item.id}>
                <div className="card offwhitebg">
                    <div className="close">
                        <img src={close} onClick={()=>props.DeleteAppointment(item)} alt="close"/>
                    </div>
                    <div className="title">{item.petName}</div>
                    
                        <div className="title-sub"><b>Owner Name</b>: {item.ownerName}</div>
                        <div className="date">{item.aptDate}</div>
                        <div className="description">{item.aptNotes}</div>
                    
                </div>
                 </li>
            ))}
        </div>
        </>
    );
}

export default Appointment;