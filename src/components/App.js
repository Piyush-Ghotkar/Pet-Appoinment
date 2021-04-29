import '../css/App.css';
import HeaderNav from './HeaderNav';
import Appointment from './Appointment';
import AddAppointment from './AddAppointment';
import  { useState } from 'react';
import { Routers,Route, Routes } from 'react-router-dom';

const initialValues=[];



function App() {

  const [data,setData]=useState(initialValues);
 
  function setValues(index,petName,ownerName,aptNotes,aptDate){
    var tempData=data;
   
    let obj={
      "id":index,
      "petName":petName,
      "ownerName":ownerName,
      "aptNotes":aptNotes,
      "aptDate":aptDate
    }
    tempData.push(obj);
    //setData(tempData);
  }


  function FetchData(){
    
      var index=0;
    fetch('./data.json')
    .then(response => response.json())
    .then(result => {
      const apts = result.map(item => {
        setValues(index,item.petName,item.ownerName,item.aptNotes,item.aptDate);
        index++;
        return item;
      });
      
    });
  }
  
  


  FetchData();
  return (
    <>
    <HeaderNav />
    <AddAppointment apt={data}  />
    <Appointment apt={data} />
    
     {/*<Routes>
      <Route path="/" components={{ main:<HeaderNav />   , sidebar: <Appointment apt={data}/> }} />  */}
      {/* <Route path="/" element={<HeaderNav/>} />
      <Route path="/addAppointment" element={<AddAppointment{...data} />} /> 
      </Routes>*/}
   
    </>
  );
}

export default App;
