import '../css/App.css';
import close from '../img/close.svg';


function Appointment(props){
    
    return (
        <>
        <div className="container container-center">
            {props.apt.map(item => (
                <div className="card offwhitebg">
                    <div className="close">
                        <img src={close} alt="close"/>
                    </div>
                    <div className="title">{item.petName}</div>
                    <p>
                        <div className="title-sub">Owner Name: {item.ownerName}</div>
                        <div className="date">{item.aptDate}</div>
                        <div className="description">{item.aptNotes}</div>
                    </p>
                </div>

            ))}
           
                
           


            
        </div>
        
        { <Appointment apt={data}/>}
        </>
    );
}

export default Appointment;