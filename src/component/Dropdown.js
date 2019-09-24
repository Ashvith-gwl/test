import React from "react";

function Dropdown(props) {
    let datas1 = props.dropdowns
    // console.log(datas1)
    // let datas1 =   datas[1].values;
    let name = props.name;
    return (
        <div className="App">
            
            <select name={name} onChange={props.handleChange}>
                {datas1.map((row, id) => (
                    <option key={id} value={row}>{row}</option>
                ))}
            </select>

        </div >
    );
}

export default Dropdown;