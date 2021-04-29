import '../css/App.css';
import close from '../img/close.svg';


function Appointment(props){
    //console.log(props.apt);
    {console.log("component called");}
    return (
        <>
        <div className="container container-center topPadding">
            {console.log(props.apt)}
            {props.apt.map(item => ( 
                 <li  key={item.id}>
                <div className="card offwhitebg">
                    <div className="close">
                        <img src={close} alt="close"/>
                    </div>
                    <div className="title">{item.petName}</div>
                    <p>
                        <div className="title-sub"><b>Owner Name</b>: {item.ownerName}</div>
                        <div className="date">{item.aptDate}</div>
                        <div className="description">{item.aptNotes}</div>
                    </p>
                </div>
                 </li>
            ))}
           
                
           


            
        </div>
        
        {/* { <Appointment apt={data}/>} */}
        </>
    );
}

export default Appointment;