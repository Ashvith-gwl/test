import React from "react";

function Textfield(props) {
//    let fname = Math.floor(Math.random() * 10);

//    let rname = Math.random().toString(36).substring(7);
// console.log( rname)
   
let names = props.values;
//    console.log( names)
  return (
    <div className="App">
      {/* <input type="text" name="fname"  /> */}
      
      <input type="text" name={names} onChange={props.handleChange} />
    </div>
  );
}
  
export default Textfield;