import React, { useEffect} from "react";
import "./App.css";
import { fetchSmurfVillage} from '../actions';
import AddForm from "./AddForm";
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
 const dispatch = useDispatch();
 
 const smurfs = useSelector(state => state.smurfs)

  useEffect( () => {
    dispatch(fetchSmurfVillage());
  },[smurfs])

  return (
      <div className="App">
        <h1>Smurf Village Members</h1>
        <AddForm />
        <div>
          {console.log("My lovely Smurfs", smurfs)}
          {smurfs?.map( (smurf, index) => { 
              console.log("Smurf #", index, "is", smurf)
              return(
                <div key={index}>
                  <p>{smurf.name}.</p>  
                  <p>{smurf.age} years old.</p>
                  <p>{smurf.height} tall.</p>
                  <br/><br/>
                </div>
              )
          })}
        </div>
        
      </div>
    );
  };


export default App;