import '../css/App.css';
import close from '../img/close.svg';
import {useState} from 'react';

function AddAppointment(props){

 //console.log("last element", props.apt[props.apt.length-1]); To get last element

 const [warning,setWarning]=useState(false);
 const [formDisplay,setformDisplay]=useState(true);

//  let obj={
//     "id":'index',
//     "petName":'babu',
//     "ownerName":'ownerName',
//     "aptNotes":'aptNotes',
//     "aptDate":'aptDate'
//   }
//   tempData.push(obj);   
 //props.setData(tempData);


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
    if(petName=="" || aptDate=="") setWarning(true);
    else setWarning(false);
    
    index=props.apt[props.apt.length-1].id + 1;
    
    var tempData=props.apt;
    let obj={
        "id":index,
        "petName":petName,
        "ownerName":ownerName,
        "aptNotes":aptNotes,
        "aptDate":aptDate
      }
      tempData.push(obj);  
      console.log(props.apt);
}

function formCloseHandler(){
    setformDisplay(false);
}

 return (
    <div className={"container container-center topPadding " + (formDisplay ? '' : 'formDisplayNone')}>
        <div className="card offwhitebg form-container">
            <div className="close">
                <img src={close} alt="close" onClick={formCloseHandler} />
            </div>
            <div className="form-heading title">Add New Appointment</div>
            <form>
                <div className="row">
                <label for="petName" className="form-label">Pet Name</label>
                <input type="text" id='petName' placeholder={(warning ?"Required !!" :'')} className={(warning ?'inputValidation' :'inputValidationOverride')}  onChange={petNameHandler} />
                </div>

                <div className="row">
                <label for="ownerName" className="form-label">Owner Name</label>
                <input type="text" id='ownerName' onChange={ownerNameHandler} />
                </div>

                <div className="row">
                <label for="date" className="form-label">Date-Time </label>
                <input type="datetime-local" id='date' className={(warning ?'inputValidation' :'inputValidationOverride')} onChange={dateHandler} />
                </div>

                <div className="row">
                <label for="description" className="form-label">Description</label>
                <textarea rows="5"  id='description' onChange={descriptionHandler} ></textarea>
                </div>

                <div className="submitBtn" onClick={onSubmitHandler}>Submit</div>
            </form>
        </div>
    </div>
    );
}

export default AddAppointment;