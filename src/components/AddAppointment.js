import '../css/App.css';
import close from '../img/close.svg';
import {useState} from 'react';

function AddAppointment(props){

 const [warning,setWarning]=useState(false);


 var index="",petName="",ownerName="",aptNotes="",aptDate="";
 function petNameHandler(e){
    petName=e.target.value;
 }
 function ownerNameHandler(e){
    ownerName=e.target.value;
 }
 function dateHandler(e){
    aptDate=e.target.value;
}
function descriptionHandler(e){
    aptNotes=e.target.value;
}

function onSubmitHandler(){
    if(petName==="" || aptDate==="") setWarning(true);
    else{
        setWarning(false);
        index=props.apt.length;
        props.setValues(index,petName,ownerName,aptNotes,aptDate,1);
        document.getElementById("add-apt-form").reset();
        props.toggleForm()
    }
}

function formCloseHandler(){
    props.toggleForm();
}

 return (
    <div className={"container container-center topPadding " + (props.formDisplay ? '' : 'formDisplayNone')}>
        <div className="card offwhitebg form-container">
            <div className="close">
                <img src={close} alt="close" onClick={formCloseHandler} />
            </div>
            <div className="form-heading title">Add New Appointment</div>
            <form id="add-apt-form">
                <div className="row">
                <label htmlFor="petName" className="form-label">Pet Name</label>
                <input type="text" id='petName' placeholder={(warning ?"Required !!" :'')} className={(warning ?'inputValidation' :'inputValidationOverride')}  onChange={petNameHandler} />
                </div>

                <div className="row">
                <label htmlFor="ownerName" className="form-label">Owner Name</label>
                <input type="text"  id='ownerName' onChange={ownerNameHandler} />
                </div>

                <div className="row">
                <label htmlFor="date" className="form-label">Date-Time </label>
                <input type="datetime-local" id='date' className={(warning ?'inputValidation' :'inputValidationOverride')} onChange={dateHandler} />
                </div>

                <div className="row">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea rows="5"    id='description' onChange={descriptionHandler} ></textarea>
                </div>

                <div className="submitBtn" onClick={onSubmitHandler}>Submit</div>
            </form>
        </div>
    </div>
    );
}

export default AddAppointment;