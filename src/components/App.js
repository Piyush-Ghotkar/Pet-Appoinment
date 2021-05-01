import '../css/App.css';
import HeaderNav from './HeaderNav';
import Appointment from './Appointment';
import AddAppointment from './AddAppointment';
import Footer from './Footer';
import  { useState,useReducer } from 'react';
// import { Routers,Route, Routes } from 'react-router-dom';

const initialValues=[];



function App() {

  const [data,setData]=useState(initialValues);
  const [formDisplay,setformDisplay]=useState(false);
  const [callOnce, togglecallOnce]=useReducer((callOnce)=>!callOnce,false);
  const [searchQry, setSearchQry]=useState(" ");
  const [sortBy, setSortBy]=useState("petName");
  const [sortByDirection, setSortByDirection]=useState("asc");

 
function setValues(index,petName,ownerName,aptNotes,aptDate,isItUpdate){
    var tempData=data;
   
    let obj={
      "id":index,
      "petName":petName,
      "ownerName":ownerName,
      "aptNotes":aptNotes,
      "aptDate":aptDate,
      "parseDate":Date.parse(aptDate, "Y-m-d g:i")
    }

    // if(isItUpdate) tempData.unshift(obj);
    // else tempData.push(obj);
    tempData.push(obj);
    setData(tempData);
  }


 //** can be used:componentDidMount()
  function FetchData(callOnce){ 

    if(callOnce===false){
        var index=0;
        fetch('./data.json')
        .then(response => response.json())
        .then(result => {
          result.map(item => {
            setValues(index,item.petName,item.ownerName,item.aptNotes,item.aptDate,0);
            index++;
            return item;
          });
        togglecallOnce();
       });
    }
  
  }

  function toggleForm(){
    setformDisplay(!formDisplay);
  }

  function DeleteAppointment(obj){
    var tempData=data.filter(function(item) {
      return item !== obj
     });
    setData(tempData);
  }

  function SearchApt(query){
    setSearchQry(query.target.value.trim());
  }
  




  FetchData(callOnce);
  var filterApts= data;

    var order;
  if(sortByDirection==='asc') order=1;
  else order=-1;

  filterApts=filterApts
  .sort((a,b)=>{
        if(a[sortBy]<b[sortBy]) return -1*order;
        else return 1*order;
        }
      )
  .filter(item => {
      return (
          item.petName.toLowerCase().includes(searchQry) ||
          item.ownerName.toLowerCase().includes(searchQry) ||
          item.aptNotes.toLowerCase().includes(searchQry) 
      );
  })


  return (
    <>
    
    <HeaderNav toggleForm={toggleForm} SearchApt={SearchApt} />
    <AddAppointment apt={data}  formDisplay={formDisplay} toggleForm={toggleForm} setValues={setValues}   />
    <Appointment apt={filterApts} DeleteAppointment={DeleteAppointment} setSortBy={setSortBy} setSortByDirection={setSortByDirection} sortBy={sortBy} sortByDirection={sortByDirection} />
    <Footer />
    
     {/*<Routes>
      <Route path="/" components={{ main:<HeaderNav />   , sidebar: <Appointment apt={data}/> }} />  */}
      {/* <Route path="/" element={<HeaderNav/>} />
      <Route path="/addAppointment" element={<AddAppointment{...data} />} /> 
      </Routes>*/}
   
    </>
  );
}

export default App;
